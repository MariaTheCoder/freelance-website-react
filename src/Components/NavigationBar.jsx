import { Link } from "react-router-dom";
import logo from "../assets/Logo/icons8-k-100.png";
import style from "./NavigationBar.module.css";

function NavigationBar() {
  return (
    <div className={style.NavigationBar}>
      <Link className={style["navigation-link"]} to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <Link className={style["navigation-link"]} to="/work-together">
        {"Let's work together"}
      </Link>
      <Link className={style["navigation-link"]} to="/news-and-articles">
        News and Articles
      </Link>
    </div>
  );
}

export default NavigationBar;
