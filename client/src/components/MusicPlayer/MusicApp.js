import { useState, useEffect } from "react";
import Player from "./Player";
import audio1 from "./song1.mp3";
import audio2 from "./song2.mp3";

const MusicApp = () => {
  const [songs] = useState([
    {
      title: "You_know_why",
      artist: "Unknown",
      img_src:
        "https://mir-s3-cdn-cf.behance.net/projects/404/7e3520114084301.Y3JvcCwxMDgwLDg0NCwwLDExNw.gif",
      src: audio1,
    },
    {
      title: "Song 2",
      artist: "Arka",
      img_src:
        "https://mir-s3-cdn-cf.behance.net/projects/404/7e3520114084301.Y3JvcCwxMDgwLDg0NCwwLDExNw.gif",
      src: audio2,
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) return 0;
      else return currentSongIndex + 1;
    });
  }, [currentSongIndex]);

  return (
    <div className="MusicApp">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
};

export default MusicApp;
