import {useState} from "react"
import gamer from "../../gamer"

const StartGame=(props) =>
{
    const {i,index,setIndex,setAllPlayers,allPlayers,isAble,currentPlayers,setCurrentPlayers }=props;
 

    function allActivities(type){
        setCurrentPlayers(currentPlayers.map((player,t)=>{
            if(t==i)
            {
                player.steps++;
                player.number++;
            }
            return player;
               
        }));
        setIndex((i+1)%currentPlayers.length)
    }

    function addOne()
    {
        setCurrentPlayers(currentPlayers.map((player,t)=>{
            if(t==i)
            {
                player.steps++;
                player.number++;
            }
            return player;
               
        }));
        setIndex((i+1)%currentPlayers.length)
    }

    
    function reduceOne()
    {
        
    }

    function timesTwo()
    {
        setIndex((i+1)%currentPlayers.length)
    }

    function DivideByTwo()
    {
        setIndex((i+1)%currentPlayers.length)
    }
    
    
    return(
        <>
         <button key={i} disabled={index!=i} onClick={()=>allActivities()}>+1</button>
         <button key={i} disabled={index!=i} onClick={()=>allActivities()}>-1</button>
         <button key={i} disabled={index!=i} onClick={()=>allActivities()}>*2</button>
         <button key={i} disabled={index!=i} onClick={()=>allActivities()}>/2</button>
        </>
    )
}
export default StartGame