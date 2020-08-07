import React from "react";
import Game from "./components/game/Game";
import logo from "./logo.svg";
import "./App.css";
import image1 from "./assets/images/raccoon.png";
import image2 from "./assets/images/squirrel.png";
import image3 from "./assets/images/bunny.png";
import image4 from "./assets/images/hound.png";

function App(props) {
  const raccoons = {
    name: "Russiaville Raccoons",
    logoSrc: image1,
  };

  const squirrels = {
    name: "Sheridan Squirrels",
    logoSrc: image2,
  };

  const bunnies = {
    name: "Burlington Bunnies",
    logoSrc: image3,
  };

  const hounds = {
    name: "Hammond Hounds",
    logoSrc: image4,
  };

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game venue="Sheridan Arena" homeTeam={bunnies} visitingTeam={hounds} />
    </div>
  );
}

export default App;
