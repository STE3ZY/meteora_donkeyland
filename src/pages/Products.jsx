import React from "react";
import Product from "../components/Product";

const Products = ({ selectedLanguage }) => {
  return (
    <div>
      <Product selectedLanguage={selectedLanguage} />
    </div>
  );
};

export default Products;
