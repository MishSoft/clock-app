import { useState, useEffect } from "react";
import { DateTime } from "luxon";
import Information from "./components/Information";
import MoreInfo from "./components/MoreInfo";
import Quotes from "./components/Quotes";
import Time from "./components/Time";
import { ToastContainer, toast } from "react-toastify";
import { myAPI, myImagesApi } from "./components/envIgnore";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [icon, setIcon] = useState(true);
  const [info, setInfo] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);
  const [weatherBackground, setWeatherBackground] = useState("");
  const date = new Date();
  const handleSubmitInformation = () => {
    setIcon(!icon);
    setInfo(!info);
  };

  const notify = () =>
    toast.info("The app uses limited APIs, which may cause the app to crash.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  useEffect(() => {
    notify();
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLatitude = position.coords.latitude;
        const userLongitude = position.coords.longitude;

        const currentHour = DateTime.local().hour;
        let weatherQuery;

        if (currentHour >= 6 && currentHour < 12) {
          weatherQuery = "morning";
        } else if (currentHour >= 12 && currentHour < 18) {
          weatherQuery = "afternoon";
        } else {
          weatherQuery = "evening";
        }

        // Fetch weather data
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${userLatitude}&lon=${userLongitude}&appid=${myAPI}`
        )
          .then((response) => response.json())
          .then((data) => {
            setWeatherData(data.weather[0].description);
            setCity(data.name);
            setCountry(data.sys.country);
            setWeatherIcon(data.weather[0].icon);

            // Fetch Unsplash photo based on morning, afternoon, or evening
            fetch(
              `https://api.unsplash.com/search/photos?query=${weatherQuery}`,
              {
                headers: {
                  Authorization: `Client-ID ${myImagesApi}`,
                },
              }
            )
              .then((response) => response.json())
              .then((photoData) => {
                setWeatherBackground(
                  photoData.results[
                    Math.floor(Math.random() * photoData.results.length)
                  ].urls.full
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
      <div style={{ position: "absolute" }}>
        <ToastContainer
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
        />
      </div>
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
