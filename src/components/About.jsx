import React from "react";
import "./About.css";
import footprint from "../images/donkeypaw.png";

function About({ selectedLanguage }) {
  return (
    <div className="about-container">
      <div className="about-item">
        <img src={footprint} alt="donkey footprint" className="footprint" />
        <span className="about-text">
          {selectedLanguage === "🇬🇷"
            ? "Στο Meteora Donkeyland, τα γαϊδουράκια μας κατέχουν έναν ιδιαίτερο χώρο στις καρδιές μας. Πιστεύουμε στη φροντίδα και την αγάπη που τους παρέχουμε. Αυτά τα εκπληκτικά πλάσματα ήταν οι πιστοί μας σύντροφοι καθ' όλη την ιστορία, και ο χαρακτήρας τους φαίνεται σε κάθε αλληλεπίδραση. Με την ήπια φύση, την ευφυΐα και την αφοσίωση τους, οι γάιδαροι αντιπροσωπεύουν τη χάρη και την ανθεκτικότητα."
            : "At Meteora Donkeyland, our donkeys hold a special place in our hearts. We believe in the care and love we provide them. These amazing creatures have been our loyal companions throughout history, and their character shines through in every interaction. With their gentle nature, intelligence, and loyalty, donkeys represent grace and resilience."}
        </span>
      </div>
      <div className="about-item">
        <img src={footprint} alt="donkey footprint" className="footprint" />
        <span className="about-text">
          {selectedLanguage === "🇬🇷"
            ? "Κατά την ανέγερση των εντυπωσιακών Μοναστηριών, τα γαϊδουράκια έπαιξαν αναντικατάστατο ρόλο. Με ακλόνητη δύναμη, διέσχιζαν επικίνδυνα μονοπάτια, κουβαλώντας σημαντικές προμήθειες και υλικά στους ψηλούς βράχους των Μετώρων. Οι ακατάπαυστες προσπάθειές τους υποστήριξαν την επιθυμία των μοναχών, επιτρέποντας τη δημιουργία αυτών των εμβληματικών μοναστηριών που συνεχίζουν να εμπνέουν δέος μέχρι σήμερα."
            : "During the construction of the impressive Monasteries, donkeys played an irreplaceable role. With unwavering strength, they traversed dangerous paths, carrying important supplies and materials to the high rocks of Meteora. Their tireless efforts supported the monks desire, enabling the creation of these iconic monasteries that continue to inspire awe to this day."}
        </span>
      </div>
      <div className="about-item">
        <img src={footprint} alt="donkey footprint" className="footprint" />
        <span className="about-text">
          {selectedLanguage === "🇬🇷"
            ? "Στο Meteora Donkeyland, σας προσκαλούμε να απολαύσετε τον απίστευτο δεσμό αναμεσα στους ανθρώους και τα γαϊδουράκια. Γνωρίστε τους γλυκούς μας συντρόφους και ζήστε τη ζεστασιά τους από κοντά. Απολαύστε παιχνίδια και δημιουργήστε αξέχαστες στιγμές. Αιχμαλωτίστε τη χαρά και την αθωότητα που μοιράζεστε με τα γαϊδουράκια μας μέσα από τη φωτογραφία. Οι εικόνες απέναντι στο όμορφο υπόβαθρο των Μετεώρων και των μοναστηριών θα δημιουργήσουν εκπληκτικές αναμνήσεις."
            : "At Meteora Donkeyland, we invite you to witness the incredible bond between humans and donkeys. Meet our sweet companions and experience their warmth up close. Enjoy games and create unforgettable moments. Capture the joy and innocence you share with our donkeys through photography. The images against the beautiful backdrop of Meteora and the monasteries will create amazing memories."}
        </span>
      </div>
      <div className="about-item">
        <img src={footprint} alt="donkey footprint" className="footprint" />
        <span className="about-text">
          {selectedLanguage === "🇬🇷"
            ? "Ελάτε στο Meteora Donkeyland, όπου η αγάπη, η φροντίδα και ο σεβασμός για τα γαϊδούρακια βρίσκονται στην καρδιά της δράσης μας. Απολαύστε τη μαγεία αυτού του μοναδικού προορισμού όπου η ιστορία και η φυσική ομορφιά συναντώνται. Ανυπομονούμε να σας υποδεχτούμε και να μοιραστούμε μαζί σας τα εξαιρετικά θαύματα του Meteora Donkeyland!"
            : "Come to Meteora Donkeyland, where love, care, and respect for donkeys are at the heart of our activities. Enjoy the magic of this unique destination where history and natural beauty converge. We look forward to welcoming you and sharing with you the exceptional wonders of Meteora Donkeyland!"}
        </span>
      </div>
    </div>
  );
}

export default About;
