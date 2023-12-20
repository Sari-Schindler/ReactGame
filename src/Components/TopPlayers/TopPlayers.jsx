import { useEffect } from "react"
import style from '../TopPlayers/TopPlayers.module.css'

const TopPlayers = (props) => {
    const {allPlayers, setTops, isShow} = props;
    function setTop() {
        allPlayers.sort((a,b)=>a.AverageSteps-b.AverageSteps);
        console.log(allPlayers);
        const tops = allPlayers.slice(0, allPlayers.length > 3 ? 3 : allPlayers.length);
        setTops(tops);
    }

    useEffect(() => {
        isShow && setTop()
    }, [allPlayers])


    return (
        <>
            <div className={style.TopDiv}>
                <p className={style.TopPlayersHeader}>Top Players               -</p>
                <div className={style.topPlayersP}>
                {props.tops.map((player, key) =>
                player.AverageSteps != 1000?
                    (<div key={key}>
                        <span>name: {player.name} </span>
                        <span>average: {player.AverageSteps} </span>
                    </div>):
                (<></>)
                )}
                </div>
            </div>
        </>
    )
}

export default TopPlayers

