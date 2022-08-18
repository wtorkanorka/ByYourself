import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [quantity, setQuantity] = useState(6);

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);

    let now = Math.floor(Math.random() * (max - min + 1)) + min;

    return now;
  }

  useEffect(() => {
    if (isStarted) {
      let interval = setInterval(() => {
       setActiveIndex(getRandomInt(0, quantity - 1));
      }, getRandomInt(200, 700));
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
  useEffect(() => console.log(activeIndex));
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
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={() => setQuantity(5)}>5</button>
        <button onClick={() => setQuantity(6)}>6</button>
        <button onClick={() => setQuantity(7)}>7</button>
        <button onClick={() => setQuantity(8)}>8</button>
        <button onClick={() => setQuantity(9)}>9</button>
        <button onClick={() => setQuantity(10)}>10</button>
      </div>
      <button id="startRainbow" onClick={() => toggleRainbow()}>
        Rainbow
      </button>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        {count}
      </div>
      {isStarted && (
        <div className="btn-group">
          {Array.from({ length: quantity }).map((_, index) => (
            <button
              className="btn-primary"
              key={index}
              style={{
                backgroundColor: activeIndex === index ? "green" : 'white',
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
        </div>
      )}
    </>
  );
}

export default App;
