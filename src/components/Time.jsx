// import React from 'react'

// import { useState } from "react";
import Country from "./Country";
import Currently from "./Currently";

function Time() {
  // const [time, setTime] = useState(null)
  // luxon
  const date = new Date();
  const localTime = date.getTime();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const timeZone = date.getTimezoneOffset() * 60000;

  const utc = localTime - timeZone;
  const offset = 4;
  const city = utc + 3600000 * offset;
  console.log(city);

  return (
    <div className="time-component">
      <Currently />
      <div className="time">
        <h1>{`${hours}:${minutes}`}</h1>
        <h3>BST</h3>
      </div>
      <Country />
    </div>
  );
}

export default Time;
