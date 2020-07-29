import { FC } from "react";

import { IAlbum } from "./types";

interface IProps {
  category: IAlbum[];
}
const Album: FC<IProps> = ({ category }) => {
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
          </div>
        </div>
      ))}
    </>
  );
};

export default Album;
