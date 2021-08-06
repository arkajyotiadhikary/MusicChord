import React from "react";

const PlayerDetails = (props) => {
  return (
    <div className="c-player--details">
      <div className="detail-img">
        <img src={props.song.img_src} alt="" />
      </div>
      <h3 className="detail-title">{props.song.title}</h3>
      <h3 className="detail-artist">{props.song.artist}</h3>
    </div>
  );
};

export default PlayerDetails;
