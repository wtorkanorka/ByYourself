import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);

    let now = Math.floor(Math.random() * (max - min + 1)) + min;

    return now;
  }

  useEffect(() => {
    if (isStarted) {
      let interval = setInterval(() => {
        setActiveIndex(getRandomInt(0, 5));
      }, 1000);
      setTimeout(() => {
        clearInterval(interval);
        setActiveIndex(null);
        setTimeout(() => setCount(0), 2000);

        setIsStarted(false);
      }, getRandomInt(10000, 20000));
    }
  }, [isStarted]);

  //изменение цвета
  function toggleRainbow() {
    let color = 0;

    setInterval(function () {
      color = color + (1 % 360);
      document.querySelector("body").style.backgroundColor =
        "hsl(" + color + ", 100%, 50%)"; // hsl(0, 100%, 50%)
    }, 50);
  }

  return (
    <>
      <button
        onClick={() => setIsStarted(true)}
        style={{
          display: "block",
          padding: "5px 5px",
          color: "black",
        }}
      >
        Start Game
      </button>
      {/* <button onClick={() => setIsStarted(false)}>Stop game</button> */}
      <button id="startRainbow" onClick={() => toggleRainbow()}>
        Rainbow
      </button>
      <div></div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        {count}
      </div>
      {isStarted && (
        <>
          {Array.from({ length: 6 }).map((_, index) => (
            <button
              key={index}
              style={{
                backgroundColor: activeIndex === index ? "green" : "white",
              }}
              onClick={() => {
                if (activeIndex === index) {
                  setCount(() => count + 1);
                } else {
                  setCount(() => count - 5);
                }
              }}
            >
              {index}
            </button>
          ))}
        </>
      )}
    </>
  );
}

export default App;
{
  /* <div className="li-container">
<li className="li-element">
  <button key={1}></button>
</li>
<li className="li-element">
  <button key={2}></button>
</li>
<li className="li-element">
  <button key={3}></button>
</li>
<li className="li-element">
  <button key={4}></button>
</li>
<li className="li-element">
  <button key={5}></button>
</li>
<li className="li-element">
  <button key={6}></button>
</li>
</div> */
}
