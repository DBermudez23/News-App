function SearchLink({ uri, label }) {
    return (
        <a href={uri} target="_blank" rel="noopener noreferrer">
            <div className="hover:scale-105 duration-200 mb-4 dark:bg-gray-800 text-wrap bg-gray-200 min-h-20 px-4 py-3 rounded-lg max-w-sm  mx-auto text-center">
                <h4 className="font-semibold text-lg">{label}</h4>
                <small className="block text-gray-600 dark:text-gray-400 break-words">{uri}</small>
            </div>
        </a>
    );
}

export default SearchLink;