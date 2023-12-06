import { useState } from "react";
import AddPlayer from '../Components/AddPlayer/AddPlayer.jsx'
import ShowActiveBoards from '../Components/ShowActiveBoards/ShowActiveBoards.jsx'


function Screen() {
  const [currentPlayers,setCurrentPlayers] = useState([])

  return (
    <>
      <AddPlayer currentPlayers={currentPlayers} setCurrentPlayers={setCurrentPlayers}/>
    </>
  )
}

export default Screen

// isAddNew={isAddNew} setIsAddNew={setIsAddNew} allPlayers={allPlayers} setAllPlayers={setAllPlayers}