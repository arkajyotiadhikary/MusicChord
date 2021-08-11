import WeatherApp from "../Weather/WeatherApp";
import MusicApp from "../MusicPlayer/MusicApp";
import ButtonBar from "../MusicPlayer/WhiteNoise/ButtonBar";
import "./Main.css";

const Main = () => {
    return (
        <div className="container-fluid">
            <div className="row g-4">
                <div className="col-md-6">
                    <WeatherApp />
                </div>
                <div className="col-md-3">
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
