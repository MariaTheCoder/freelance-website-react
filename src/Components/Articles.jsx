import style from "./Articles.module.css";

function Articles({ articles }) {
  return (
    <div className={style.Articles}>
      <div className={style["flex-container"]}>
        <h2>Latest articles</h2>
        <a>View all</a>
      </div>
      <div className={style["grid-container"]}>
        {articles.map((article, index) => (
          <a key={index} href={article.link} target="_blank" rel="noreferrer">
            {article.title}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Articles;
