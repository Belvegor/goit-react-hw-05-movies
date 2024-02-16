import styles from "./Cast.module.css";
import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";

export default function Cast() {
  const [movieCredits, setMovieCredits] = useState([]);
  const { movieId } = useParams();

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
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setMovieCredits(response.cast);
      })
      .catch((error) => console.error(error));
  }, [movieId, options]);

  return (
    <>
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
              <p className={styles.character}>
                Character: {credit.character}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}