import { Link } from "react-router-dom";

export const ArtistsThumbnail = ({ artistCategories }) => {
  return (
    <div>
      {artistCategories.map((currentElem, index) => {
        return (
          <div className="container-img-artist" key={currentElem.id}>
            <div className="card">
              <div className="img-artist">
                <figure>
                  <img className="thumbnail"src={currentElem.imageThumbnail} alt="image" />
                </figure>
              </div>
              {/* Link between the filter and the ArtistsPage according to the artist we chose*/}
              <Link to={`/artist-page/${currentElem.id}`} key={currentElem.id}>
                <button className="btn-view">
                  <h4 className="title-btn-view">View</h4>
                </button>
              </Link>{" "}
              <div className="text-img-artist">{currentElem.date}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ArtistsThumbnail;
