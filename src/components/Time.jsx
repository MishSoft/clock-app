import { DateTime } from "luxon";
import Country from "./Country";
import Currently from "./Currently";
import { useEffect, useState } from "react";

function getCountryAndCity(dateTime) {
  const offsetNameLong = dateTime.offsetNameLong;

  // Extract country and city from offsetNameLong
  const [city, country] = offsetNameLong.split("/").map((part) => part.trim());

  return { country, city };
}

function Time() {
  const date = new Date()

  console.log(DateTime.fromJSDate())

  // console.log("s");
  return (
    <div className="time-component">
      <Currently />
      <div className="time">
        <h1></h1>
        <h3></h3>
      </div>
      <Country />
    </div>
  );
}

export default Time;
