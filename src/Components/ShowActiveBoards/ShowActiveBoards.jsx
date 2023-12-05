import { useState } from "react";
import style from '../ShowActiveBoards/ShowActiveBoards.module.css'
const ShowActiveBoards=(props)=>{
    const [currentPlayers, setCurrentPlayers] = useState([])
    setCurrentPlayers(props.allPlayers).map(e=>
        {
            e.isActive==true;
        });

   

    return(
        <>
        <div></div>
        <div >{
               currentPlayers.map(gamer=>
                {
                    gamer.isActive?
                        <div className={style.w}>
                            <div>name: {gamer.name}</div>
                            <div>is able: {gamer.isAble? true: false}</div>
                            <div>score: {gamer.score}</div>
                            <div>steps: {gamer.steps}</div>
                            <div>number: {gamer.number}</div>
                            <div>score: {gamer.score}</div>
                        </div>:<></>
                
            })
        }
        </div>
        </>
    )
}

export default ShowActiveBoards