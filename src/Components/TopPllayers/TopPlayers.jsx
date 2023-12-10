import {useState} from "react"


const TopPlayers=(props) =>
{
     const{allPlayers} = props;
     let max=[" ",120];
     let min=[" ",120];
     let mid=[" ",120];
     const [topPlayers,setTopPlayers]=useState([max,mid,min]);
     const [isShow, setIsShow] =useState(false)

     function setTop()
     {
           (allPlayers.map((player) =>{
            if(player.topScore<min[1]){
                mid[0]=min[0]
                mid[1]=min[1]
                min[0]=` ${player.name}: `
                min[1]=player.topScore
            }
            else if(player.topScore<mid[1]){
                max[0]=mid[0]
                max[1]=mid[1]
                mid[0]=` ${player.name}: `
                mid[1]=player.topScore
            }
            else if(player.topScore<max[1]){
                max[0]=` ${player.name}: `
                max[1]=player.topScore
            }
        }))
        setTopPlayers([max,mid,min])
        setIsShow(true)
     }

     return(
        <>
          <button onClick={()=>setTop()}>show the top player</button>
           
           {/* {isShow && <div>Top players:</div>} */}
           {isShow && <div>first:{topPlayers[2]}</div>}
           {isShow &&<div>second:{topPlayers[1]}</div>}
           {isShow &&<div>third:{topPlayers[0]}</div>}
        </>
     )
}

export default TopPlayers

