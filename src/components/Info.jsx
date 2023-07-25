import "./Info.css";

const Info = ({ selectedLanguage }) => {
  return (
    <section className="section-contact">
      <div className="contact-container ">
        <div className="info-text">
          <div className="text-box">
            <span>{selectedLanguage === "🇬🇷" ? "Επικοινωνία" : "Contact"}</span>
          </div>
          <div className="info">
            <p>
              {selectedLanguage === "🇬🇷" ? (
                <span>
                  Μπορείτε να μας βρέιτε στην οδό:
                  <span>Καστράκι, Καλαμπάκα</span> Άγιος Γεώργιος Μαντηλάς.
                </span>
              ) : (
                <span>
                  You can find us at: <span>Kastraki, Kalampaka</span> St.
                  George Madilas.
                </span>
              )}
            </p>
          </div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d745.3769097745046!2d21.621792420356662!3d39.720051728973715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQzJzEyLjMiTiAyMcKwMzcnMjAuNiJF!5e0!3m2!1sen!2sgr!4v1690225017689!5m2!1sen!2sgr"
          width="450"
          height="300"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="info-map"
          title="Meteora donkeyland location"
        ></iframe>
      </div>
    </section>
  );
};

export default Info;
