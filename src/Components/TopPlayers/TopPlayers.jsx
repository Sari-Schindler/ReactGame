import React, { useEffect } from "react"
import style from '../TopPlayers/TopPlayers.module.css'

const TopPlayers = (props) => {
    const { allPlayers } = props;
    const { min, setMin, mid, setMid, max, setMax, isShow } = props;

    function setTop() {
        let _min = min, _mid = mid, _max = max;

        (allPlayers.map((player) => {
            if (player.AverageSteps < _min[1]) {
                _max = _mid;
                _mid = _min;
                _min =  [` ${player.name}: `, player.AverageSteps]
            }
            else if (player.AverageSteps < _mid[1]) {
                _max = _mid;
                _mid = [` ${player.name}: `, player.AverageSteps]
            }
            else if (player.AverageSteps < _max[1]) {
                _max = [` ${player.name}: `, player.AverageSteps]
            }
        }))
        setMin(_min)
        setMid(_mid)
        setMax(_max)
    }

    useEffect(() => {
        isShow && setTop()
    }, [allPlayers])


    return (
        <>
            <div className={style.TopDiv}>
                <p className={style.TopPlayersHeader}>Top Players               -</p>
                <div className={style.topPlayersP}>
                    {isShow && <div className={style.first}> first: {min[1]!=120? min: ' no '}</div>}
                    {isShow && <div className={style.second}> second: {mid[1]!=120? mid :  ' no'}</div>}
                    {isShow &&  <div className={style.third}> third: {max[1]!=120? max : ' no '}</div>}
                </div>
            </div>
        </>
    )
}

export default TopPlayers

