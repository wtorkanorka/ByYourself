import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // const [controle, setControle] = useState(1);
  const [isStarted, setIsStarted] = useState<Boolean>(false);
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

  useEffect(() => {
    console.log(positionHorizontal, positionVertical);
    setInterval(() => {
      setNpcPositionVertical(
        getRandomInt(npcPositionVertical, positionVertical)
      );
      setNpcPositionHorizontal(
        getRandomInt(npcPositionHorizontal, positionHorizontal)
      );
      console.log("first interval", npcPositionVertical, npcPositionHorizontal);
    }, 2000);
    setInterval(() => {
      setNpcPositionVertical(positionVertical);
      setNpcPositionHorizontal(positionHorizontal);
      console.log("second interval", positionVertical, positionHorizontal);
    }, 1000);
  }, [npcPositionHorizontal, npcPositionVertical, isStarted]);

  return (
    <>
      <button onClick={() => setIsStarted(true)}>Start game</button>
      <div
        className="player"
        style={{ top: positionVertical, left: positionHorizontal }}
      ></div>
      <div
        className="npc"
        style={{ top: npcPositionVertical, left: npcPositionHorizontal }}
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
