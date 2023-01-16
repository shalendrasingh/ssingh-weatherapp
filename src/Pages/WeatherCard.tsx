import React, { useState, useEffect } from "react";

const WeatherCard = ({ tempInfo }: any) => {
  const [weatherSate, setWeatherState] = useState("");
  const {
    temp,
    humidity,
    pressure,
    wheathermood,
    name,
    speed,
    country,
    sunset,
  } = tempInfo;

  useEffect(() => {
    if (wheathermood) {
      switch (wheathermood) {
        case "Clouds": {
          setWeatherState(
            "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3257506/wi-day-cloudy-icon-md.png"
          );
          break;
        }
        case "Haze": {
          setWeatherState(
            "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3184867/ic-fluent-weather-fog-20-regular-icon-sm.png"
          );
          break;
        }
        case "Clear": {
          setWeatherState(
            "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3257523/wi-day-sunny-overcast-icon-sm.png"
          );
          break;
        }
        case "Mist": {
          setWeatherState(
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRptvUKqg8wcta2evUdzlAM_lE3miat8A4f84sDYXnSqw&s"
          );
          break;
        }

        default: {
          setWeatherState(
            "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3257523/wi-day-sunny-overcast-icon-sm.png"
          );
          break;
        }
      }
    }
  }, [wheathermood]);

  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <img
            style={{ width: "100px", height: "100px" }}
            src={weatherSate}
            alt="img"
          />
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{wheathermood}</div>
            <div className="place">
              {name},{country}
            </div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>

        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr}
                <br />
                Sunset
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity}
                <br />
                Humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure} <br />
                Pressure
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed} <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export { WeatherCard };
