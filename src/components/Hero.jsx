import "./Hero.css";
import heroBg from "../images/hero-bg.png";
import heroLogo from "../images/hero-logo.png";
import title from "../images/title.png";

const Hero = () => {
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
        <img src={title} alt="welcome" className="title--logo" />

        <p className="hero__paragraph">
          We are located beneath the majestic rocks of Meteora, and our mission
          is to offer you an unforgettable experience getting to know our
          adorable donkeys.
        </p>

        {}
      </div>
    </section>
  );
};

export default Hero;
