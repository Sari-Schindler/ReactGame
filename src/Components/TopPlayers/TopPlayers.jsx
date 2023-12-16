import { useEffect } from "react"
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
                _min = [` ${player.name}: `, player.AverageSteps]
                // setMid(min)
                // setMin([` ${player.name}: `,player.topScore])
            }
            else if (player.AverageSteps < _mid[1]) {
                _max = _mid;
                _mid = [` ${player.name}: `, player.AverageSteps]
                // setMax(mid)
                // setMid([` ${player.name}: `,player.topScore])
            }
            else if (player.AverageSteps < _max[1]) {
                _max = [` ${player.name}: `, player.AverageSteps]
                // setMax([` ${player.name}: `,player.topScore])
            }
        }))
        setMin(_min)
        setMid(_mid)
        setMax(_max)
    }

    useEffect(() => {
        isShow && setTop()
    }, [isShow])


    return (
        <>
            {/* <button className={style.showTopPlayers} onClick={()=>setTop()}>show the top player</button> */}
            <div className={style.TopDiv}>
                <p className={style.TopPlayersHeader}>Top Players               -</p>
                <div className={style.topPlayersP}>
                    {isShow && <div className={style.first}>first:{min},&nbsp;</div>}
                    {isShow && <div className={style.second}>second:{mid},&nbsp;</div>}
                    {isShow && <div className={style.third}>third:{max}</div>}
                </div>
            </div>
        </>
    )
}

export default TopPlayers

