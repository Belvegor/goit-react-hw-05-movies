import styles from "./Movies.module.css";
import { useState, useEffect } from "react";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { Spinner } from "../../components/Spinner/Spinner";
import { MoviesList } from "../../components/MoviesList/MoviesList";

export default function Movies() {
  const [query, setQuery] = useState("");
  const [searchMovies, setSearchMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleSearch = (event) => {
    setQuery(event);
  };

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTUzZWIwMTE1YjZmYzAzYzk2ZDVjYmRjYTIyNGE4MiIsInN1YiI6IjY1Y2NhOGEzZWQyYWMyMDE4NmFmMzFkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V8bKb2qIcmg37gf1GuUVfosjn0elS-3PU1V4SrR6rxM",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setSearchMovies(response.results);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
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