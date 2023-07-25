import "./Hero.css";
import heroBg from "../images/hero-bg.png";
import heroLogo from "../images/hero-logo.png";
import titlegb from "../images/title-gb.png";
import titlegr from "../images/title-gr.png";

const Hero = ({ selectedLanguage }) => {
  console.log("Selected Language in Hero:", selectedLanguage);
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
        <img
          src={selectedLanguage === "🇬🇷" ? titlegr : titlegb}
          alt="welcome"
          className="title--logo"
        />

        <p className="hero__paragraph">
          {selectedLanguage === "🇬🇷"
            ? "Βρισκόμαστε κάτω από τους επιβλητικούς βράχους των Μετεώρων και η αποστολή μας είναι να σας προσφέρουμε μια αξέχαστη εμπειρία γνωριμίας με τα χαριτωμένα μας γαϊδουράκια."
            : "We are located beneath the majestic rocks of Meteora, and our mission is to offer you an unforgettable experience getting to know our adorable donkeys."}
        </p>

        {}
      </div>
    </section>
  );
};

export default Hero;
