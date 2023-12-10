import { useState } from "react";
import style from '../ShowActiveBoards/ShowActiveBoards.module.css'
import StartGame from '../StartGame/StartGame'
import TopPlayers from "../TopPlayers/TopPlayers";

const ShowActiveBoards=(props)=>{
  const{index,setIndex ,allPlayers,setAllPlayers,currentPlayer,currentPlayers,setCurrentPlayers,start,i} = props;
        
  
        return(
            <>
            <div className={style.GamerBoard}>
                    <div>name: {currentPlayer.name}</div>
                    <div className={style.isAble}>is able:<div className={i==index? style.able: style.disable}>{i==index ? "true":"false"}</div></div>
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