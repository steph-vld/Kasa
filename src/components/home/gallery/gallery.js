import "./gallery.css";
import datas from "../../../datas/datas.js";
import Cards from "../cards.js";

function Gallery() {
  return (
    <div className="lodging-gallery">
      {datas.map((data) => {
        return (
          <Cards
            key={data.id}
            id={data.id}
            title={data.title}
            cover={data.cover}
          />
        );
      })}
    </div>
  );
}

export default Gallery;
