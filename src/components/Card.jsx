import propTypes from "prop-types"
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import spinner from "./loader/spinner.mov.gif";

function Card ({title, imagePath, articleUri}) {
    return(
        <div>
            <Link to={`/articleDetails/${articleUri}`} key={articleUri}>
                <section className="mb-4">
                    <article className="shadow rounded-md min-h-60 hover:bg-slate-200 hover:scale-105 duration-300 lg:max-w-xl dark:bg-gray-700 dark:text-slate-200 dark:hover:bg-gray-600">
                        <div className="flex items-center justify-center">  
                            <LazyLoadImage src={imagePath} alt={title} placeholderSrc={spinner} className="rounded rounded-b-none w-full object-cover min-w-80 min-h-48" />
                        </div>
                        <div>
                            <h3 className="text-sm p-2">
                                {title}
                            </h3>
                        </div>
                    </article>
                </section>
            </Link>
        </div>
    )
}

export default Card;

Card.propTypes = {
    articleUri: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    imagePath: propTypes.string.isRequired,
    body: propTypes.string.isRequired
}