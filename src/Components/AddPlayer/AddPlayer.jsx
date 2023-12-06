import { useState } from "react"
import gamer from "../../gamer"
import ShowActiveBoards from "../ShowActiveBoards/ShowActiveBoards.jsx"
import style from "../AddPlayer/AddPlayer.module.css"
import StartGame from '../StartGame/StartGame'

const AddPlayer=(props)=>{
    // const allPlayers=(JSON.parse(localStorage.getItem('allPlayers'))|| []);
    const arrGamers = JSON.parse(localStorage.getItem("allPlayers"));
    const [allPlayers, setAllPlayers] = useState(arrGamers ? arrGamers : [])
    const [isAddNew, setIsAddNew] = useState(false);
    // const [currentPlayer, setCurrentPlayer]=useState(new gamer)
    const [start,setStart] = useState(false)
    // window.onload =function()
    // {
    //    allPlayers.array.forEach(player => {
    //     player.isActive=false;
    //    });
    // }

    function myFunction() {
        alert("Page is loaded");
      }

    function startGame()
    {
        if(isAddNew)
          setStart(true);
        else
        alert("First enter a username");
    }
    const addPlayer = () => {
        let newName = prompt("Please enter your name:");
        if (!newName) {
            alert( "please enter valid name");
            newName = prompt("Please enter your name:");
            return;
        }
        let isNewPlayer = true;
        setAllPlayers((allPlayers) => {
            const play = allPlayers.map((player) => {
                if (player.name === newName) {
                    player.isActive = true;
                    isNewPlayer = false;
                }
                return player
            })
            localStorage.setItem("allPlayers" ,JSON.stringify(isNewPlayer ? [...allPlayers, new gamer(newName,true)] : play));
            setIsAddNew(true);
            return isNewPlayer ? [...allPlayers, new gamer(newName,true)] : play;
        })
    }
    return(
        <>
        0545482174

       { onload=myFunction()}
        <button onClick={()=>addPlayer()}>add player</button>
        {/* {isAddNew && <ShowActiveBoards isAddNew={isAddNew} setIsAddNew={setIsAddNew} allPlayers={allPlayers} setAllPlayers={setAllPlayers} />} */}
        <div className={style.allBoards}>{isAddNew && allPlayers.map(element => element.isActive? <ShowActiveBoards currentPlayer={element} /> :<></> )}
        <button onClick={()=>startGame()}>start game</button>
        {start && <StartGame
        setAllPlayers={setAllPlayers}
        allPlayers={allPlayers}/>}
        </div>
        </>
    )
}


export default AddPlayer
// currentPlayers={currentPlayers} setCurrentPlayers={setCurrentPlayers} 