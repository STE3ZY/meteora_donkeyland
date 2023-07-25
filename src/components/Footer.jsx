import "./Footer.css";
import footerLogo from "../images/footer-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = ({ selectedLanguage }) => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <img className="footer__title" src={footerLogo} alt="Footer logo" />

        <div className="footer__content">
          <div className="footer__data">
            <div className="footer__item">
              <FontAwesomeIcon
                className="font-awesome"
                icon={faLocationPin}
                style={{ color: "#ffffff" }}
              />
              <p className="footer__information">
                {selectedLanguage === "🇬🇷" ? (
                  <span>
                    Καστράκι, Καλαμπάκα <br />
                    Άγιος Γεώργιος Μαντηλάς
                  </span>
                ) : (
                  <span>
                    Kastraki, Kalampaka <br />
                    St. George Madilas
                  </span>
                )}
              </p>
            </div>
            {/*<div className="footer__item">
              <FontAwesomeIcon
                className="font-awesome"
                icon={faPhone}
                style={{ color: "#ffffff" }}
              />{" "}
              <p className="footer__information">24320 23450</p>
            </div>
            <div className="footer__item">
              <FontAwesomeIcon
                className="font-awesome"
                icon={faEnvelope}
                style={{ color: "#ffffff" }}
              />{" "}
              <p className="footer__information">flowcafegr@gmail.com</p>
  </div> */}
            <div className="footer__item">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d745.3769097745046!2d21.621792420356662!3d39.720051728973715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQzJzEyLjMiTiAyMcKwMzcnMjAuNiJF!5e0!3m2!1sen!2sgr!4v1690225017689!5m2!1sen!2sgr"
                width="300"
                height="150"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/*<div className="footer__group">
          <ul className="footer__social">
            <a
              href="https://www.facebook.com/Flow-Handmade-Pies-Coffee-101952188437839"
              target="_blank"
              className="footer__social-link"
              rel="noreferrer"
            >
              <i className="bx bxl-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/flow__cafe/"
              target="_blank"
              className="footer__social-link"
              rel="noreferrer"
            >
              <i className="bx bxl-instagram"></i>
            </a>
          </ul>
</div>*/}
      </div>
    </footer>
  );
};

export default Footer;
