import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import spinner from "./loader/spinner.mov.gif";


function MiniCard ({title, imagePath, articleUri}){

    return(
        <div className="mt-5 px-3">
            <Link to={`/articleDetails/${articleUri}`} key={articleUri}>
                <section >
                    <article className="shadow min-h-14 hover:bg-slate-200  lg:max-w-xl dark:bg-gray-700 dark:text-slate-200 dark:hover:bg-gray-600">
                        <div>
                            <LazyLoadImage src={imagePath} alt={title} placeholderSrc={spinner} className="rounded rounded-b-none w-full object-cover min-h-35"/>
                        </div>
                        <div>
                            <h3 className="text-sm p-2 text-gray-900 dark:text-slate-200 font-semibold text-center hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">
                                {title}
                            </h3>
                        </div>
                    </article>
                </section>
            </Link>
        </div>
    )
}

export default MiniCard;