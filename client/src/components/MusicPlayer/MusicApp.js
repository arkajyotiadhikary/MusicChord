import { useState, useEffect } from "react";
import Player from "./Player";
import audio1 from "./song1.mp3";
import audio2 from "./song2.mp3";
import ButtonBar from "./WhiteNoise/ButtonBar";
import "./MusicApp.css";

const MusicApp = () => {
    const [songs] = useState([
        {
            title: "You_know_why",
            artist: "Unknown",
            img_src:
                "https://media.giphy.com/media/H62NM1ab7wzMXURdoi/giphy.gif",
            src: audio1,
        },
        {
            title: "Song 2",
            artist: "Arka",
            img_src:
                "https://media.giphy.com/media/H62NM1ab7wzMXURdoi/giphy.gif",
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
