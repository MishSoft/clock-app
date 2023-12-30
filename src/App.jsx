// import { useState } from "react";
import Quotes from "./components/Quotes";
import Time from "./components/Time";

function App() {
  return (
    <div style={{ backgroundImage: `url(https://img.freepik.com/free-photo/night-view-victoria-harbor-hong-kong_53876-146261.jpg)`}} className="container">
      <Quotes/>
      <div className="time-more">
        <Time/>
      </div>
    </div>
  );
}

export default App;
