import {useState} from "react"
import gamer from "../../gamer"
import TopPlayers from '../TopPllayers/TopPlayers.jsx'
import Exit from '../Exit/Exit.jsx'

const StartGame=(props) =>
{
    const {i,index,setIndex,setAllPlayers,allPlayers,isAble,currentPlayers,setCurrentPlayers }=props;
    const [next,setNext]=useState(false);
    function allActivities(operator){
        setCurrentPlayers(currentPlayers.map((player,t)=>{
            if(t==i && player.number!=100)
            {
                switch(operator){
                    case '+1':
                        player.number++;
                        break;
                    case '-1':
                        player.number--;
                        break;
                    case '*2':
                        player.number*=2;
                        break;
                    case '/2':
                        player.number=Math.floor(player.number/2);
                        break;
                }
                player.steps++;
                player.isAble=false;
                if(player.number ==100)
                   setNext(true);
            }
            return player;
               
        }));
        setIndex((i+1)%currentPlayers.length)
    }
    
    
    return(
        <>
         <button key={i} disabled={index!=i} onClick={()=>allActivities("+1")}>+1</button>
         <button key={i} disabled={index!=i} onClick={()=>allActivities("-1")}>-1</button>
         <button key={i} disabled={index!=i} onClick={()=>allActivities("*2")}>*2</button>
         <button key={i} disabled={index!=i} onClick={()=>allActivities("/2")}>/2</button>
         {next && <Exit setAllPlayers={setAllPlayers}
                          allPlayers={allPlayers}
                          currentPlayers={currentPlayers}
                          setCurrentPlayers={setCurrentPlayers}
                          i={i}/>}
        </>

    )
}
export default StartGame