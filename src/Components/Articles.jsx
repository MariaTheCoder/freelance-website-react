import style from "./Articles.module.css";

function Articles({ articles }) {
  return (
    <div className={style.Articles}>
      <h2>Read my latest articles</h2>
      <div className={style["grid-container"]}>
        {articles.map((article, index) => [
          <a
            key={index * 10 + 0}
            href={article.link}
            target="_blank"
            rel="noreferrer"
          >
            <p className={style["date"]}>{article.date}</p>
          </a>,
          <a
            key={index * 10 + 1}
            href={article.link}
            target="_blank"
            rel="noreferrer"
          >
            <p className={style["header"]}>{article.title}</p>
          </a>,
        ])}
      </div>
    </div>
  );
}

export default Articles;
