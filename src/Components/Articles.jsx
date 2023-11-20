import style from "./Articles.module.css";

function Articles({ articles }) {
  return (
    <div className={style.Articles}>
      <h2>Read my latest articles</h2>
      <div className={style["grid-container"]}>
        {articles.map((article, index) => [
          <p key={index * 10 + 0} className={style["date"]}>
            {article.date}
          </p>,
          <p key={index * 10 + 1} className={style["header"]}>
            {article.title}
          </p>,
        ])}
      </div>
    </div>
  );
}

export default Articles;
