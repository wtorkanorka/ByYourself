import { useState } from "react";

import "./App.css";

// interface Mole {
//   key: number;
//   elem: Element;
// }

function App() {
  const [count, setCount] = useState(0);
  const [buttons, setButtons] = useState<any>([]);
  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function startGame(id: any) {
    id.target.disabled = true;
    for (let i = 0; i < 6; i++) {
      buttons.push(
        <button
          key={i}
          style={{ width: "50px", height: "50px" }}
          onClick={() => setCount((count) => count + 1)}
        ></button>
      );
    }

    setInterval(() => {
      buttons.map((button: any) => {
        if (getRandomInt(0, 5) === button.key) {
          button.classList.add = "green";
        }
      });
    }, 1000);
    console.log(buttons);
  }

  //изменение цвета
  function toggleRainbow(act: any) {
    let color = 0;
    setInterval(function () {
      color = color + (1 % 360);
      document.querySelectorAll("button").forEach((element: any) => {
        element.style.borderColor = "hsl(" + color + ", 100%, 50%)"; // hsl(0, 100%, 50%)
      });
    }, 50);
    act.target.disabled = true;
  }




  return (
    <>
      <button
        id="startGame"
        onClick={startGame}
        style={{
          display: "block",
          padding: "5px 5px",
          color: "black",
        }}
      >
        Start Game
      </button>
      <div>
        <button onClick={toggleRainbow} id="act">
          Активировать подсветку
        </button>
      </div>
      <div>{count}</div>
      <ul>{buttons}</ul>
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
