import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function SearchLink({ uri, label }) {
  return (
    <Link to={`/articleDetails/${uri}`}>
      <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer animate-fade-in">
        <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-1">
          {label}
        </h4>
        <p className="text-sm text-gray-500 dark:text-gray-400">{uri}</p>
      </div>
    </Link>
  );
}

SearchLink.propTypes = {
  uri: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default SearchLink;
