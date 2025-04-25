import { useParams } from "react-router-dom";
import { useGetArticleDetailsQuery } from "../API/apiSlice";
import CategoryLinks from "./CategoryLinks";
import SpinnerLoader from "./loader/SpinnerLoader";

function ArticleDetails() {
  const { articleUri } = useParams();
  const { data, error, isLoading } = useGetArticleDetailsQuery(articleUri);

  if (isLoading) return <SpinnerLoader />;
  if (error) return <h3 className="text-red-500 text-center mt-6">Error loading article</h3>;

  const articleKey = Object.keys(data)[0] || "";
  const article = data?.[articleKey].info || {};

  return (
    <div className="bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-700 dark:to-gray-900
    min-h-screen text-white flex flex-col lg:flex-row lg:justify-between p-6 lg:p-10">

      <main className="flex-1 max-w-4xl mx-auto px-2 animate-fade-in">
        <h2 className="text-3xl font-bold text-blue-400 mb-6 hover:scale-105 transition-transform duration-300">
          {article.title}
        </h2>

        <div className="overflow-hidden rounded-xl shadow-lg mb-6">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <p className="text-justify text-base leading-relaxed text-gray-900 dark:text-slate-200 mb-10">
          {article.body}
        </p>

        <div className="text-sm text-gray-400">
          <p><strong>Source:</strong> {article.source?.title} – {article.source?.uri}</p>
          <p><strong>Date:</strong> {article.time}</p>
        </div>
      </main>
    </div>
  );
}

export default ArticleDetails;
