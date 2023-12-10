import { useState } from "react";
import AddPlayer from '../Components/AddPlayer/AddPlayer.jsx'
import ShowActiveBoards from '../Components/ShowActiveBoards/ShowActiveBoards.jsx'
import style from '../Screen/Screen.module.css'


function Screen() {
  const [currentPlayers,setCurrentPlayers] = useState([])
  
  return (
    <>
    <div >
      <AddPlayer currentPlayers={currentPlayers} setCurrentPlayers={setCurrentPlayers}/>
      </div>
    </>
    
  )
}

export default Screen

