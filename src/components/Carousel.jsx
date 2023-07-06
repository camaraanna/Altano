import { useState } from "react";
import data from "../data/data";
import card from "../assets/img/card.png";
import { Link } from "react-router-dom";

/* We define the name of each card of the carousel by using the name of the value we have in our table*/

export const Carousel = () => {
  const [displaySelectedCard, setDisplaySelectedCard] = useState(null);
  return (
    <div className="carousel-container">
      <div className="container-box-carousel">
        {data.map((value, key) => {
          return (
            /* We define a page for each element of our table by adding the id in our url  */

            <Link style={{ textDecoration: "none" }} to={`/artist-page/${value.id}`} key={value.id}>
              <div
                className="box-carousel"

                /* "value" represent the value (or multiple value) we have in our table.*/

                /* When we click on the card the function setDisplaySelectedCard will give us the value of the card ( setDisplaySelectedCard(value) )*/

                /*That mean  isplaySelectedCard is equal to the value of the card we select */

                /* this value will be show on the ArtistPage */
              >
                <div className="idCard-container">
                  <figure className="idCard">
                    <img src={card} alt="idCard" />
                  </figure>

                  <div className="idCard-information">
                    <div className="idCard-date-concert">
                      <h4> {value.date}</h4>
                    </div>

                    <div className="idCard-name-artist">
                      <h4 className="artist-name"> {value.name}</h4>
                    </div>

                    <div className="idThumbnail">
                      <img src={value.idThumbnail} alt="" />
                    </div>
                    <button className="btn-id-card">VIEW</button>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Null is the default setting, when we don't click on the card */}

      {displaySelectedCard !== null ? (
        <div className="display-selectedcard">
          <div>{displaySelectedCard.date}</div>
          <div>{displaySelectedCard.description}</div>
        </div>
      ) : null}
    </div>
  );
};

export default Carousel;
