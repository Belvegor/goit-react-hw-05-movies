import styles from "./MoviesList.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export function MoviesList({ movies }) {
  return (
    <>
      <ul className={styles.list}>
        {movies.map((movie) => {
          return (
            <Link
              to={`/movies/${movie.id}`}
              key={movie.id}
              className={styles.link}
            >
              <li key={movie.id} className={styles.item}>
                <div className={styles.box}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                    title={movie.title}
                    width="260"
                  />
                  <p className={styles.title}>{movie.title}</p>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};