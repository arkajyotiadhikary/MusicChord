import { useState } from "react";
import PlayerDetails from "./PlayerDetails";
import PlayerController from "./PlayerController";
import "./MusicApp.css";

const Player = (props) => {
  return (
    <div className="c-player">
      <audio></audio>
      <h4>Playing Now</h4>
      <PlayerDetails song={props.song} />
      <PlayerController />
      <p>
        <strong>Next Up</strong> {props.nextSong.title} by{" "}
        {props.nextSong.artist}
      </p>
    </div>
  );
};

export default Player;
