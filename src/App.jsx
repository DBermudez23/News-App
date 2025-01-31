import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchResults from "./components/SearchResults";
import SpinnerLoader from "./components/loader/SpinnerLoader";
import { lazy, Suspense } from "react";
const CategoryNews = lazy(() => import("./components/CategoryNews"));
const MainNews = lazy(() => import("./components/MainNews"));
const ArticleDetails = lazy(() => import("./components/ArticleDetails"));



function App() {

  return (
      <BrowserRouter>
        <Header />
        <Suspense fallback={<SpinnerLoader />}>
          <Routes>
            <Route path="/" element={<MainNews/>} />
            <Route path="/news/:category"  element={<CategoryNews />} />
            <Route path="/articleDetails/:articleUri" element={<ArticleDetails />} />
            <Route path="/search/:searchQuery" element={<SearchResults />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
