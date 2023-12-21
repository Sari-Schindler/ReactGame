import { useEffect } from "react"
import { useState } from "react"
import style from '../TopPlayers/TopPlayers.module.css'

const TopPlayers = (props) => {
    const [tops,setTops] =useState([])
    const {allPlayers,isShow} = props;
    function setTop() {
        allPlayers.sort((a,b)=>a.AverageSteps-b.AverageSteps);
        setTops(allPlayers.slice(0, allPlayers.length > 3 ? 3 : allPlayers.length));
    }

    useEffect(() => {
        isShow && setTop()
    }, [allPlayers])

    return (
        <>
            <div className={style.TopDiv}>
                <p className={style.TopPlayersHeader}>Top Players               -</p>
                <div className={style.topPlayersP}>
                {tops.map((player, key) =>
                player.AverageSteps != 1000?
                    (<div key={key}>
                        <span>  name: {player.name} </span>
                        <span> average: {player.AverageSteps}, </span>
                    </div>):
                (<></>)
                )}
                </div>
            </div>
        </>
    )
}

export default TopPlayers

