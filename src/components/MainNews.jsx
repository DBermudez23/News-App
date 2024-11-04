import { useState } from "react";
import { useGetTrendingNewsQuery } from "../API/apiSlice";
import { Link } from "react-router-dom";
import { NEWS_CATEGORIES } from "../API/categories";
import { useParams } from "react-router-dom";
import Card from "./Card";

//la siguiente función sera para los enlaces a distintas rutas según su categoria de noticia
function CategoryLinks() {
    return (
        <div className=" hidden lg:flex lg:w-50 border-r">
            <ul className="w-full">
                {NEWS_CATEGORIES.map((category) => (
                    <li key={category.uri} className="w-full p-6 dark:hover:bg-gray-800 hover:bg-slate-200 hover:underline underline-offset-1"
                    >
                        <Link
                            to={`/news/${category.uri}`}
                            className="dark:text-slate-200 "
                        >
                            {category.label.replace(/(dmoz\/)|(news\/)/, "")}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export {CategoryLinks};

function Pagination ({prevPage, currentPage, totalPageNews, nextPage}) {
    return(
        <div className="flex items-center justify-center gap-10 py-7">
                <button 
                    className="hover:scale-125 duration-200"
                    onClick={prevPage}
                    disabled={currentPage <= 1}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z" />
                    </svg>
                </button>
                <span>Page {currentPage} of {totalPageNews}</span>
                <button 
                    className="hover:scale-125 duration-200"
                    onClick={nextPage}
                    disabled={currentPage===totalPageNews}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
                    </svg>
                </button>
        </div>
    )
}
export { Pagination };

function MainNews () {
    //Obtención de la categoria de la pagina
    const { categoryUri } = useParams();

    const [currentPage, setCurrentPage] = useState(1);
    const newsPerPage = 8;

    //Obtención y retención de datos
    const {data, error, isLoading} = useGetTrendingNewsQuery({ categoryUri, page: currentPage });
    const articles = data?.recentActivityArticles.activity || [];


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
        }
    };

    const prevPage = () => {
        if (currentPage > 1){
            setCurrentPage(currentPage - 1);
        }
    };

    if (isLoading){
        return (<h3>Loading...</h3>);
    }
    if (error){
        return (<h3>Error: {error.message}</h3>);
    }

    return(
        <div className="dark:bg-gray-900 flex lg:flex-row justify-evenly p-6 lg:p-0">
            <CategoryLinks
            category={NEWS_CATEGORIES}
            />
            <div className="mx-auto lg:items-center lg:flex flex-col dark:text-slate-200  pt-6">
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
            <div className="w-60 hidden lg:block border-l border-slate-200">
                <h3>espacio</h3>
            </div>
        </div>
    )
}

export default MainNews;