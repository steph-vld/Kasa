import "./lodging.css";
import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import datas from "../../../datas/datas.js";
import pinkStar from "../../../assets/pinkStar.png";
import greyStar from "../../../assets/greyStar.png";
import Slideshow from "../../slideshow/slideshow.js";
import Dropdown from "../../dropDown/dropDown.js";

function Lodging() {
  const [currentSlideshow, setCurrentSlideshow] = useState([]);

  const lodgingId = useParams("id").id;
  const currentData = datas.filter((data) => data.id === lodgingId);

  useEffect(() => {
    const currentData = datas.filter((data) => data.id === lodgingId);
    if (currentData.length > 0) setCurrentSlideshow(currentData[0].pictures);
  }, [lodgingId]);

  if (currentData.length === 0) {
    //not founded
    return <Navigate to="/*" />;
  }

  const hostName = currentData[0].host.name.split(" ");
  const rating = currentData[0].rating;
  const description = currentData[0].description;
  const equipments = currentData[0].equipments;
  const equipmentList = equipments.map((equipment) => {
    return <li key={equipment}>{equipment}</li>;
  });

  return (
    <>
      <div className="lodging-block">
        <Slideshow imageSlideshow={currentSlideshow} />
        <div className="lodging-details">
          <h1>{currentData[0].title}</h1>
          <p>{currentData[0].location}</p>
          <div className="tag">
            {currentData[0].tags.map((tag, index) => {
              return <span key={index}>{tag}</span>;
            })}
          </div>
        </div>

        <div className="lodging-host-root">
          <div className="block-host">
            <div className="lodging-host">
              <span>{hostName[0]}</span>
              <span>{hostName[1]}</span>
            </div>
            <img src={currentData[0].host.picture} alt="Hôte" />
          </div>

          <div className="lodging-star">
            {[...Array(5)].map((star, index) => {
              const ratingValue = index + 1;
              return (
                <img
                  key={index}
                  src={ratingValue <= rating ? pinkStar : greyStar}
                  alt="Etoile"
                />
              );
            })}
          </div>
        </div>

        <div className="lodging-dropdown-block">
          <Dropdown title={"Description"} description={description} />
          <Dropdown title={"Équipements"} description={equipmentList} />
        </div>
      </div>
    </>
  );
}

export default Lodging;
