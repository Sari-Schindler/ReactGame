import {useState} from "react"
import style from '../TopPlayers/TopPlayers.module.css'

const TopPlayers=(props) =>
{
     const{allPlayers} = props;
     const [min,setMin] = useState([' ',120])
     const [mid,setMid] = useState([" ",120])
     const [max,setMax] = useState([' ',120])
     const {isShow}=props;

     function setTop()
     {
           (allPlayers.map((player) =>{
            if(player.topScore<min[1]){
                setMid(min)
                setMin([` ${player.name}: `,player.topScore])
            }
            else if(player.topScore<mid[1]){
                setMax(mid)
                setMid([` ${player.name}: `,player.topScore])
            }
            else if(player.topScore<max[1]){
                setMax([` ${player.name}: `,player.topScore])
            }
        }))
     }

     return(
        <>
          {/* <button className={style.showTopPlayers} onClick={()=>setTop()}>show the top player</button> */}
           {
            isShow && setTop()
           }
           <div className={style.topPlayersP}>
           {isShow && <div>first:{min}</div>}
           {isShow &&<div>second:{mid}</div>}
           {isShow &&<div>third:{max}</div>}
           </div>
        </>
     )
}

export default TopPlayers

