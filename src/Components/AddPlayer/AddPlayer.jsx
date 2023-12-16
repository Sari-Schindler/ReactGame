import { useState } from "react"
import gamer from "../../gamer"
import ShowActiveBoards from "../ShowActiveBoards/ShowActiveBoards.jsx"
import style from "../AddPlayer/AddPlayer.module.css"
import TopPlayers from "../TopPlayers/TopPlayers.jsx"

const AddPlayer=()=>{
    const arrGamers = JSON.parse(localStorage.getItem("allPlayers"));
    const [allPlayers, setAllPlayers] = useState(arrGamers ? arrGamers : [])
    const [isAddNew, setIsAddNew] = useState(false);
    const [start,setStart] = useState(false)
    const [index,setIndex]=useState(0)
    const [isAddPlayers, setIsAddPlayers]=useState(false);
    const [iStartGame, setIStartGame]=useState(false);
    const [min,setMin] = useState([' ',120])
    const [mid,setMid] = useState([' ',120])
    const [max,setMax] = useState([' ',120])
    const [currentPlayers,setCurrentPlayers] = useState([])
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
        let wantedGamer;
        
        setAllPlayers((allPlayers) => {
            isNewPlayer=true;
            const play = allPlayers.map((player) => {
                if (player.name === newName) {
                    wantedGamer=player;
                    isNewPlayer = false;
                }
          
                return player
            })

            let isCurrentPlayer=currentPlayers.find((current) => current.name == newName )
            if(!isCurrentPlayer){
                localStorage.setItem("allPlayers" ,JSON.stringify(isNewPlayer ? [...allPlayers, new gamer(newName,true)] : allPlayers));
                setCurrentPlayers(isNewPlayer ?[...currentPlayers,new gamer(newName,true)] : [...currentPlayers,wantedGamer])
            }

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
            {isAddNew ? currentPlayers.map((element,i) => (
             <ShowActiveBoards setAllPlayers={setAllPlayers} key={i} i={i} index={index} setIndex={setIndex} start={start} currentPlayer={element} currentPlayers={currentPlayers} setCurrentPlayers={setCurrentPlayers} allPlayers={allPlayers}/> 
             )) : null}
             
             {iStartGame &&<TopPlayers min={min} setMin={setMin} mid={mid} setMid={setMid} max={max} setMax={setMax} allPlayers={allPlayers} isShow/>}

        </div>

        {!iStartGame && <button className={style.startGameBtn} onClick={()=>startGame()}>start game</button>}
        </>
    )
}


export default AddPlayer
