import style from "./Footer.module.css";
import PhoneIcon from "../assets/Icons/icons8-phone-48.png";
import EmailIcon from "../assets/Icons/icons8-email-48.png";
import GithubIcon from "../assets/Icons/icons8-github-48.png";
import XingIcon from "../assets/Icons/icons8-xing-48.png";
import LinkedInIcon from "../assets/Icons/icons8-linkedin-48.png";
import YouTubeIcon from "../assets/Icons/icons8-youtube-48.png";

function Footer() {
  return (
    <footer className={style.Footer}>
      <div className={style["contact-info"]}>
        <a href="tel:+49 179 1234567">
          <img src={PhoneIcon} alt="Phone icon" />
        </a>
        Give me a call
      </div>
      <div className={style["contact-info"]}>
        <a href="mailto:example@hotmail.com">
          <img src={EmailIcon} alt="Email icon" />
        </a>
        Send me an e-mail
      </div>
      <div className={style["contact-info"]}>
        <a href="https://github.com/KerimG" target="_blank" rel="noreferrer">
          <img src={GithubIcon} alt="Github icon" />
        </a>
        Follow me on Github
      </div>
      <div className={style["contact-info"]}>
        <a
          href="https://www.xing.com/profile/Kerim_Gueney3"
          target="_blank"
          rel="noreferrer"
        >
          <img src={XingIcon} alt="Xing icon" />
        </a>
        {"Let's connect on Xing"}
      </div>
      <div className={style["contact-info"]}>
        <a
          href="https://www.linkedin.com/in/kerim-gueney/?originalSubdomain=de"
          target="_blank"
          rel="noreferrer"
        >
          <img src={LinkedInIcon} alt="LinkedIn icon" />
        </a>
        {"Let's connect on LinkedIn"}
      </div>
      <div className={style["contact-info"]}>
        <a href="https://www.w3schools.com" target="_blank" rel="noreferrer">
          <img src={YouTubeIcon} alt="YouTube icon" />
        </a>
        Subscribe to my YouTube channel
      </div>
    </footer>
  );
}

export default Footer;
