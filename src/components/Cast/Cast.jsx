import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/gettData";
import styles from "./Cast.module.css";

const Cast = () => {
  const [movieCredits, setMovieCredits] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const credits = await fetchMovieCast(movieId);
        setMovieCredits(credits);
      } catch (error) {
        console.error('Failed to fetch movie credits: ', error);
      }
    };

    fetchCredits();
  }, [movieId]);

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {movieCredits.map((credit) => (
          <li key={credit.id} className={styles.item}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${credit.profile_path}`}
              className={styles.image}
              alt={credit.name}
              title={credit.name}
              width="160"
            />
            <p className={styles.title}>{credit.name}</p>
            <p className={styles.character}>Character: {credit.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;