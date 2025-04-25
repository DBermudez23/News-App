import { useGetSuggestedConceptQuery } from "../API/apiSlice";
import { useParams } from "react-router-dom";
import SpinnerLoader from "./loader/SpinnerLoader";
import CategoryLinks from "./CategoryLinks";
import SearchLink from "./SearchLink";
import { useEffect } from "react";

function SearchResults() {
  const query = useParams();
  const { data, error, isLoading } = useGetSuggestedConceptQuery(query.searchQuery);
  const links = data || [];

  // Cambiar el título de la pestaña dinámicamente
  useEffect(() => {
    document.title = `Results: ${query.searchQuery} | News db`;
  }, [query]);

  if (isLoading) return <SpinnerLoader />;
  if (error) return <h2 className="text-center text-red-600 mt-10">Error fetching results</h2>;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 flex flex-col lg:flex-row justify-between gap-10">

      <main className="flex-1 px-4 lg:px-10 py-8 animate-fade-in shadow-md bg-white dark:bg-gray-800 px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:scale-105 transition-transform duration-200">
            Search results for: <span className="italic">{query.searchQuery}</span>
          </h3>
        </div>

        {links.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">No results found.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <SearchLink key={link.uri} uri={link.uri} label={link.label.eng} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default SearchResults;
