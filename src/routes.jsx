import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/index";
import Movie from "./pages/movie/index";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
