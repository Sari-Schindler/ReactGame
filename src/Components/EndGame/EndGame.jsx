import style from './EndGame.module.css'
import React, { useState } from 'react';
const EndGame=(props)=>{
    const {i,setAllPlayers,currentPlayers,setCurrentPlayers }=props;
    const ExitPlayer=currentPlayers[i];
    const updatePlayers=JSON.parse(localStorage.getItem("allPlayers"));

    function exit()
    {
        let allSteps=0;
        let numOfGames=0;
        updatePlayers.map((element)=>{
            if(element.name==ExitPlayer.name){
                element.allScores.push(ExitPlayer.steps)
                element.allScores.map((e)=> {allSteps+=e; numOfGames++});
                element.AverageSteps=Math.floor(allSteps / numOfGames);
            }
            return element;
        })
        localStorage.setItem("allPlayers" ,JSON.stringify(updatePlayers));
        setCurrentPlayers(currentPlayers.filter((element) => element.name != ExitPlayer.name) )
        setAllPlayers(updatePlayers)
        if(currentPlayers.length == 1)
            (alert("you finish the game"));
    }

    function continuePlaying(){
        let allScoresTemp=[];
        let allSteps=0;
        let numOfGames=0;
        updatePlayers.map((player)=>{
            if(player.name==ExitPlayer.name){
                player.allScores.push(ExitPlayer.steps)
                allScoresTemp.push(` ${player.allScores} `)
                player.allScores.map((e)=> {allSteps+=e; numOfGames++});
                player.AverageSteps=Math.floor(allSteps / numOfGames);
            }   })
        localStorage.setItem("allPlayers" ,JSON.stringify(updatePlayers));
        setAllPlayers(updatePlayers);
        setCurrentPlayers(currentPlayers.map((player)=>{
            if(player.name==ExitPlayer.name){
                player.steps=0;
                player.number=Math.floor(Math.random() * 100);
                player.allScores=allScoresTemp;
            }
            return player;
        }))
    }
    
    return(
        <>
        <div>
            <p className={style.winerP}>You finish the game!!</p>
            <button onClick={()=>exit()} className={style.exitBtn}>Exit</button>
            <button onClick={()=>continuePlaying()}  className={style.ContinueBtn}>continue playing</button>
        </div>
        </>
    )
}

export default EndGame