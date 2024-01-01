// import { useEffect, useState } from "react";
import Country from "./Country";
import Currently from "./Currently";

function Time({ timeDate, weatherData, city, weatherIcon, country }) {
  const hours = timeDate.getHours();
  const minutes =
    timeDate.getMinutes() < 10 && timeDate.getMinutes() > 0
      ? `0${timeDate.getMinutes()}`
      : timeDate.getMinutes();

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
