import { useState, useEffect, useCallback } from "react";

import "./App.css";

let endGame: number = getRandomInt(1, 5);
let death = getRandomInt(-15, -5);
function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);

  let randomeNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomeNumber;
}


function App() {
  const [count, setCount] = useState(0);
  const [controle, setControle] = useState(false);
  const [finish, setFinish] = useState(false);
  // const [endGameString, setEndGameString] = useState("");
  const [timer, setTimer] = useState(0);
  const [deathWindow, setDeathWindow] = useState(false);
  // const [isStarted, setIsStarted] = useState<Boolean>(false);
  const [positionVertical, setPositionVertical] = useState(400);
  const [positionHorizontal, setPositionHorizontal] = useState(400);
  const [zombiePositionVertical, setZombiePositionVertical] = useState(1000);
  const [zombiePositionHorizontal, setZombiePositionHorizontal] =
    useState(1000);
  const [fruitPositionHorizontal, setFruitPositionHorizontal] = useState(700);
  const [fruitPositionVertical, setFruitPositionVertical] = useState(700);
  // const controleButtons = ["w", "a", "s", "d"];

 
  
 
  useEffect(() => {
    setInterval(() => {
      setTimer(() => timer + 1);
    }, 1000);

    if (count === endGame) {
      setFinish(true);
    }

    if (count <= death) {
      setDeathWindow(true);
    }

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
    if (finish) {
      clearInterval(interval);
      setCount(0);
      setPositionVertical(400);
      setPositionHorizontal(400);
      setZombiePositionVertical(0);
      setZombiePositionHorizontal(0);
      setFruitPositionHorizontal(0);
      setFruitPositionVertical(0);
      setTimer(0)
    }
    document.addEventListener("keydown", (e) => {
      if (controle) {
        if (e.key === "w") {
          setPositionVertical(positionVertical - 50);
        } else if (e.key === "a") {
          setPositionHorizontal(positionHorizontal - 50);
        } else if (e.key === "s") {
          setPositionVertical(positionVertical + 50);
        } else {
          setPositionHorizontal(positionHorizontal + 50);
        }
      }
    });
  }, [
    // zombiePositionHorizontal,
    // zombiePositionVertical,
    // positionHorizontal,
    // positionVertical,
    // controle,
    timer,
  ]);

  function endGameFinal() {
    if (finish) {
      return "Игра пройдена";
    } else {
      return "Вас съели";
    }
  }
  return (
    <>
      <div
        className="endGame"
        style={{ display: finish || deathWindow ? "flex" : "none" }}
      >
        {endGameFinal()}
      </div>

      <div>
        {death}/{count}/{endGame}
        Таймер: {timer}
      </div>
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
