import { useState } from "react";
import GamePlay from "./components/GamePlay";
import Startgame from "./components/Startgame";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(true);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  }

  return (
    <>
      {isGameStarted ? <GamePlay /> : <Startgame toggle={toggleGamePlay}/>}
    </>
  )
}

export default App
