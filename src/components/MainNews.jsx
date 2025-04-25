import { useState } from "react";
import { useGetTrendingNewsQuery } from "../API/apiSlice";
import Card from "./Card";
import CategoryLinks from "./CategoryLinks";
import Pagination from "./Pagination";
import MiniCard from "./MiniCard";
import SpinnerLoader from "./loader/SpinnerLoader";

function MainNews() {
  const { data, error, isLoading } = useGetTrendingNewsQuery();
  const articles = data?.recentActivityArticles.activity || [];

  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 18;
  const totalPageNews = Math.ceil(articles.length / newsPerPage);
  const indexOfLastArticle = currentPage * newsPerPage;
  const indexOfFirstArticle = indexOfLastArticle - newsPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const nextPage = () => {
    if (currentPage < totalPageNews) {
      setCurrentPage(currentPage + 1);
      setSuggestedArticles(suggestedArticlesIndex + suggestedPerPage);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setSuggestedArticles(suggestedArticlesIndex - suggestedPerPage);
    }
  };

  const suggestedPerPage = 8;
  const [suggestedArticlesIndex, setSuggestedArticles] = useState(30);
  const suggestArticles = articles.slice(suggestedArticlesIndex, suggestedArticlesIndex + suggestedPerPage);

  if (isLoading) return <SpinnerLoader />;
  if (error) return <h3 className="text-red-500 text-center mt-6">Error: {error.message}</h3>;

  return (
    <div className="bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-700 dark:to-gray-900 
    min-h-screen text-white flex flex-col lg:flex-row justify-between gap-10">
      <CategoryLinks />
      <main className="flex-1 lg:p-10 p-4 lg:pr-0 lg:pl-6 animate-fade-in">
        <div className="text-center mb-8 animate-fade-in">
          <h3 className="text-3xl font-bold text-blue-400 hover:scale-105 transition-transform duration-200">
            Latest News
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in">
          {currentArticles.map((article) => (
            <Card
              key={article.uri}
              articleUri={article.uri}
              title={article.title}
              imagePath={article.image}
              body={article.body}
            />
          ))}
        </div>

        <div className="mt-10 animate-fade-in">
          <Pagination
            prevPage={prevPage}
            currentPage={currentPage}
            totalPageNews={totalPageNews}
            nextPage={nextPage}
          />
        </div>
      </main>

      <aside className="w-full lg:w-[300px] border-t lg:border-t-0 lg:border-l border-gray-300 lg:p-10 p-4 pl-6
      dark:border-gray-700 pl-6 bg-white dark:bg-gray-900 shadow-md">
        <h3 className="text-xl font-semibold text-center text-blue-400 mb-6">Suggestions</h3>
        <div className="flex flex-col gap-4">
          {suggestArticles.map((article) => (
            <MiniCard
              key={article.uri}
              articleUri={article.uri}
              title={article.title}
              imagePath={article.image}
            />
          ))}
        </div>
      </aside>
    </div>
  );
}

export default MainNews;
