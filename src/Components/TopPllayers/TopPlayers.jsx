import {useState} from "react"


const TopPlayers=(props) =>
{
     const{allPlayers} = props;
     let max=["",0];
     let min=["",0];
     let mid=["",0];
     const [topPlayers,setTopPlayers]=useState([max,mid,min]);


     function setTop()
     {
           (allPlayers.map((player) =>{
            if(player.topScore<min){
                min=[`${player.name}: `,player.topScore]
            }
            else if(player.topScore<mid){
                mid=[`${player.name}: `,player.topScore]
            }
            else if(player.topScore<max){
                max=[`${player.name}: `,player.topScore]
            }
        }))
        setTopPlayers([max,mid,min])
     }

     return(
        <>
            {setTop()}
           
            <div>Top players:</div>
            <div>first:{topPlayers[2]}</div>
            <div>second:{topPlayers[1]}</div>
            <div>third:{topPlayers[0]}</div>
        </>
     )
}

export default TopPlayers