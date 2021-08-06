import { useState, useEffect } from "react";
import Player from "./Player";

const MusicApp = () => {
  const [songs] = useState([
    {
      title: "You_know_why",
      artist: "Unknown",
      img_src:
        "https://mir-s3-cdn-cf.behance.net/projects/404/7e3520114084301.Y3JvcCwxMDgwLDg0NCwwLDExNw.gif",
      src: "client/src/components/Music/Loyalty_Freak_Music_-_04_-_You_know_why.mp3",
    },
    {
      title: "Song 2",
      artist: "Arka",
      img_src: "../Images/index.jpg",
      src: "client/src/components/Music/stardust-__-FREE-DOWNLOAD-CC0.mp3",
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
      <Player song={songs[currentSongIndex]} nextSong={songs[nextSongIndex]} />
    </div>
  );
};

export default MusicApp;
