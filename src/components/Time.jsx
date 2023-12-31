import { useEffect, useState } from "react";
import Country from "./Country";
import Currently from "./Currently";

function Time() {
  const date = new Date();
  const hours = date.getHours();
  const minutes =
    date.getMinutes() < 10 && date.getMinutes() > 0
      ? `0${date.getMinutes()}`
      : date.getMinutes();

  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);
  const myAPI = "aa51d208b4364cac9fc0df711a6bf551";
  const latitude = 41.6743424; // Set the latitude of your location
  const longitude = 44.8495616; // Set the longitude of your location

  useEffect(() => {
    fetch(
      `https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=${myAPI}`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data.data[0].weather.description);
        setCity(data.data[0].city_name);
        setCountry(data.data[0].country_code);
        setWeatherIcon(data.data[0].weather.code);
        // console.log(data.data[0].weather.code)
        // console.log(data.data[0].weather)
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  }, [myAPI, latitude, longitude]);
  return (
    <div className="time-component">
      <Currently
        iconNumber={weatherIcon}
        currentlyData={weatherData && `${weatherData}, It's currently`}
      />
      <div className="time">
        <h1>{`${hours}:${minutes}`}</h1>
        <h3>S</h3>
      </div>
      <Country city={city} country={country} />
    </div>
  );
}

export default Time;
