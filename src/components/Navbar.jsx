import { useState, useEffect } from "react";
import navlogo from "../images/footer-logo.png";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import grFlag from "../images/gr-flag.png";
import gbFlag from "../images/gb-flag.png";

export default function Navbar({ selectedLanguage, setSelectedLanguage }) {
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
  };

  const handleLinkClick = () => {
    // Close the navbar when a link is clicked
    setNavbar(false);
  };

  return (
    <nav className="navbar w-full bg-[#000000] shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-2 md:py-1 md:block">
            <Link to="/">
              <img src={navlogo} className="nav--logo" alt="Logo" />
            </Link>

            <div className="md:hidden">
              <button
                className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white hover:text-blue-600">
                <Link to="/" onClick={handleLinkClick}>
                  {selectedLanguage === "🇬🇷" ? "Αρχική" : "Home"}
                </Link>
              </li>
              <li className="text-white hover:text-blue-600">
                <Link to="/products" onClick={handleLinkClick}>
                  {selectedLanguage === "🇬🇷" ? "Προϊόντα" : "Products"}
                </Link>
              </li>
              <li className="text-white hover:text-blue-600">
                <Link to="/gallery" onClick={handleLinkClick}>
                  {selectedLanguage === "🇬🇷" ? "Φωτογραφίες" : "Gallery"}
                </Link>
              </li>
              <li className="text-white hover:text-blue-600">
                <Link to="/contact" onClick={handleLinkClick}>
                  {selectedLanguage === "🇬🇷" ? "Επικοινωνία" : "Contact Us"}
                </Link>
              </li>
              <li className="text-3xl">
                <span
                  className={`language-item mr-5 md:m-5 cursor-pointer ${
                    selectedLanguage === "🇬🇷" ? "" : "opacity-40"
                  }`}
                  onClick={() => {
                    handleLanguageClick("🇬🇷");
                    handleLinkClick();
                  }}
                >
                  <img src={grFlag} className="language-flag inline w-8" />
                </span>
                <span
                  className={`language-item cursor-pointer ${
                    selectedLanguage === "🇬🇧" ? "" : "opacity-40"
                  }`}
                  onClick={() => {
                    handleLanguageClick("🇬🇧");
                    handleLinkClick();
                  }}
                >
                  <img src={gbFlag} className="language-flag inline w-8" />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
