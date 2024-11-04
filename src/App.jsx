import CategoryNews from "./components/CategoryNews";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainNews from "./components/MainNews";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainNews/>} />
        <Route path="/news/*"  element={<CategoryNews />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
