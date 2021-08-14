import WeatherApp from "../Weather/WeatherApp";
import MusicApp from "../MusicPlayer/MusicApp";
import ButtonBar from "../MusicPlayer/WhiteNoise/ButtonBar";
import Navbar from "../Navbar/Navbar";
import Chat from "../Chat/Chat";
import "./Main.css";

const Main = () => {
    return (
        <div className="container-fluid">
            <div className="row g-4">
                <Navbar />
            </div>
            <div className="row g-0 justify-items-center">
                <div className="col-md-6">
                    <Chat />
                </div>
                <div className="col-md-3">
                    <div className="playerBackground"></div>
                    <MusicApp />
                    <ButtonBar />
                </div>
                <div className="col-md-3">
                    <WeatherApp />
                </div>
            </div>
        </div>
    );
};

export default Main;
