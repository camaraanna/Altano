import React, { useEffect, useState } from "react";
import data from "../data/data";
import logo from "../assets/img/Logo/Logo.png";
import goBackBtn from "../assets/img/goBackButn.png";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const ArtistsPage = () => {
  // We use  useParams to  collect the parameters stock in our url //

  const params = useParams();
  const [selectedCard, setSelectedCard] = useState(null);

  // dataFind allow uw to verify ( and collect) if in our data, there is an element with the an id equal to the value that we found in our url //

  useEffect(() => {
    const dataFind = data.find((value) => {
      return value.id === +params.dataId; // the  "+" convert string to number//
    });

    setSelectedCard(dataFind);
  }, [selectedCard, params]);
  return (
    <div className="display selectedcard" style={{ marginTop: "100px", zIndex: "10" }}>
      {/*Conditional Rendering: "if we select our show us those data" */}
      {selectedCard && (
        <div className="container-page">
          <div className="nav-page">
            <div>
              {" "}
              <a href="/">
                <figure className="Logo-img-page">
                  <img src={logo} alt="Logo" />
                </figure>
              </a>
            </div>
            <div className="empty-box"></div>
            <Link to={`/`}>
              {" "}
              <button className="btn-goBack">
                <img src={goBackBtn} alt="" />
              </button>
            </Link>
          </div>

          <div className="information-page">
            <div>
              <figure>
                {" "}
                <img className=" img-page" src={selectedCard.img} alt="" />{" "}
              </figure>
              <div className="concert-date"> {selectedCard.date}</div>
            </div>

            <div className="container-description">
              <div>
                {" "}
                <h1 className="title">{selectedCard.name} </h1>{" "}
              </div>
              <div>
                <p className="description-page">{selectedCard.description}</p>{" "}
              </div>
              <Link to={`/Reservation/`}>
                <div>
                  <button className="btn-reservation">Reservation</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtistsPage;
