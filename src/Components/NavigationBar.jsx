import style from "./NavigationBar.module.css";

function NavigationBar() {
  return (
    <div className={style.NavigationBar}>
      <a className={style["navigation-link"]} href="http://">
        Navigate
      </a>
      <a className={style["navigation-link"]} href="http://">
        Navigate
      </a>
      <a className={style["navigation-link"]} href="http://">
        Navigate
      </a>
    </div>
  );
}

export default NavigationBar;
