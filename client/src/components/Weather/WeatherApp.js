import React, { useState, useEffect } from "react";
import "./WeatherApp.css";
import axios from "axios";

const Api = {
    key: "d2311387e5b14755e3ec508375660f94",
    base: "http://api.openweathermap.org/data/2.5/weather?q=Guwahati&appid=",
};

const WeatherApp = () => {
    const [weather, setWeather] = useState({});
    const [temp, setTemp] = useState(0);
    const [wind, setWind] = useState(0);
    const [humidity, setHumidity] = useState(0);

    let time = new Date();
    let min = time.getMinutes();

    setTimeout(() => {
        time = new Date();
        min = time.getMinutes();
    }, 1000);

    useEffect(() => {
        const getWeather = async () => {
            try {
                const response = await axios.get(Api.base + Api.key);
                setWeather(response.data);
                // setTemp(response.data.main.temp - 273.15);
                setTemp(20);
                setWind(response.data.wind.speed);
                setHumidity(response.data.main.humidity);
            } catch (error) {
                console.log(error);
            }
        };
        getWeather();
    }, [min]);

    console.log(weather);

    return (
        <div className="card shadow bg-transparent">
            <div className="card-body">
                <h2 className="weather-header">Weather</h2>
                <h3 className={temp > 30 ? "sun" : "rain"}>Cloudy</h3>
                <span className="h5">
                    Wind {wind}km/h <span className="dot">•</span> Humidity{" "}
                    {humidity}%
                </span>
                <div className="d-flex align-items-center justify-content-between mt-4">
                    <div className="sky">
                        <div className="sun"></div>
                        <div className="cloud">
                            <div className="circle-small"></div>
                            <div className="circle-tall"></div>
                            <div className="circle-medium"></div>
                        </div>
                    </div>
                    <div className="h1">{parseInt(temp)}°</div>
                </div>
            </div>
        </div>
    );
};

export default WeatherApp;
