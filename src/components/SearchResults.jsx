import { useGetSuggestedConceptQuery } from "../API/apiSlice";
import { useParams } from "react-router-dom";
import SpinnerLoader from "./loader/SpinnerLoader";
import CategoryLinks from "./CategoryLinks";
import SearchLink from "./SearchLink";


function SearchResults() {
    const query = useParams();
    //console.log("Query:", query.searchQuery);
    const { data, error, isLoading } = useGetSuggestedConceptQuery(query.searchQuery);
    console.log(data)
    const links = data || [];

    if (isLoading) {
        return <SpinnerLoader />;
    }
    if (error) {
        return <h2> Error </h2>
    }

    return (
        <div className="dark:bg-gray-900 flex lg:flex-row justify-evenly p-4 lg:p-0">
            <CategoryLinks />
            <div className="mx-auto lg:items-center lg:flex flex-col dark:text-slate-200 pt-6">
                <div className="w-full font-bold pb-10 text-center">
                    <h3 className="w-full hover:scale-110 duration-200">Search results of: {query.searchQuery}</h3>
                </div>
                <div>
                    {links.map((link) => (
                        <SearchLink
                            key={link.uri}
                            uri={link.uri}
                            label={link.label.eng}
                        />
                    ))}
                </div>
            </div>
        </div>
    )



}

export default SearchResults;

