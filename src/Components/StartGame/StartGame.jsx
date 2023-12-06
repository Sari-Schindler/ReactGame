import {useState} from "react"
import gamer from "../../gamer"

const StartGame=(props) =>
{
    const{setAllPlayers,allPlayers }=props;
    const[currentPlayers,setCurrentPlayers]=useState([]);

    function activePlayers()
    {
      const activeArray = allPlayers.map((player)=>
      {if(player.isActive==true)
       return player});
       setCurrentPlayers([...currentPlayers,activeArray]);

    }


    function addOne()
    {

    }

    
    function reduceOne()
    {
    
    }

    function timesTwo()
    {

    }

    function DivideByTwo()
    {

    }

    return(
        <>
        {()=>activePlayers()}
         <button onClick={()=>addOne()}>+1</button>
         <button onClick={()=>reduceOne()}>-1</button>
         <button onClick={()=>timesTwo()}>*2</button>
         <button onClick={()=>DivideByTwo()}>/2</button>
        </>
    )
}
export default StartGame