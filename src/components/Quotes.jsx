import { useEffect, useState } from "react";
import { GiReturnArrow } from "react-icons/gi";

// import { Axios } from "axios";
function Quotes() {
  const [quote, setQuote] = useState("");

  const limit = 1;
  const myAPI = "mZ6f075uqAiA8z0YhxkdHw==JYTPfZ5z0oq4giKD";
  const caughtQuote = async () => {
    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/jokes?limit=${limit}`,
        {
          method: "GET",
          headers: {
            "X-Api-Key": myAPI,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      //   console.log(data);
      setQuote(data[0].joke);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  useEffect(() => {
    caughtQuote();
  }, []);

  // Render the quote in the UI
  return (
    <div className="jokes">
      {`'${quote || "Loading..."}'`}
      <span onClick={caughtQuote} className="return-button">
        <GiReturnArrow />
      </span>
    </div>
  );
}

export default Quotes;
