import { useSearchArticleQuery } from "../API/apiSlice";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Card from "./Card";
import Pagination from "./MainNews";

function CategoryNews() {
    const { categoryUri } = useParams(); // Obtiene la categoría de la URL
    console.log("Category URI:", categoryUri);
    const [currentPage, setCurrentPage] = useState(1);
    const newsPerPage = 8;

    // Obtiene y retiene datos basados en la categoría
    const { data, error, isLoading } = useSearchArticleQuery({
        category: categoryUri,
        page: currentPage,
    });

    const articles = data?.articles || [];
    const totalResults = data?.articles?.totalResults || 0;

    // Calculo del total de páginas
    const totalPageNews = Math.ceil(totalResults / newsPerPage);

    // Calculo de artículos que se mostrarán en la página
    const indexOfLastArticle = currentPage * newsPerPage;
    const indexOfFirstArticle = indexOfLastArticle - newsPerPage;
    const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

    const nextPage = () => {
        if (currentPage < totalPageNews) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    if (isLoading) {
        return <h3>Loading...</h3>;
    }
    if (error) {
        return <h3>Error: {error.message}</h3>;
    }

    return (
        <div className="dark:bg-gray-900 flex lg:flex-row justify-evenly p-6 lg:p-0">
            <div className="mx-auto lg:items-center lg:flex flex-col dark:text-slate-200 pt-6">
                <div>
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
                <Pagination
                    prevPage={prevPage}
                    currentPage={currentPage}
                    totalPageNews={totalPageNews}
                    nextPage={nextPage}
                />
            </div>
        </div>
    );
}

export default CategoryNews;
