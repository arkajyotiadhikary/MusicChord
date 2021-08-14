import WeatherApp from "../Weather/WeatherApp";
import MusicApp from "../MusicPlayer/MusicApp";
import ButtonBar from "../MusicPlayer/WhiteNoise/ButtonBar";
import Navbar from "../Navbar/Navbar";
import Chat from "../Chat/Chat";
import "./Main.css";

const Main = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row g-4">
                    <Navbar />
                </div>
            </div>
            <div className="container-fluid">
                <div className="row g-5 g-lg-3">
                    <div className="col-lg-6">
                        <Chat />
                    </div>
                    <div className="col-lg-3">
                        <MusicApp />
                    </div>
                    <div className="col-lg-3 ">
                        <WeatherApp />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;
