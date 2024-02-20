import styles from "./Movies.module.css";
import { useState, useEffect } from "react";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { Spinner } from "../../components/Spinner/Spinner";
import { MoviesList } from "../../components/MoviesList/MoviesList";
import { searchMovie } from "../../services/gettData";

export default function Movies() {
  const [query, setQuery] = useState("");
  const [searchMovies, setSearchMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleSearch = (event) => {
    setQuery(event);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await searchMovie(query);
        setSearchMovies(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Błąd podczas pobierania danych: ', error);
      }
    };

    fetchData();
  }, [query]);

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Search movies</h1>
        {searchMovies.length === 0 ? (
          <SearchInput handleSearch={handleSearch} />
        ) : (
          ""
        )}
        {isLoading ? <Spinner /> : <MoviesList movies={searchMovies} />}
      </div>
    </>
  );
}