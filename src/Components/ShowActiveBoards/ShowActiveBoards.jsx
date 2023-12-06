import { useState } from "react";
import style from '../ShowActiveBoards/ShowActiveBoards.module.css'
import StartGame from '../StartGame/StartGame'

const ShowActiveBoards=(props)=>{
  const[currentPlayers,setCurrentPlayers]=useState([]);
  const{allPlayers,setAllPlayers,currentPlayer} = props;
  
        return(
            <>
                <div className={style.w}>
                    <div>name: {currentPlayer.name}</div>
                    <div>is able: {currentPlayer.isAble? true: false}</div>
                    <div>score: {currentPlayer.score}</div>
                    <div>steps: {currentPlayer.steps}</div>
                    <div>number: {currentPlayer.number}</div>
                    <div>score: {currentPlayer.score}</div>
                </div>
                {props.start && <StartGame
                          setAllPlayers={setAllPlayers}
                          allPlayers={allPlayers}/>}
            </>
        )
}

export default ShowActiveBoards