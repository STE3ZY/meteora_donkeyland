import React from "react";
import Photos from "../components/Photos";

const Gallery = ({ selectedLanguage }) => {
  return (
    <div>
      <Photos selectedLanguage={selectedLanguage} />
    </div>
  );
};

export default Gallery;
