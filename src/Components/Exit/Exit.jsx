import { useState } from "react";

const Exit=(props)=>{
    const {i,setAllPlayers,allPlayers,currentPlayers,setCurrentPlayers,setNext }=props;
    const ExitPlayer=currentPlayers[i];
    const updatePlayers=JSON.parse(localStorage.getItem("allPlayers"));
    // const [, updateState] = useState();
    // const forceUpdate = React.useCallback(() => updateState({}), []);

    function update()
    {
        // setCurrentPlayers(currentPlayers.filter((player)=>{
        //     if(player.name!=ExitPlayer.name){
        //         return player;
        //     }
        // }))
        setCurrentPlayers(currentPlayers.filter((element)=>{
            if(element.name!=ExitPlayer.name)
                return element
            else
                (currentPlayers.slice(i,-1))
        })
        )
    }

    function exit()
    {
        updatePlayers.map((element)=>{
            if(element.name==ExitPlayer.name){
                element.allScores.push(ExitPlayer.steps)
                if(element.topScore>ExitPlayer.steps)
                    element.topScore=ExitPlayer.steps;
            }
            return element;
        })
        update()
        localStorage.setItem("allPlayers" ,JSON.stringify(updatePlayers));
        // forceUpdate()
        setNext(false);
        if(currentPlayers.length == 1)
            (alert("you finish the game"));
    }


    function continuePlaying(){
        let allScoresTemp=[];
        updatePlayers.map((g)=>{
            if(g.name==ExitPlayer.name){
                g.allScores.push(ExitPlayer.steps)
                allScoresTemp.push(`${g.allScores} `)
                if(ExitPlayer.steps<g.topScore)
                    g.topScore=ExitPlayer.steps;
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
        setNext(false);
 
    }
    return(
        <>
        <div>
            <button onClick={()=>exit()}>Exit</button>
            <button onClick={()=>continuePlaying()}>continue playing</button>
        </div>
        </>
    )
}

export default Exit

// currentPlayers.map((g)=>{
//     return ((g.name==ExitPlayer.name)?<div></div>:g)})

