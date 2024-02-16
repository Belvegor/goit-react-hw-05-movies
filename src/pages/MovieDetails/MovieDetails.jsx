import styles from "./MovieDetails.module.css";
import { useState, useEffect, useMemo } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();

  const options = useMemo (() => {
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
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setMovieDetails(response);
      })
      .catch((error) => console.error(error));
  }, [movieId, options]);

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>{movieDetails.title}</h1>
        <p className={styles.tagline}>{movieDetails.tagline}</p>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`}
          alt={movieDetails.title}
          title={movieDetails.title}
          width="600"
        />
        <h3 className={styles.subtitle}>Overview</h3>
        <p>{movieDetails.overview}</p>
        <p>Release date: {movieDetails.release_date}</p>
        <p>User score: {movieDetails.vote_average}</p>
        <Link to={"cast"}>
          <strong>Cast</strong>
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to={"reviews"}>
          <strong>Reviews</strong>
        </Link>
        <Outlet />
      </div>
    </>
  );
}