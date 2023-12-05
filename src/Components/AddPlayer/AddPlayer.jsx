import { useState } from "react"
import gamer from "../../gamer"
import ShowActiveBoards from "../ShowActiveBoards/ShowActiveBoards.jsx"
import style from "../AddPlayer/AddPlayer.module.css"

const AddPlayer=(props)=>{
    
    // const allPlayers=(JSON.parse(localStorage.getItem('allPlayers'))|| []);

    const arrGamers = JSON.parse(localStorage.getItem("allPlayers"));
    const [allPlayers, setAllPlayers] = useState(arrGamers ? arrGamers : [])
    const [isAddNew, setIsAddNew] = useState(false);
    const [currentPlayer, setCurrentPlayer]=useState(new gamer)
   

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
        <button onClick={()=>addPlayer()}>add player</button>
        {/* {isAddNew && <ShowActiveBoards isAddNew={isAddNew} setIsAddNew={setIsAddNew} allPlayers={allPlayers} setAllPlayers={setAllPlayers} />} */}
        <div className={style.allBoards}>{isAddNew && allPlayers.map(element => element.isActive? <ShowActiveBoards currentPlayer={element} /> :<></> )}
        </div>
        </>
    )
}


export default AddPlayer
// currentPlayers={currentPlayers} setCurrentPlayers={setCurrentPlayers} 