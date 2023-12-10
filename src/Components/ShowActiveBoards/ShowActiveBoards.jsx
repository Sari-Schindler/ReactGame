import { useState } from "react";
import style from '../ShowActiveBoards/ShowActiveBoards.module.css'
import StartGame from '../StartGame/StartGame'
import TopPlayers from "../TopPllayers/TopPlayers";

const ShowActiveBoards=(props)=>{
  const{index,setIndex ,allPlayers,setAllPlayers,currentPlayer,currentPlayers,setCurrentPlayers,start,i} = props;
        
  
        return(
            <>
            <div className={style.GamerBoard}>
                    <div>name: {currentPlayer.name}</div>
                    <div>is able:{i==index ? "true":"false"}</div>
                    <div>steps: {currentPlayer.steps}</div>
                    <div>number: {currentPlayer.number}</div>
                    <div>score: {currentPlayer.allScores}</div>
                <div>
                {start && <StartGame
                          setAllPlayers={setAllPlayers}
                          allPlayers={allPlayers}
                          currentPlayers={currentPlayers}
                          setCurrentPlayers={setCurrentPlayers}
                          index={index} setIndex={setIndex}
                          i={i}/> 
                          } 
                {/* {start&& <TopPlayers allPlayers={allPlayers} /> } */}
                </div>
            </div>
            </>
        )
}

export default ShowActiveBoards