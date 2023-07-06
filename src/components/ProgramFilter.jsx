import React, { useState } from "react";
import data from "../data/data";
import card from "../assets/img/card.png";
import ArtistsThumbnail from "./ArtistsThumbnail";

// The spread operator (...) in the function musicTypes allow us to apply for each of our data imported in the .map the same parameter past. //

// This function will create a new table with the data returned.//

// The Set allows us to avoid duplicates with the same values//

// "All" is the default option ( without using the filter)//
const musicTypes = [
  "All",
  ...new Set(
    data.map((currElem) => {
      return currElem.type;
    })
  ),
];

export const ProgramFilter = () => {
  const [artistCategories, setArtistCategories] = useState(data);

  // data.filter allow us to return an Array when the result equal true//

  //data.filter will run through all the element stock in "current element"and will check if the type of element equal the type of the filter ( here we use type of music so it will check if the type of music is equal of the type of the filter we choose with the button)  //

  // We only look out the data who have the type we looking for//

  const filterCategories = (type) => {
    let updateCategories = data.filter((currentElem) => {
      return currentElem.type === type;
    });
    setArtistCategories(updateCategories);
  };

  return (
    <div>
      <section id="Program">
        <h1 className="Program-title">Program</h1>

        {musicTypes.map((type) => {
          return (
            <div className="btn-container" key={type}>
              {/* We create buttons with the number of category we have (pop, electro...).*/
              /* The button "All" is the default button, so it the button don't use the function*/}

              <button className="btn-placement" onClick={() => (type !== "All" ? filterCategories(type) : setArtistCategories(data))}>
                {type}
              </button>
            </div>
          );
        })}

        <ArtistsThumbnail artistCategories={artistCategories} />
      </section>
    </div>
  );
};
export default ProgramFilter;
