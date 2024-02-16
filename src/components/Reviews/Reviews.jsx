import styles from "./Reviews.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Reviews() {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTUzZWIwMTE1YjZmYzAzYzk2ZDVjYmRjYTIyNGE4MiIsInN1YiI6IjY1Y2NhOGEzZWQyYWMyMDE4NmFmMzFkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V8bKb2qIcmg37gf1GuUVfosjn0elS-3PU1V4SrR6rxM",
      },
    };

    fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`, options)
      .then((response) => response.json())
      .then((response) => {
        setMovieReviews(response.results);
      })
      .catch((error) => console.error(error));
  }, [movieId]); 
  return (
    <>
      <ul className={styles.review_list}>
        {movieReviews.map((review) => (
          <li key={review.id} className={styles.review_item}>
            <p className={styles.review_author}>{review.author}:</p>
            <p className={styles.review_content}>{review.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}