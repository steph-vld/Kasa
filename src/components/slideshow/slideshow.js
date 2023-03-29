import "./slideshow.css";
import nextArrow from "../../assets/nextArrow.png";
import previousArrow from "../../assets/previousArrow.png"; 
import {useState} from "react";

function Slideshow({imageSlideshow}) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage(currentImage + 1);
    if (currentImage === imageSlideshow.length - 1) setCurrentImage(0);
  };

  const previousImage = () => {
    setCurrentImage(currentImage - 1);
    if (currentImage === 0) setCurrentImage(imageSlideshow.length - 1);
  };

  return (
    <div className="slideshow">
      {imageSlideshow.length > 1 && (
        <img
          className="previousArrow"
          src={previousArrow}
          alt="précedént"
          onClick={previousImage}
        />
      )}
      {imageSlideshow.map((image, index) => {
        return (
          <img
            key={index}
            className={
              index === currentImage ? "slideshow-img current" : "slideshow-img"
            }
            src={image}
            alt="Logement"
          />
        );
      })}
      {imageSlideshow.length > 1 && (
        <img
          className="nextArrow"
          src={nextArrow}
          alt="suivant"
          onClick={nextImage}
        />
        )}
        <p className="imageCount">{currentImage + 1} / {imageSlideshow.length}</p>
    </div>
  );
}

export default Slideshow;
