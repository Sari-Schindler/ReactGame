import { useState } from "react";
import Entrance from "../Components/Entrance/Entrance";
function Screen(){
    const [player, setPlayer] = useState([])
    return (
      <>
      <Entrance player={player} setPlayer={setPlayer}/>
      </>
    )
}

export default Screen