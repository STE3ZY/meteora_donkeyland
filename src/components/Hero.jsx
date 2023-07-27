import "./Hero.css";
import heroBg from "../images/hero-bg2.jpg";
import heroLogo from "../images/hero-logo.png";
import titlegb from "../images/welcome-gb.png";
import titlegr from "../images/welcome-gr.png";

const Hero = ({ selectedLanguage }) => {
  return (
    <section
      className="hero section"
      id="home"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div className="hero__text">
        <img src={heroLogo} alt="hero logo" className="hero--logo" />
      </div>
      <div className="hero__text">
        <img
          src={selectedLanguage === "🇬🇷" ? titlegr : titlegb}
          alt="welcome"
          className="title--logo"
        />
      </div>
    </section>
  );
};

export default Hero;
