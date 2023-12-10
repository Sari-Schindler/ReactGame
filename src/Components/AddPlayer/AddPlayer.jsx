import { useState } from "react"
import gamer from "../../gamer"
import ShowActiveBoards from "../ShowActiveBoards/ShowActiveBoards.jsx"
import style from "../AddPlayer/AddPlayer.module.css"
import TopPlayers from "../TopPlayers/TopPlayers.jsx"

const AddPlayer=(props)=>{
    const arrGamers = JSON.parse(localStorage.getItem("allPlayers"));
    const [allPlayers, setAllPlayers] = useState(arrGamers ? arrGamers : [])
    const [isAddNew, setIsAddNew] = useState(false);
    const [start,setStart] = useState(false)
    const [index,setIndex]=useState(0)
    const [isAddPlayers, setIsAddPlayers]=useState(false);
    const [iStartGame, setIStartGame]=useState(false);
    const {currentPlayers,setCurrentPlayers}=props;



    let isShow=false;

    function startGame()
    {
        if(isAddNew){
          setStart(true);
          setIStartGame(true);
          setIsAddPlayers(true);
          isShow=true;
        }
        else
        alert("First enter a username");
    } 
   
    const addPlayer = () => {
        let newName = prompt("Please enter your name:");
        if (!newName) {
            alert( "Please enter valid name");
            newName = prompt("Please enter your name:");
            return;
        }
        let isNewPlayer = true;
        
        setAllPlayers((allPlayers) => {
            isNewPlayer=true;
            const play = allPlayers.map((player) => {
                if (player.name === newName) {
                    player.isActive = true;
                    isNewPlayer = false;
                }
                let isCurrentPlayer=currentPlayers.find((current) => current.name == newName )
                if(!isCurrentPlayer){
                    localStorage.setItem("allPlayers" ,JSON.stringify(isNewPlayer ? [...allPlayers, new gamer(newName,true)] : player));
                    setCurrentPlayers(isNewPlayer ?[...currentPlayers,new gamer(newName,true)] : [...currentPlayers,player])
                }
                return player
            })
            if(allPlayers.length==0){
                setCurrentPlayers(isNewPlayer ?[...currentPlayers,new gamer(newName,true)] : [...currentPlayers,player])
                localStorage.setItem("allPlayers" ,JSON.stringify(isNewPlayer ? [...allPlayers, new gamer(newName,true)] : player));
            }
            setIsAddNew(true);
            return isNewPlayer ? [...allPlayers, new gamer(newName,true)] : play;
        })
    }
    return(
        <>
        {!(isAddPlayers)&&<button className={style.addPlayerBtn} onClick={()=>addPlayer()}>add player</button>}
        <div className={style.allBoards}>
            {isAddNew && currentPlayers.map((element,i) => 
             <ShowActiveBoards key={i} i={i} index={index} setIndex={setIndex} start={start} currentPlayer={element} currentPlayers={currentPlayers} setCurrentPlayers={setCurrentPlayers} allPlayers={allPlayers}/> )}
        </div>
        {iStartGame && <TopPlayers allPlayers={allPlayers} isShow/>}        

        {!iStartGame && <button className={style.startGameBtn} onClick={()=>startGame()}>start game</button>}
        </>
    )
}


export default AddPlayer
