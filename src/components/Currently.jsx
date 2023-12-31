// import React from 'react'
import { IoIosCloudy } from "react-icons/io";
import { IoIosRainy } from "react-icons/io";
import { FaRegSnowflake } from "react-icons/fa";
import { BsCloudLightningRainFill } from "react-icons/bs";
import { BsFillCloudFog2Fill } from "react-icons/bs";
import { FaSun } from "react-icons/fa6";
import { useEffect, useState } from "react";
// import Icon from "@mui/material/Icon";
// import 'material-icons/iconfont/material-icons.css';

function Currently({ currentlyData, iconNumber }) {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    if (iconNumber >= 200 && iconNumber < 300) {
      return setIcon(<BsCloudLightningRainFill />);
    } else if (iconNumber >= 300 && iconNumber < 500) {
      return setIcon(<FaRegSnowflake />);
    } else if (iconNumber >= 500 && iconNumber < 600) {
      return setIcon(<IoIosRainy />);
    } else if (iconNumber >= 600 && iconNumber < 700) {
      return setIcon(<FaRegSnowflake />);
    } else if (iconNumber >= 700 && iconNumber < 800) {
      return setIcon(<BsFillCloudFog2Fill />);
    } else if (iconNumber == 800) {
      return setIcon(<FaSun />);
    } else if (iconNumber > 800 && iconNumber < 900) {
      return setIcon(<IoIosCloudy />);
    }
  }, [iconNumber]);

  return (
    <div className="currently">
      <i className="material-icon">{icon}</i>
      {currentlyData || "Error"}
    </div>
  );
}

export default Currently;
