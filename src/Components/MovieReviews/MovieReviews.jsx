import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../Services/api";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      setLoading(true);
      try {
        const data = await fetchMovieReviews(movieId);
        setReviews(data);
      } catch (err) {
        setError("Bir hata oluştu, tekrar deneyin.");
      } finally {
        setLoading(false);
      }
    };

    getReviews();
  }, [movieId]);

  if (reviews.length === 0 && !loading) {
    return <p>İnceleme bulunamadı.</p>;
  }

  return (
    <div>
      {loading && <p>Yükleniyor...</p>}
      {error && <p>{error}</p>}
      <ul className={css.list}>
        {reviews.map(review => (
          <li key={review.id} className={css.item}>
            <h3 className={css.author}>{review.author}</h3>
            <p className={css.content}>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;