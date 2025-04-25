import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-slate-200 pt-6 shadow-inner">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-center">
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 lg:-mr-16">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://www.newsapi.ai/documentation?tab=introduction" className="hover:underline">News API</a>
                </li>
                <li className="mb-4">
                  <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                </li>
                <li className="mb-4">
                  <a href="https://react.dev/" className="hover:underline">React</a>
                </li>
                <li>
                  <a href="https://redux-toolkit.js.org/rtk-query/overview" className="hover:underline">RTK Query</a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow me</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://github.com/DBermudez23" className="hover:underline">GitHub</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/daniel-bermudez-1b0408277" className="hover:underline">LinkedIn</a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between lg:justify-around">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024 <a href="https://github.com/DBermudez23" className="hover:underline">Daniel Bermudez Dev™</a>. All Rights Reserved.
          </span>

          <div className="flex mt-4 sm:justify-center sm:mt-0 gap-5">
            <a
              href="https://www.linkedin.com/in/daniel-bermudez-1b0408277"
              className="text-gray-500 hover:text-blue-600 dark:hover:text-white transition-transform duration-200 hover:scale-110"
              target="_blank" rel="noopener noreferrer"
            >
              <FaLinkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>

            <a
              href="https://github.com/DBermudez23"
              className="text-gray-500 hover:text-black dark:hover:text-white transition-transform duration-200 hover:scale-110"
              target="_blank" rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 .5A11.5 11.5 0 0 0 8.068 22.51c.5.092.682-.216.682-.48 0-.237-.01-1.017-.015-1.846-2.779.604-3.363-1.182-3.363-1.182-.455-1.157-1.112-1.465-1.112-1.465-.91-.622.07-.61.07-.61a1.787 1.787 0 0 1 1.303.878c.893 1.53 2.344 1.088 2.916.832.09-.647.349-1.088.635-1.338-2.22-.252-4.555-1.11-4.555-4.94a3.873 3.873 0 0 1 1.031-2.686 3.594 3.594 0 0 1 .097-2.65s.84-.27 2.75 1.03a9.447 9.447 0 0 1 5 0c1.91-1.3 2.748-1.03 2.748-1.03a3.594 3.594 0 0 1 .098 2.65 3.873 3.873 0 0 1 1.03 2.686c0 3.84-2.34 4.686-4.566 4.932.359.31.678.92.678 1.855 0 1.338-.012 2.418-.012 2.746 0 .266.18.577.688.478A11.5 11.5 0 0 0 12 .5Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
