import React, { useState, useEffect } from "react";
import WeatherBackground from "./WeatherBackground";
import "./WeatherApp.css";
import Axios from "axios";
import axios from "axios";

const Api = {
  key: "d2311387e5b14755e3ec508375660f94",
  base: "http://api.openweathermap.org/data/2.5/weather?q=Guwahati&appid=",
};

const WeatherApp = () => {
  const [weather, setWeather] = useState({});

  let time = new Date();
  let min = time.getMinutes();

  setTimeout(() => {
    time = new Date();
    min = time.getMinutes();
  }, 1000);

  console.log(min);
  useEffect(() => {
    const getWeather = async () => {
      try {
        const response = await axios.get(Api.base + Api.key);
        setWeather(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    getWeather();
    console.log("Updated");
  }, [min]);

  return <h1>Weather</h1>;
};

export default WeatherApp;
