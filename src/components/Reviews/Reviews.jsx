import styles from "./Reviews.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/gettData";

export default function Reviews() {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviewsData = async () => {
      try {
        const data = await fetchMovieReviews(movieId);
        setMovieReviews(data);
      } catch (error) {
        console.error('Błąd podczas pobierania recenzji: ', error);
      }
    };

    fetchReviewsData();
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