import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/index";
import Movie from "./pages/movie/index";
import Header from "./components/header";
function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
