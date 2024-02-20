import styles from "./TrendingToday.module.css";
import { useState, useEffect } from "react";
import { Spinner } from "../Spinner/Spinner";
import { MoviesList } from "../MoviesList/MoviesList";
import { fetchTrendingMovies } from "../../services/gettData";

export function TrendingToday() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingData = async () => {
      try {
        const data = await fetchTrendingMovies();
        setTrendingMovies(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Błąd podczas pobierania danych: ', error);
      }
    };

    fetchTrendingData();
  }, []);

  return (
    <>
      <h1 className={styles.title}>Trending today</h1>
      {isLoading ? <Spinner /> : <MoviesList movies={trendingMovies} />}
    </>
  );
}