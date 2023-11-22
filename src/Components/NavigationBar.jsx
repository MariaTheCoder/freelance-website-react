import logo from "../assets/Logo/icons8-k-100.png";
import style from "./NavigationBar.module.css";

function NavigationBar() {
  return (
    <div className={style.NavigationBar}>
      <a className={style["navigation-link"]} href=".">
        <img src={logo} alt="Logo" />
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
