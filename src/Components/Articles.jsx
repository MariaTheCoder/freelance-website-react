import style from "./Articles.module.css";

function Articles() {
  return (
    <div className={style.Articles}>
      <h2>Read my latest articles</h2>
      <div className={style["grid-container"]}>
        <p className={style["date"]}>2023-12-12</p>
        <p className={style["header"]}>Some title</p>
        <p className={style["date"]}>2023-11-05</p>
        <p className={style["header"]}>Some title</p>
        <p className={style["date"]}>2023-10-23</p>
        <p className={style["header"]}>Some title</p>
        <p className={style["date"]}>2023-08-16</p>
        <p className={style["header"]}>Some title</p>
      </div>
    </div>
  );
}

export default Articles;
