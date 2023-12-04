import { useState } from "react";
import AddPlayer from '../Components/AddPlayer/AddPlayer.jsx'
function Screen(){

    const [allPlayers, setAllPlayers] = useState([])
    const [currentPlayer, setCurrentPlayer] = useState([])
    setCurrentPlayer()
    return (
      <>
      <AddPlayer allPlayers={allPlayers} setAllPlayers={setAllPlayers} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer}/>
      </>
    )
}

export default Screen