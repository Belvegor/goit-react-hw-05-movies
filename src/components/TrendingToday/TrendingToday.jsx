import styles from "./TrendingToday.module.css";
import { useState, useEffect, useMemo } from "react";
import { Spinner } from "../Spinner/Spinner";
import { MoviesList } from "../MoviesList/MoviesList";

export function TrendingToday() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const options = useMemo(() => {
    return {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTUzZWIwMTE1YjZmYzAzYzk2ZDVjYmRjYTIyNGE4MiIsInN1YiI6IjY1Y2NhOGEzZWQyYWMyMDE4NmFmMzFkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V8bKb2qIcmg37gf1GuUVfosjn0elS-3PU1V4SrR6rxM",
      },
    };
  }, []);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setTrendingMovies(response.results);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, [options]);

  return (
    <>
      <h1 className={styles.title}>Trending today </h1>
      {isLoading ? <Spinner /> : <MoviesList movies={trendingMovies} />}
    </>
  );
}