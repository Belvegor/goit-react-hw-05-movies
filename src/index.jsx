import { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { Spinner } from "./components/Spinner/Spinner";
import { Shared } from "./shared/Shared";
import "./index.css";

const Home = lazy(() => import("./pages/Home/Home"));
const Movies = lazy(() => import("./pages/Movies/Movies"));
const MovieDetails = lazy(() => import("./pages/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("./components/Cast/Cast"));
const Reviews = lazy(() => import("./components/Reviews/Reviews"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/goit-react-hw-05-movies/">
    <Shared>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/movies" element={<Movies />}/>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}/>
            <Route path="reviews" element={<Reviews />}/>
          </Route>
        </Routes>
      </Suspense>
    </Shared>
  </BrowserRouter>
);