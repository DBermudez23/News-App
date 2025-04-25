import { useGetCategoryNewsQuery } from "../API/apiSlice";
import { useState, useEffect, useMemo } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import CategoryLinks from "./CategoryLinks";
import { useParams } from "react-router-dom";
import NEWS_CATEGORIES from "../API/categories";
import MiniCard from "./MiniCard";
import SpinnerLoader from "./loader/SpinnerLoader";

function CategoryNews() {
  const getCategory = useParams();
  const categories = NEWS_CATEGORIES;

  // Obtener el URI según la categoría seleccionada
  const fetchCategory = (getCategory, categories) => {
    return categories.find(
      (category) => category.label === `news/${getCategory.category}`
    )?.uri;
  };

  const categoryUri = fetchCategory(getCategory, categories);
  const { data, error, isLoading } = useGetCategoryNewsQuery(categoryUri);

  const articles = data?.articles.results || [];
  const totalResults = data?.articles?.totalResults || 0;

  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 14;
  const totalPageNews = Math.ceil(totalResults / newsPerPage);
  const indexOfLastArticle = currentPage * newsPerPage;
  const indexOfFirstArticle = indexOfLastArticle - newsPerPage;

  const Articles = useMemo(() => {
    return articles.slice(indexOfFirstArticle, indexOfLastArticle);
  }, [articles, indexOfFirstArticle, indexOfLastArticle]);

  const suggestedPerPage = 8;
  const [suggestedArticlesIndex, setSuggestedArticles] = useState(30);

  const suggestArticles = useMemo(() => {
    return articles.slice(
      suggestedArticlesIndex,
      suggestedArticlesIndex + suggestedPerPage
    );
  }, [articles, suggestedArticlesIndex]);

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

  // Cambiar el título de la pestaña
  useEffect(() => {
    if (getCategory.category) {
      document.title = `${getCategory.category.replace("-", " ")} | News db`;
    }
  }, [getCategory]);

  if (isLoading) return <SpinnerLoader />;
  if (error)
    return (
      <h3 className="text-red-500 text-center mt-6">
        Error: {error.message}
      </h3>
    );

  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-between gap-10 
      bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-700 dark:to-gray-900
      text-gray-900 dark:text-white transition-colors duration-300">
      
      <CategoryLinks />

      <main className="flex-1 lg:p-10 p-4 lg:pr-0 lg:pl-6 animate-fade-in">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-blue-400 hover:scale-105 transition-transform duration-200 capitalize">
            {getCategory.category.replace("-", " ")}
          </h3>
        </div>

        {Articles.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No articles found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
            {Articles.map((article) => (
              <Card
                key={article.uri}
                articleUri={article.uri}
                title={article.title}
                imagePath={article.image}
                body={article.body}
                categoryUri={article.categoryUri}
              />
            ))}
          </div>
        )}

        <div className="mt-10">
          <Pagination
            prevPage={prevPage}
            currentPage={currentPage}
            totalPageNews={totalPageNews}
            nextPage={nextPage}
          />
        </div>
      </main>

      <aside className="w-full lg:w-[300px] border-t lg:border-t-0 lg:border-l border-gray-300 dark:border-gray-700 pl-6 bg-white dark:bg-gray-900 shadow-md">
        <h3 className="text-xl font-semibold text-center text-blue-400 mb-6">
          Suggestions
        </h3>
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

export default CategoryNews;
