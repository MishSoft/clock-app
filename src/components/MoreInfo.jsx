// import React from 'react'
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
function MoreInfo({checkIcon, setHandleInformation}) {
    
  return (
    <button onClick={() => setHandleInformation()} className="more-info-button">
      {checkIcon ? (
        <>
          more <FaAngleDown className="icon" />
        </>
      ) : (
        <>
          less <FaAngleUp className="icon" />
        </>
      )}
    </button>
  );
}

export default MoreInfo;
