import { useState } from "react";
import AddPlayer from '../Components/AddPlayer/AddPlayer.jsx'
import ShowActiveBoards from '../Components/ShowActiveBoards/ShowActiveBoards.jsx'


function Screen(){

    const [add, setAdd] = useState("false") 
    const [allPlayers, setAllPlayers] = useState([])
    const [currentPlayer, setCurrentPlayer] = useState([])
    return (
      <>
      <AddPlayer allPlayers={allPlayers} setAllPlayers={setAllPlayers} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} 
        add={add} setAdd={setAdd}
      />
      
      </>
    )
}

export default Screen