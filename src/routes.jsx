import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/index";
import Movie from "./pages/movie/index";
import Header from "./components/header";
import NotFound from "./pages/notfound";
function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
