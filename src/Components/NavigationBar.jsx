import style from "./NavigationBar.module.css";

function NavigationBar() {
  return (
    <div className={style.NavigationBar}>
      <a className={style["navigation-link"]} href=".">
        Logo
      </a>
      <a className={style["navigation-link"]} href="http://">
        {"Let's work together"}
      </a>
      <a className={style["navigation-link"]} href="http://">
        News and Articles
      </a>
    </div>
  );
}

export default NavigationBar;
