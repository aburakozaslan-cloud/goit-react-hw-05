import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>404</h1>
      <p className={css.text}>Sayfa bulunamadı!</p>
      <Link to="/" className={css.link}>
        Ana Sayfaya Dön
      </Link>
    </div>
  );
};

export default NotFoundPage;