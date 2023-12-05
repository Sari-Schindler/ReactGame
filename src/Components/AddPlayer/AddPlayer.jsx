import { useState } from "react"
import gamer from "../../gamer"
import ShowActiveBoards from "../ShowActiveBoards/ShowActiveBoards.jsx"

const AddPlayer=(props)=>{
    
    // const allPlayers=(JSON.parse(localStorage.getItem('allPlayers'))|| []);

    const arrGamers = JSON.parse(localStorage.getItem("allPlayers"));
    const [allPlayers, setAllPlayers] = useState(arrGamers ? arrGamers : [])
    const [isAddNew, setIsAddNew] = useState(false);
   

    const addPlayer = () => {
        let newName = prompt("Please enter your name:");
        if (newName == null || newName == "") {
            alert( "please enter valid name");
            newName = prompt("Please enter your name:");
        }
        let is_new_player = true;
        setAllPlayers((allPlayers) => {
            const play = allPlayers.map((player) => {
                if (player.name === newName) {
                    player.isActive = true;
                    is_new_player = false;
                }
                return player
            })
            localStorage.setItem("allPlayers" ,JSON.stringify(is_new_player ? [...allPlayers, new gamer(newName,true)] : play));
            setIsAddNew(true);
            return is_new_player ? [...allPlayers, new gamer(newName,true)] : play;
        })
    }



    return(
        <>
        <button onClick={()=>addPlayer()}>add player</button>
        {isAddNew && <ShowActiveBoards isAddNew={isAddNew} setIsAddNew={setIsAddNew} allPlayers={allPlayers} setAllPlayers={setAllPlayers} />}
        </>
    )
}


export default AddPlayer
// currentPlayers={currentPlayers} setCurrentPlayers={setCurrentPlayers} 