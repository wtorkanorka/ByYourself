import { useState, useEffect } from "react";
import money from "./assets/money.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [controle, setControle] = useState(false);

  // const [isStarted, setIsStarted] = useState<Boolean>(false);
  const [positionVertical, setPositionVertical] = useState(400);
  const [positionHorizontal, setPositionHorizontal] = useState(400);
  const [zombiePositionVertical, setZombiePositionVertical] = useState(1000);
  const [zombiePositionHorizontal, setZombiePositionHorizontal] =
    useState(1000);
  const [fruitPositionHorizontal, setFruitPositionHorizontal] = useState(700);
  const [fruitPositionVertical, setFruitPositionVertical] = useState(700);
  // const controleButtons = ["w", "a", "s", "d"]; 

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);

    let randomeNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomeNumber;
  }

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (controle) {
        if (e.key === "w") {
          setPositionVertical(positionVertical - 50);
        }
        if (e.key === "a") {
          setPositionHorizontal(positionHorizontal - 50);
        }
        if (e.key === "s") {
          setPositionVertical(positionVertical + 50);
        }
        if (e.key === "d") {
          setPositionHorizontal(positionHorizontal + 50);
        }
      }
    });
    // setInterval(() => {
    // setNpcPositionVertical(getRandomInt(zombiePositionVertical, positionVertical));
    // setNpcPositionHorizontal(
    //   getRandomInt(zombiePositionHorizontal, positionHorizontal)
    // );
    // console.log("first interval", zombiePositionVertical, zombiePositionHorizontal);
    // }, 2000);

    if (
      //если координаты фрукта и игрока совпадают то фрукт уходит за экран, чтобы его нельзя было еще раз взять
      positionHorizontal === fruitPositionHorizontal &&
      positionVertical === fruitPositionVertical
    ) {
      setCount(() => count + 1);
      setFruitPositionHorizontal(parseInt(getRandomInt(1, 10) + "00"));
      setFruitPositionVertical(parseInt(getRandomInt(1, 10) + "00"));
    }

    let interval = setInterval(() => {
      setTimeout(() => {
        setZombiePositionVertical(positionVertical);
        setZombiePositionHorizontal(positionHorizontal);
      }, 1000);

      clearInterval(interval);
      if (
        zombiePositionVertical === positionVertical &&
        zombiePositionHorizontal === positionHorizontal
      ) {
        setCount(() => count - 5);
      }
    }, 100);
  }, [
    zombiePositionHorizontal,
    zombiePositionVertical,
    positionHorizontal,
    positionVertical,
    controle,
  ]);

  return (
    <>
      {/* <button onClick={() => setIsStarted(true)}>Start game</button> */}
      <div>{count}</div>
      <button onClick={() => setControle(true)}>Клавиатура</button>
      <button onClick={() => setControle(false)}>Экранная клавиатура</button>
      <div
        className="player"
        style={{ top: positionVertical, left: positionHorizontal }}
      ></div>
      <div
        className="zombie"
        style={{ top: zombiePositionVertical, left: zombiePositionHorizontal }}
      ></div>
      <div
        className="fruit"
        style={{ top: fruitPositionVertical, left: fruitPositionHorizontal }}
      ></div>
      <div className="controle" style={{ display: controle ? "none" : "flex" }}>
        <button onClick={() => setPositionVertical(positionVertical - 50)}>
          ⬆
        </button>
        <div style={{ display: "flex" }}>
          <button
            onClick={(e) => setPositionHorizontal(positionHorizontal - 50)}
          >
            ⬅
          </button>
          <button onClick={() => setPositionVertical(positionVertical + 50)}>
            ⬇
          </button>
          <button
            onClick={() => setPositionHorizontal(positionHorizontal + 50)}
          >
            ➡
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
