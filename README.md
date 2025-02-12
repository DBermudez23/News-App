# NewsDB

Link to app: 
https://newsdbevenntreg.netlify.app/

NewsDB is a frontend application built with React that allows users to explore news from various sources in real-time. It uses the [EventRegistry](https://eventregistry.org/) API to fetch and display updated news articles. The application is designed to provide a smooth and fast user experience by implementing techniques such as React Suspense and lazy loading, and it is styled with [Tailwind CSS](https://tailwindcss.com/).

## Features

- **News Exploration**: Browse the latest news from various sources and categories.
- **Advanced Search**: Search for articles by keywords, categories, or specific sources.
- **Intuitive Navigation**: Utilizes [React Router](https://reactrouter.com/) for seamless navigation between different sections.
- **Efficient Component Loading**: Implements React Suspense and lazy loading to enhance performance and reduce initial load times.
- **Responsive Design**: Styled with Tailwind CSS for a consistent experience across different devices.

## Technologies Used

- **React**: Main library for building the user interface.
- **React Router**: Handles routing and navigation within the application.
- **React Suspense and Lazy Loading**: Improves performance by deferring component loading.
- **Tailwind CSS**: CSS framework for styling and design.
- **EventRegistry API**: Data source for real-time news.
- **Netlify**: Deployment platform for web applications.

## Installation and Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/newsdb.git
   cd newsdb
   ```

2. **Install Dependencies**:
   Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed. Then run:
   ```bash
   npm install
   ```

3. **Obtain an API Key from EventRegistry**:
   Sign up at [EventRegistry](https://eventregistry.org/) and get a free API Key. More details can be found in the [EventRegistry documentation](https://eventregistry.org/documentation).

4. **Set Up Environment Variables**:
   Create a `.env` file in the project root and add your API key:
   ```
   REACT_APP_EVENT_REGISTRY_API_KEY=your_api_key
   ```

5. **Run the Application in Development Mode**:
   ```bash
   npm start
   ```


## Contributing

Contributions are welcome. Please follow these steps:

1. **Fork the Repository**.
2. **Create a Branch for Your Feature** (`git checkout -b new-feature`).
3. **Make Your Changes** and commit with descriptive messages.
4. **Submit a Pull Request** describing your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgments

- [EventRegistry](https://eventregistry.org/) for providing a robust API for global news access.
- [Tailwind CSS](https://tailwindcss.com/) for simplifying the creation of beautiful and responsive designs.
- [Netlify](https://www.netlify.com/) for making deployment easy and seamless.


