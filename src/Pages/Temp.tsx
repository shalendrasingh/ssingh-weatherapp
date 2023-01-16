import React, { useState, useEffect } from "react";
import "./Style.css";
import { WeatherCard } from "./WeatherCard";
const Temp = () => {
  const [searchValue, setSearchValue] = useState("kushinagar");
  const [tempInfo, setTempInfo] = useState({});
  useEffect(() => {
    getWeatherInfo();
  }, []);

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=080d4dc73478efcb1730be1fdce752b2`;

      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          const { temp, humidity, pressure } = data.main;
          const { main: wheathermood } = data.weather[0];
          const { name } = data;
          const { speed } = data.wind;
          const { country, sunset } = data.sys;
          //    console.log(temp);

          const payload = {
            temp,
            humidity,
            pressure,
            wheathermood,
            name,
            speed,
            country,
            sunset,
          };
          setTempInfo(payload);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            id="search"
            className="searchTerm"
            placeholder="search your city here.."
            autoFocus
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}
          >
            Search
          </button>
        </div>
      </div>
      <WeatherCard tempInfo={tempInfo} />
    </>
  );
};

export { Temp };
