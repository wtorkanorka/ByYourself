import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // const [controle, setControle] = useState(1);
  const [isStarted, setIsStarted] = useState(true);
  const [positionVertical, setPositionVertical] = useState(400);
  const [positionHorizontal, setPositionHorizontal] = useState(400);
  const [npcPositionVertical, setNpcPositionVertical] = useState(400);
  const [npcPositionHorizontal, setNpcPositionHorizontal] = useState(400);

  const controleButtons: string[] = ["w", "a", "s", "d"]; // w, a, s, d управление

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);

    let randomeNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomeNumber;
  }

  // setInterval(() => {
  //   console.log(getRandomInt(400, 500));
  //   setNpcPositionVertical(getRandomInt(400, 500));
  //   setNpcPositionHorizontal(getRandomInt(400, 500));
  // }, 1000);
useEffect(() => {
  setNpcPositionVertical(positionVertical)
  setNpcPositionHorizontal(positionHorizontal)
})

console.log(count)
  return (
    <>
      <div
        className="player"
        style={{ top: positionVertical, left: positionHorizontal }}
      ></div>
      <div
        className="npc"
        style={{ top: npcPositionVertical , left: npcPositionHorizontal }}
      ></div>

      <div className="controle">
        <button onClick={() => setPositionVertical(positionVertical - 25)}>
          ⬆
        </button>
        <div style={{ display: "flex" }}>
          <button
            onClick={(e) => setPositionHorizontal(positionHorizontal - 25)}
          >
            ⬅
          </button>
          <button onClick={() => setPositionVertical(positionVertical + 25)}>
            ⬇
          </button>
          <button
            onClick={() => setPositionHorizontal(positionHorizontal + 25)}
          >
            ➡
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
