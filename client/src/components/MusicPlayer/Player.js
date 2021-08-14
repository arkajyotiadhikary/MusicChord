import { useState, useEffect, useRef } from "react";
import PlayerDetails from "./PlayerDetails";
import PlayerController from "./PlayerController";

const Player = (props) => {
    console.log(props);

    const audioEl = useRef(null);

    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            console.log(isPlaying, await audioEl.current.play());
            if (isPlaying) await audioEl.current.play();
            else await audioEl.current.pause();
        };
        fetchData();
    }, [isPlaying]);

    const skipSong = (forward = true) => {
        if (forward) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;
                if (temp > props.songs.length - 1) temp = 0;
                return temp;
            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;
                if (temp < 0) temp = props.songs.length - 1;
                return temp;
            });
        }
    };

    // console.log(props.songs[props.currentSongIndex].src);

    return (
        <div className="c-player">
            <audio
                src={props.songs[props.currentSongIndex].src}
                ref={audioEl}
            ></audio>
            <PlayerDetails song={props.songs[props.currentSongIndex]} />
            <PlayerController
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                skipSong={skipSong}
            />
            <p>
                <strong>Next Up</strong>{" "}
                {props.songs[props.nextSongIndex].title} by{" "}
                {props.songs[props.nextSongIndex].artist}
            </p>
        </div>
    );
};

export default Player;
