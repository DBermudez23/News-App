import { useGetCategoryNewsQuery } from "../API/apiSlice";
import { useState } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import CategoryLinks from "./CategoryLinks";
import { useParams } from "react-router-dom";
import NEWS_CATEGORIES from "../API/categories";
import MiniCard from "./MiniCard";
import SpinnerLoader from "./loader/SpinnerLoader";

function CategoryNews() {

    const getCategory  = useParams(); //Obtain the category selected by the user
    const categories = NEWS_CATEGORIES;

    const fetchCategory = ( getCategory, categories ) => {
        /*This function takes as parameters the category selected by the user (getCategory)
        and the news categories (categories) and returns the uri of the selected category */
        let category = 0;
        for (category; category < categories.length; category++) {
            if (categories[category].label === `news/${getCategory.category}`) {
                return categories[category].uri;
            }
        }
    }
    const categoryUri = fetchCategory(getCategory, categories);
    //console.log("categoryUri:", categoryUri);
    // Get the data from the API based on the category selected by the user
    const { data, error, isLoading } = useGetCategoryNewsQuery(categoryUri);
    //console.log("Data:", data);
    const articles = data?.articles.results || [];


    const totalResults = data?.articles?.totalResults || 0;
    const [currentPage, setCurrentPage] = useState(1);
    const newsPerPage = 8;
    // Calc of total pages
    const totalPageNews = Math.ceil(totalResults / newsPerPage);
    // Calcul of the articles to show in the current page  
    const indexOfLastArticle = currentPage * newsPerPage;
    const indexOfFirstArticle = indexOfLastArticle - newsPerPage;
    const Articles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

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

    //Suggestions
    const suggestedPerPage = 12;
    const [suggestedArticlesIndex, setSuggestedArticles] = useState(30);
    const suggestArticles = articles.slice(suggestedArticlesIndex, suggestedArticlesIndex + suggestedPerPage);

    if (isLoading && document.querySelector('html').classList == "dark") {
        return <SpinnerLoader/>
    }
    if (error) {
        return <h3>Error: {error.message}</h3>;
    }

    return (
        <div className="dark:bg-gray-900 flex lg:flex-row justify-evenly p-6 lg:p-0">
            <CategoryLinks />
            <div className="mx-auto lg:items-center lg:flex flex-col dark:text-slate-200  pt-6">
            <div className="w-full font-bold pb-10 text-center">
                    <h3 className="w-full hover:scale-110 duration-200">{getCategory.category}</h3>
                </div>
                <div>
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
                <Pagination
                    prevPage={prevPage}
                    currentPage={currentPage}
                    totalPageNews={totalPageNews}
                    nextPage={nextPage}
                />
            </div>
            <div className="w-80 hidden lg:block border-l border-slate-200  dark:text-slate-200">
                <h3 className="w-full font-bold pb-10 text-center mt-5">Suggestions</h3>
                {suggestArticles.map((article) => (
                    <MiniCard
                    key={article.uri}
                    articleUri={article.uri}
                    title={article.title}
                    imagePath={article.image}
                    />
                    )
                )}
            </div>
        </div>
    );
}

export default CategoryNews;
