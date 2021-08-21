import { useState, useEffect, useRef } from "react";
import PlayerDetails from "./PlayerDetails";
import PlayerController from "./PlayerController";
import SocketClient from "../Socket/SocketClient";
import ss from "socket.io-stream";

const Player = (props) => {
    console.log(props);

    const audioEl = useRef(null);

    const [isPlaying, setIsPlaying] = useState(false);

    // control audio stream
    const handleAudioStream = () => {
        ss(SocketClient).on("stream", (stream, data) => {
            let parts = [];
            stream.on("data", (chunk) => {
                console.log(chunk);
                parts.push(chunk);
            });
            stream.on("end", function () {
                audioEl.src = (window.URL || window.webkitURL).createObjectURL(
                    new Blob(parts)
                );
                audioEl.play();
            });
        });
    };

    //
    const fetchData = async () => {
        if (isPlaying) await audioEl.current.play();
        else await audioEl.current.pause();
    };

    useEffect(() => {
        handleAudioStream();
        fetchData();
    });

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

    return (
        <div className="card border-0 text-center c-player">
            <div className="card-body">
                <div className="playerBackground"></div>
                <audio ref={audioEl}></audio>
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
        </div>
    );
};

export default Player;
