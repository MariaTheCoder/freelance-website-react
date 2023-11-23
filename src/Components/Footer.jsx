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
      <section>
        <nav>
          <a href="https://github.com/KerimG" target="_blank" rel="noreferrer">
            <span>GibHub</span>
            <img src={GithubIcon} alt="Github icon" />
          </a>
          <a
            href="https://www.xing.com/profile/Kerim_Gueney3"
            target="_blank"
            rel="noreferrer"
          >
            <span>Xing</span>
            <img src={XingIcon} alt="Xing icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/kerim-gueney/?originalSubdomain=de"
            target="_blank"
            rel="noreferrer"
          >
            <span>LinkedIn</span>
            <img src={LinkedInIcon} alt="LinkedIn icon" />
          </a>
        </nav>
        <nav>
          <a href="https://www.w3schools.com" target="_blank" rel="noreferrer">
            <span>YouTube</span>
            <img src={YouTubeIcon} alt="YouTube icon" />
          </a>
          <a href="tel:+49 152 23619025">
            <span>Phone</span>
            <img src={PhoneIcon} alt="Phone icon" />
          </a>
          <a href="mailto:shop@gueney.org">
            <span>Email</span>
            <img src={EmailIcon} alt="Email icon" />
          </a>
        </nav>
      </section>
    </footer>
  );
}

export default Footer;
