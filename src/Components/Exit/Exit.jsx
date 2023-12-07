import { useState } from "react";

const Exit=(props)=>{
    const {i,setAllPlayers,allPlayers,currentPlayers,setCurrentPlayers }=props;
    const ExitPlayer=currentPlayers[i];
    const updatePlayers=JSON.parse(localStorage.getItem("allPlayers"));
    const updateCurrent=currentPlayers;

    function update()
    {
        for(let t=i;t<currentPlayers.length-1;t++)
        {
            updateCurrent[t]=currentPlayers[t+1];
        }
    }

    function exit()
    {
        updatePlayers.map((element)=>{
            if(element.name==ExitPlayer.name){
                element.allScores.push(ExitPlayer.steps)
                if(element.topScore>ExitPlayer.steps)
                    element.topScore=ExitPlayer.topScore;
            }
            return element;
        })
        update()
        setCurrentPlayers(updateCurrent);
        localStorage.setItem("allPlayers" ,JSON.stringify(updatePlayers));
        return (<p>hjgkuf</p>)
    }

    return(
        <>
        <div>
            <button onClick={()=>exit()}>Exit</button>
        </div>
        </>
    )
}

export default Exit

// currentPlayers.map((g)=>{
//     return ((g.name==ExitPlayer.name)?<div></div>:g)})

