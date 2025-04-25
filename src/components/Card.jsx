import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import spinner from "./loader/spinner.mov.gif";

function Card({ title, imagePath, articleUri }) {
  return (
    <Link to={`/articleDetails/${articleUri}`} key={articleUri}>
      <article
        className="group bg-white dark:bg-gray-700 hover:dark:bg-gray-600 hover:bg-slate-100 transition-all duration-300 
                   rounded-xl shadow-md hover:shadow-xl overflow-hidden transform hover:scale-[1.03] min-h-[260px] flex flex-col justify-between"
      >
        <div className="w-full h-48 overflow-hidden">
          <LazyLoadImage
            src={imagePath}
            alt={title}
            placeholderSrc={spinner}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-800 dark:text-slate-100 group-hover:text-blue-500 transition-colors duration-200">
            {title.length > 120 ? `${title.slice(0, 117)}...` : title}
          </h3>
        </div>
      </article>
    </Link>
  );
}

Card.propTypes = {
  articleUri: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  imagePath: propTypes.string.isRequired,
  body: propTypes.string, // optional, you can still pass it
};

export default Card;
