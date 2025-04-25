import { Link } from "react-router-dom";
import NEWS_CATEGORIES from "../API/categories.js";

function CategoryLinks() {
  return (
    <aside className="hidden lg:flex lg:w-60 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-md">
      <ul className="w-full py-4 px-2 space-y-1">
        {NEWS_CATEGORIES.map((category) => (
          <li key={category.uri}>
            <Link
              to={`/${category.label}`}
              className="block w-full px-4 py-2 text-sm font-medium rounded-md 
                         text-gray-700 dark:text-slate-200 
                         hover:bg-blue-100 dark:hover:bg-gray-800 
                         hover:text-blue-500 dark:hover:text-blue-400 
                         transition-colors duration-200"
            >
              {category.label.replace(/(dmoz\/)|(news\/)/, "")}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default CategoryLinks;