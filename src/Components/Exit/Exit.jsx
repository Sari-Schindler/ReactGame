import { useState } from "react";
import style from '../Exit/Exit.module.css'

const Exit=(props)=>{
    const {i,setAllPlayers,allPlayers,currentPlayers,setCurrentPlayers,setNext }=props;
    const ExitPlayer=currentPlayers[i];
    const updatePlayers=JSON.parse(localStorage.getItem("allPlayers"));

    function update()
    {
        setCurrentPlayers(currentPlayers.filter(element => element.name != ExitPlayer.name))
    }

    function exit()
    {
        let allSteps=0;
        let numOfGames=0;
        updatePlayers.map((element)=>{
            if(element.name==ExitPlayer.name){
                element.allScores.push(ExitPlayer.steps)
                // if(element.topScore>ExitPlayer.steps)
                //     element.topScore=ExitPlayer.steps;
                element.allScores.map((e)=> {allSteps+=e; numOfGames++});
                element.AverageSteps=(allSteps / numOfGames);
            }
            return element;
        })
        update()
        localStorage.setItem("allPlayers" ,JSON.stringify(updatePlayers));
        setAllPlayers(updatePlayers)
        if(currentPlayers.length == 1)
            (alert("you finish the game"));
    }


    function continuePlaying(){
        let allScoresTemp=[];
        let allSteps=0;
        let numOfGames=0;
        updatePlayers.map((g)=>{
            if(g.name==ExitPlayer.name){
                g.allScores.push(ExitPlayer.steps)
                allScoresTemp.push(`${g.allScores} `)
                // if(ExitPlayer.steps<g.topScore)
                //     g.topScore=ExitPlayer.steps;
                g.allScores.map((e)=> {allSteps+=e; numOfGames++});
                g.AverageSteps=(allSteps / numOfGames);
                
            }   })
        localStorage.setItem("allPlayers" ,JSON.stringify(updatePlayers));
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

export default Exit