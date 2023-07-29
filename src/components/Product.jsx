import React from "react";
import "./Product.css";
import prodImg from "../images/products-image.png";

function Product({ selectedLanguage }) {
  return (
    <section className="section-product">
      <div className="product-container ">
        <div className="product-info-text">
          <div className="product-text-box">
            <span>
              {selectedLanguage === "🇬🇷"
                ? "Χειροποίητα Προϊοντα Γαϊδούρας"
                : "Handmade Donkey Products"}
            </span>
          </div>
          <div className="product-info">
            <p>
              {selectedLanguage === "🇬🇷" ? (
                <span>
                  Για να θυμάστε την επίσκεψή σας και να στηρίξετε τη συνεχή
                  φροντίδα των γαϊδουριών μας, το μικρό μας κατάστημα προσφέρει
                  μια ποικιλία προϊόντων και αναμνηστικών.
                </span>
              ) : (
                <span>
                  To remember your visit and support the ongoing care of our
                  donkeys, our small shop offers a variety of products and
                  souvenirs.
                </span>
              )}
            </p>
          </div>
        </div>
        <a href="https://elgrecocosmetics.com/">
          <img src={prodImg} alt="El Greco Cosmetics" />
        </a>
      </div>
    </section>
  );
}

export default Product;
