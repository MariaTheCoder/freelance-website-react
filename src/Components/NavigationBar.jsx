import { Link } from "react-router-dom";
import logo from "../assets/Logo/icons8-k-100.png";
import style from "./NavigationBar.module.css";

function NavigationBar() {
  return (
    <div className={style.NavigationBar}>
      <Link className={style["navigation-link"]} to="/">
        <img className={style["logo"]} src={logo} alt="Logo" />
      </Link>
      <div className={style["link-container"]}>
        <Link className={style["navigation-link"]} to="/work-together">
          {"Let's work together"}
        </Link>
      </div>
      <div className={style["link-container"]}>
        <Link className={style["navigation-link"]} to="/news-and-articles">
          News and Articles
        </Link>
      </div>
    </div>
  );
}

export default NavigationBar;
