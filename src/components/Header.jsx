import "../index.css"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NEWS_CATEGORIES from "../API/categories.js";

//Este componente se usara para mostrar las categorias de noticias al presionar boton de menú
function CategoryLinksMenu() {
    return (
      <div className="w-full border-b dark:border-slate-700 text-center bg-white dark:bg-gray-900 shadow-md animate-fade-in">
        <ul className="flex flex-col divide-y divide-gray-300 dark:divide-gray-700">
          {NEWS_CATEGORIES.map((category) => (
            <li key={category.uri}>
              <Link
                to={`/${category.label}`}
                className="block py-4 px-6 text-gray-800 dark:text-slate-200 hover:bg-blue-100 dark:hover:bg-gray-800 transition-all duration-200"
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
    
    const [theme, setTheme] = useState(() =>
        window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    );
    const [showCategories, setShowCategories] = useState(false);
    const [search, setSearch] = useState("");

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);

    const handleChangeTheme = () => setTheme(t => t === "light" ? "dark" : "light");

    return (
        <div className="flex flex-col">
            <header className="flex flex-wrap items-center justify-between px-4 py-3 bg-slate-300 dark:bg-black dark:text-white shadow-md">
                {/* Logo */}
                <Link to="/" className="text-xl font-bold hidden lg:block hover:scale-110 transition-transform">News db</Link>

                {/* Mobile menu toggle */}
                <button
                    className="p-2 lg:hidden rounded hover:bg-slate-400 transition-transform duration-200"
                    onClick={() => setShowCategories(!showCategories)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
                    </svg>
                </button>

                {/* Mobile home link */}
                <Link to="/" className="rounded lg:hidden p-2 hover:bg-slate-400 transition-transform flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.125 1.125 0 011.591 0L21.75 12" />
                    </svg>
                    Home
                </Link>

                {/* Search bar */}
                <form className="flex items-center justify-center w-full max-w-md">
                    <div className="flex w-full h-10 shadow-md rounded-md overflow-hidden">
                        <input
                        type="text"
                        placeholder="Search news..."
                        onChange={(e) => setSearch(e.target.value)}
                        className="flex-grow px-4 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                        />
                        <Link to={`/search/${search}`}>
                        <button
                            type="submit"
                            className="w-10 h-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center transition-all duration-200"
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" viewBox="0 0 24 24" 
                                strokeWidth="1.5" 
                                stroke="currentColor"
                                className="size-5 text-white">
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>
                        </Link>
                    </div>
                </form>

                {/* Theme switch */}
                <button
                    className="p-2 rounded-full hover:bg-slate-400 transition-transform"
                    onClick={handleChangeTheme}
                >
                    {theme === "dark" ? darkMode : lightMode}
                </button>
            </header>

            {showCategories && (
                <div className="lg:hidden">
                    <CategoryLinksMenu />
                </div>
            )}
        </div>
    );
}
export default Header;