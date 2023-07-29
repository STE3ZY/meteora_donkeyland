import LightGallery from "lightgallery/react";
import "./Photos.css";

import img1 from "../images/DSC07667.jpg";
import img2 from "../images/DSC07672.jpg";
import img3 from "../images/DSC07701.jpg";
import img4 from "../images/DSC07717.jpg";
import img5 from "../images/DSC07809.jpg";
import img6 from "../images/DSC07759.jpg";
import img7 from "../images/DSC07762.jpg";
import img8 from "../images/DSC07777.jpg";
import img9 from "../images/DSC07784.jpg";
import img10 from "../images/DSC07745.jpg";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

function Photos() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
      <a href={img1}>
        <img className="photo-item" alt="img1" src={img1} />
      </a>
      <a href={img2}>
        <img className="photo-item" alt="img2" src={img2} />
      </a>
      <a href={img3}>
        <img className="photo-item" alt="img3" src={img3} />
      </a>
      <a href={img4}>
        <img className="photo-item" alt="img4" src={img4} />
      </a>
      <a href={img5}>
        <img className="photo-item" alt="img5" src={img5} />
      </a>
      <a href={img6}>
        <img className="photo-item" alt="img6" src={img6} />
      </a>
      <a href={img7}>
        <img className="photo-item" alt="img7" src={img7} />
      </a>
      <a href={img8}>
        <img className="photo-item" alt="img8" src={img8} />
      </a>
      <a href={img9}>
        <img className="photo-item" alt="img9" src={img9} />
      </a>
      <a href={img10}>
        <img className="photo-item" alt="img10" src={img10} />
      </a>
    </LightGallery>
  );
}

export default Photos;
