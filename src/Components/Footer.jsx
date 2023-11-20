import style from "./Footer.module.css";
import PhoneIcon from "../assets/Icons/icons8-phone-48.png";
import EmailIcon from "../assets/Icons/icons8-email-48.png";
import XingIcon from "../assets/Icons/icons8-xing-48.png";
import LinkedInIcon from "../assets/Icons/icons8-linkedin-48.png";
import YouTubeIcon from "../assets/Icons/icons8-youtube-48.png";

function Footer() {
  return (
    <footer className={style.Footer}>
      <div className="contact-info">Kerim Güney</div>
      <div className={style["contact-info"]}>
        <img className="icons" src={PhoneIcon} alt="Phone icon" />
        Give me a call
      </div>
      <div className={style["contact-info"]}>
        <img className="icons" src={EmailIcon} alt="Email icon" />
        Send me an e-mail
      </div>
      <div className={style["contact-info"]}>
        <img className="icons" src={XingIcon} alt="Xing icon" />
        {"Let's connect on Xing"}
      </div>{" "}
      <div className={style["contact-info"]}>
        <img className="icons" src={LinkedInIcon} alt="LinkedIn icon" />
        {"Let's connect on LinkedIn"}
      </div>
      <div className={style["contact-info"]}>
        <img className="icons" src={YouTubeIcon} alt="YouTube icon" />
        Subscribe to my YouTube channel
      </div>
    </footer>
  );
}

export default Footer;
