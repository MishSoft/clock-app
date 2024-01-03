import { useState, useEffect } from "react";
import { DateTime } from "luxon";
import Information from "./components/Information";
import MoreInfo from "./components/MoreInfo";
import Quotes from "./components/Quotes";
import Time from "./components/Time";

function App() {
  const [icon, setIcon] = useState(true);
  const [info, setInfo] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);
  const [weatherBackground, setWeatherBackground] = useState("");
  const myAPI = "aa51d208b4364cac9fc0df711a6bf551";
  const myImagesApi = "FbLo17vm475-yo9haBrEdRAC-5KMuitsw6MrTgCweDY";
  const date = new Date();

  const handleSubmitInformation = () => {
    setIcon(!icon);
    setInfo(!info);
  };
  console.log(
    `https://api.unsplash.com/photos?query=${city}${weatherData}&client_id=${myImagesApi}`
  );
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLatitude = position.coords.latitude;
        const userLongitude = position.coords.longitude;

        // Fetch weather data
        fetch(
          `https://api.weatherbit.io/v2.0/current?lat=${userLatitude}&lon=${userLongitude}&key=${myAPI}`
        )
          .then((response) => response.json())
          .then((data) => {
            setWeatherData(data.data[0].weather.description);
            setCity(data.data[0].city_name);
            setCountry(data.data[0].country_code);
            setWeatherIcon(data.data[0].weather.code);

            // Determine if it's currently daytime
            const isDaytime =
              DateTime.local().hour >= 6 && DateTime.local().hour < 18;
            const weatherQuery = isDaytime ? "day" : "night";
            // Fetch Unsplash photo based on daytime or nighttime
            fetch(
              `https://api.unsplash.com/photos/random?client_id=${myImagesApi}&query=tbilisi`
            )
              .then((response) => response.json())
              .then((photoData) => {
                setWeatherBackground(
                  photoData[Math.floor(Math.random() * photoData.length)]
                );
                console.log(
                  photoData[Math.floor(Math.random() * photoData.length)]
                );
              })
              .catch((photoError) => {
                console.error("Error fetching Unsplash photo:", photoError);
              });
          })
          .catch((weatherError) => {
            console.error("Error fetching weather data:", weatherError);
          });
      },
      (geolocationError) => {
        console.error("Error getting geolocation:", geolocationError);
      }
    );
  }, [city, myAPI, myImagesApi, weatherData]);
  return (
    <div
      style={{
        backgroundImage: `url(${weatherBackground})`,
      }}
      className="container"
    >
      <Quotes />
      <div className="footer">
        <div className="time-more">
          <Time
            weatherData={weatherData}
            weatherIcon={weatherIcon}
            city={city}
            country={country}
            timeDate={date}
          />
          <MoreInfo
            checkIcon={icon}
            setHandleInformation={handleSubmitInformation}
          />
        </div>
        <Information timeDate={DateTime} info={info} />
      </div>
    </div>
  );
}

export default App;
