import { Link } from "react-router-dom";
import style from "./Articles.module.css";

function Articles({ articles }) {
  return (
    <div className={style.Articles}>
      <div className={style["flex-container"]}>
        <h2>Latest articles</h2>
        <Link className={style["link"]} to="/news-and-articles">
          View all
        </Link>
      </div>
      <div className={style["grid-container"]}>
        {articles.map((article, index) => (
          <a
            key={index}
            className={style.article}
            href={article.link}
            target="_blank"
            rel="noreferrer"
          >
            <div className={style["date"]}>{article.date}</div>
            <div className={style["title"]}>{article.title}</div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Articles;
