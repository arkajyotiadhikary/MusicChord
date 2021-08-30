import { useState, useEffect, useRef } from "react";
import PlayerDetails from "./PlayerDetails";
import PlayerController from "./PlayerController";
import SocketClient from "../Socket/SocketClient";
import ss from "socket.io-stream";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { search_song } from "../../apis/music";

const Player = (props) => {
    const audioRef = useRef(null);
    const [source, setSource] = useState("");
    const [inputSong, setInputSong] = useState("");
    const [songId, setSongId] = useState("");
    const inputField = useRef(null);

    useEffect(() => {
        updateSong(`http://localhost:8000/music/${songId}`);
    }, [songId]);

    const handleChange = () => {
        setInputSong(inputField.current.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const _songId = await search_song(inputSong);
        setSongId(_songId);
    };

    const updateSong = (source) => {
        setSource(source);
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.load();
            audioRef.current.play();
        }
    };

    // const [isPlaying, setIsPlaying] = useState(false);
    // const [song, setSong] = useState("");

    // // control audio stream

    // //
    // const fetchData = async () => {
    //     if (isPlaying) await audioEl.current.play();
    //     else await audioEl.current.pause();
    // };

    // useEffect(() => {
    //     fetchData();
    // });

    // const skipSong = (forward = true) => {
    //     if (forward) {
    //         props.setCurrentSongIndex(() => {
    //             let temp = props.currentSongIndex;
    //             temp++;
    //             if (temp > props.songs.length - 1) temp = 0;
    //             return temp;
    //         });
    //     } else {
    //         props.setCurrentSongIndex(() => {
    //             let temp = props.currentSongIndex;
    //             temp--;
    //             if (temp < 0) temp = props.songs.length - 1;
    //             return temp;
    //         });
    //     }
    // };

    const handleAudio = (e) => {
        e.play();
    };

    return (
        <>
            <form onSubmit={handleSubmit} class="input-group row">
                <div class="form-outline col-10 ">
                    <input
                        onChange={handleChange}
                        ref={inputField}
                        type="search"
                        id="form1"
                        class="form-control"
                    />
                </div>
                <button type="submit" class="btn btn-primary ps-1 col-2">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
            <div className="card border-0 text-center c-player">
                <div className="card-body">
                    {/* <div className="playerBackground"></div> */}
                    <audio
                        // onClick={handleAudio}
                        src={source}
                        ref={audioRef}
                        controls
                        autoPlay
                        preload
                    >
                        {console.log(songId)}
                    </audio>
                    {/* {songId ? (
                        
                    ) : (
                        <>nothing </>
                    )} */}
                    {/* <PlayerDetails song={props.songs[props.currentSongIndex]} /> */}
                    <PlayerController
                    // isPlaying={isPlaying}
                    // setIsPlaying={setIsPlaying}
                    // skipSong={skipSong}
                    />
                    <p>
                        <strong>Next Up</strong>{" "}
                        {/* {props.songs[props.nextSongIndex].title} by{" "}
                    {props.songs[props.nextSongIndex].artist} */}
                    </p>
                </div>
            </div>
        </>
    );
};

export default Player;
