import { useParams } from "react-router-dom";
import { useGetArticleDetailsQuery } from "../API/apiSlice";
import CategoryLinks from "./CategoryLinks";
import SpinnerLoader from "./loader/SpinnerLoader";


function ArticleDetails() {
    const getArticleUri = useParams();
    const articleUri = getArticleUri.articleUri;

    const { data, error, isLoading } = useGetArticleDetailsQuery(articleUri);
    console.log("Data:", data);

    if (isLoading) {
        return <SpinnerLoader />;
    }

    if (error) {
        return <h3>Error...</h3>;
    }

    const articleKey = Object.keys(data)[0] || ""; //Obtain the key of the object that contains the article data
    const article = data?.[articleKey].info || {}; //Obtain the article data
    //console.log("Article:", article);

    return (
        <div className="dark:bg-gray-900 flex lg:flex-row lg:justify-evenly p-6 lg:p-0">
            <CategoryLinks />
            <div className="lg:items-center lg:flex flex-col dark:text-slate-200  lg:px-40">
                <h2 className="py-10 font-bold hover:scale-110 duration-200">{article.title}</h2>
                <img src={article.image} alt={article.title} className="rounded rounded-b-none w-full object-cover"/>
                <p className="py-10 text-justify">{article.body}</p>
                <div className="py-10 text-sm">
                    <span>Source: {article.source.title}  {article.source.uri}</span>
                    <br />
                    <span>Date: {article.time} </span>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default ArticleDetails;