import "../index.css"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NEWS_CATEGORIES } from "../API/categories";

//Este componente se usara para mostrar las categorias de noticias al presionar boton de menú
function CategoryLinksMenu() {
    return (
        <div className="  border-b dark:border-slate-200 text-center">
            <ul className="w-full">
                {NEWS_CATEGORIES.map((category) => (
                    <li key={category.uri} className="w-full p-6 dark:hover:bg-gray-800 hover:bg-slate-200 dark:bg-gray-900">
                        <Link
                            to={`/news/${category.uri}`}
                            className="dark:text-slate-200"
                        >
                            {category.label.replace(/(dmoz\/)|(news\/)/, "")}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function Header () {
    const lightMode = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
    </svg>

    const darkMode = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
    </svg>;


    const [theme, setTheme] = useState(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return "dark"
        }
        return "light"
    });

    useEffect(() => {
        if (theme === "dark"){
            document.querySelector('html').classList.add('dark')
        } else {
            document.querySelector('html').classList.remove('dark')
        }
    }, [theme])

    const handleChangeTheme = () =>{
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }

    const [showCategories, setShowCategories] = useState(false);

    return(
        <div className="flex flex-col">
            <header className="flex md:gap-6 items-center bg-slate-300 text-slate-950 px-3 justify-center py-2 lg:gap-60 dark:bg-black dark:text-slate-50 border-b border-b-slate-200">
            {/*DESKTOP LINK TO HOME*/}
                <Link to="/">
                    <h1 className="hidden lg:block mr-11 font-bold hover:scale-110 duration-200">News db</h1>
                </Link>
                {/*MENU BUTTON */}
                <button className="p-2  border-none rounded hover:bg-slate-400 hover:scale-110 duration-200 lg:hidden"
                onClick={() => setShowCategories(!showCategories)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
                {/*HOME LINK */}
                <Link to="/" className="rounded hover:bg-slate-400 hover:scale-110 duration-200 p-2 flex gap-3 font-mono lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </Link>
                {/*SEARCH INPUT*/}
                <form className="flex h-7 items-center lg:gap-60 lg:-mr-16 lg:ml-10 ">
                    <input type="text" placeholder="Search news" className="p-0.5 px-1 b rounded-md focus:outline-none hover:scale-105 duration-200 text-slate-800 w-60 lg:w-96 lg:-ml-48 dark:bg-gray-700 dark:text-slate-50"/>
                    {/*SEARCH BUTTON */}
                    <button className="rounded hover:scale-125 duration-200 p-2 lg:-ml-60">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                </form>
                {/*THEME BUTTON */}
                <button
                    className="rounded-full hover:bg-slate-400 hover:scale-110 duration-200  p-2 lg:-ml-10"
                    onClick={handleChangeTheme}>
                        {theme === "dark" ? darkMode : lightMode}
            </button>
            </header>
            {showCategories && (
                <div className="md:hidden flex flex-col ">
                    <CategoryLinksMenu />
                </div>
            )}
        </div>
    )
}

export default Header;