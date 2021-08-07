import React, { useState, useEffect } from "react";
import WeatherBackground from "./WeatherBackground";
import "./WeatherApp.css";

const Api = {
  key: "",
  base: `api.openweathermap.org/data/2.5/weather?q=Guwahati&appid=d2311387e5b14755e3ec508375660f94`,
};

const WeatherApp = () => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const getWeather = async () => {
      let data = await fetch(Api.key);
      await setWeather(data.json());
      await console.log(weather);
    };
    getWeather();
  }, [Api.key]);

  return <h1>Weather</h1>;
};

export default WeatherApp;
