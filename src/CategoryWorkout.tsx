const SavedAlbums = ({ category }) => {
  return (
    <>
      {category.map((obj) => (
        <div className="card" key="obj.name">
          <img
            className="card-img"
            src={obj.images[0].url}
            alt="category-img"
          />
          <div className="text-wrapper">
            <h5 className="playlist-name">{obj.name}</h5>
            <p className="description">{obj.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default SavedAlbums;
