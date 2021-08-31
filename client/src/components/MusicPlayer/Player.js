import { useState, useEffect, useRef } from "react";
import PlayerDetails from "./PlayerDetails";
import PlayerController from "./PlayerController";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { search_song } from "../../apis/music";

const Player = () => {
    const audioRef = useRef(null);
    const audioVol = useRef(null);
    const inputField = useRef(null);

    const [volume, setVolume] = useState(1);
    const [source, setSource] = useState("");
    const [inputSong, setInputSong] = useState("");
    const [songDetail, setsongDetail] = useState({
        songId: "",
        thumbnail: "",
        title: "",
        artist: "",
    });
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoop, setIsLoop] = useState(false);

    useEffect(() => {
        updateSong(`http://localhost:8000/music/${songDetail.songId}`);
    }, [songDetail.songId]);

    const handleChange = () => {
        setInputSong(inputField.current.value);
    };

    const handleLoop = () => {
        setIsLoop(!isLoop);
        if (isLoop) audioRef.current.loop = true;
        else audioRef.current.loop = false;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const _songDetail = await search_song(inputSong);
        console.log(_songDetail);
        setsongDetail((prevState) => ({
            ...prevState,
            songId: _songDetail.songId,
            thumbnail: _songDetail.thumbnail,
            title: _songDetail.title,
            artist: _songDetail.artist,
        }));
    };

    const handlePlay = () => {
        setIsPlaying(!isPlaying);
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
    };

    const handleVol = (volume) => {
        setVolume(volume);
        audioRef.current.volume = volume;
    };

    const updateSong = (source) => {
        setSource(source);
        if (audioRef.current) {
            setIsPlaying(true);
            audioRef.current.pause();
            audioRef.current.load();
        }
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
            {/* <div className="playerBackground"></div> */}
            <div className="card border-0 text-center c-player">
                <div className="card-body">
                    <audio src={source} ref={audioRef} autoPlay preload />
                    <PlayerDetails
                        img_src={songDetail.thumbnail}
                        title={songDetail.title}
                        artist={songDetail.artist}
                    />
                    <PlayerController
                        isPlaying={isPlaying}
                        handlePlay={handlePlay}
                        isLoop={isLoop}
                        handleLoop={handleLoop}
                        handleVol={handleVol}
                    />
                </div>
            </div>
        </>
    );
};

export default Player;
