import { Link} from 'react-router-dom';
import NEWS_CATEGORIES from '../API/categories.js';

//la siguiente función sera para los enlaces a distintas rutas según su categoria de noticia
function CategoryLinks() {

    return (
        <div className=" hidden lg:flex lg:w-60 border-r">
            <ul className="w-full">
                {NEWS_CATEGORIES.map((category) => (
                    <li key={category} className="w-full p-6 dark:hover:bg-gray-800 hover:bg-slate-200 hover:underline underline-offset-1"
                    >
                        <Link
                            to={`/${category.label}`}
                            className="dark:text-slate-200 "
                        >
                            {category.label.replace(/(dmoz\/)|(news\/)/, "")} {/*Indica la lista de las categorias*/}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default  CategoryLinks;