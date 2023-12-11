import { useEffect } from "react"
import style from '../TopPlayers/TopPlayers.module.css'

const TopPlayers = (props) => {
    const { allPlayers } = props;
    const { min, setMin, mid, setMid, max, setMax, isShow } = props;

    function setTop() {
        let _min = min, _mid = mid, _max = max;

        (allPlayers.map((player) => {
            if (player.topScore < _min[1]) {
                _max = _mid;
                _mid = _min;
                _min = [` ${player.name}: `, player.topScore]
                // setMid(min)
                // setMin([` ${player.name}: `,player.topScore])
            }
            else if (player.topScore < _mid[1]) {
                _max = _mid;
                _mid = [` ${player.name}: `, player.topScore]
                // setMax(mid)
                // setMid([` ${player.name}: `,player.topScore])
            }
            else if (player.topScore < _max[1]) {
                _max = [` ${player.name}: `, player.topScore]
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
            <div className={style.topPlayersP}>
                {isShow && <div>first:{min},&nbsp;</div>}
                {isShow && <div>second:{mid},&nbsp;</div>}
                {isShow && <div>third:{max}</div>}
            </div>
        </>
    )
}

export default TopPlayers

