import styles from "./MovieDetails.module.css";
import { useState, useEffect } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../services/gettData";

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMovieDetails(movieId); 
        setMovieDetails(data);
      } catch (error) {
        console.error('Błąd podczas pobierania szczegółów filmu: ', error);
      }
    };

    fetchData();
  }, [movieId]);

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

export default MovieDetails;