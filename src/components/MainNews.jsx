import { useState } from "react";
import { useGetTrendingNewsQuery} from "../API/apiSlice";
import Card from "./Card";
import CategoryLinks from "./CategoryLinks";    
import Pagination from "./Pagination";
import MiniCard from "./MiniCard";
import SpinnerLoader from "./loader/SpinnerLoader";

function MainNews () {
    //Obtención y retención de datos---------------------------------------
    const {data, error, isLoading} = useGetTrendingNewsQuery();
    //console.log("Data:", data);
    const articles = data?.recentActivityArticles.activity || [];

    //Paginación-----------------------------------------------------------
    const [currentPage, setCurrentPage] = useState(1);
    const newsPerPage = 8;
    //Calculo de total de páginas
    const totalPageNews = Math.ceil(articles.length/newsPerPage);
    //Calculo articulos que se mostraran en la página
    const indexOfLastArticle = currentPage * newsPerPage;
    const indexOfFirstArticle = indexOfLastArticle - newsPerPage;
    //Genera la obtención de una copia de una porción de el array original articles, comenzando desde el indice del primer articulo por página y terminando en el último por página
    const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

    const nextPage = () => {
        if (currentPage < totalPageNews) {
            setCurrentPage(currentPage + 1);
            setSuggestedArticles(suggestedArticlesIndex + suggestedPerPage);
        }
    };

    const prevPage = () => {
        if (currentPage > 1){
            setCurrentPage(currentPage - 1);
            setSuggestedArticles(suggestedArticlesIndex - suggestedPerPage);
        }
    };

    //Suggestions----------------------------------------------------------
    const suggestedPerPage = 12;
    const [suggestedArticlesIndex, setSuggestedArticles] = useState(30); 
    const suggestArticles = articles.slice(suggestedArticlesIndex, suggestedArticlesIndex + suggestedPerPage);
    //console.log("Suggest Articles:", suggestArticles);

    //Render---------------------------------------------------------------
    if (isLoading){
        return <SpinnerLoader />;
    }
    if (error){
        return (<h3>Error: {error.message}</h3>);
    }

    return(
        <div className="dark:bg-gray-900 flex lg:flex-row justify-evenly p-6 lg:p-0">
            <CategoryLinks />
            <div className="mx-auto lg:items-center lg:flex flex-col dark:text-slate-200  pt-6">
                <div className="w-full font-bold pb-10 text-center">
                    <h3 className="w-full hover:scale-110 duration-200 ">Latest news</h3>
                </div>
                <div>
                    {currentArticles.map((article) => (
                        <Card
                        key={article.uri}
                        articleUri={article.uri}
                        title={article.title}
                        imagePath={article.image}
                        body={article.body}
                        />
                        )
                    )}
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
    )
}

export default MainNews;