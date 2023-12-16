import EndGame from '../EndGame/EndGame.jsx'
import style from '../StartGame/startGame.module.css'

const StartGame=(props) =>
{
    const {i,index,setIndex,setAllPlayers,allPlayers,currentPlayers,setCurrentPlayers}=props;
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
            }
            return player;
               
        }));
        setIndex((i+1)%currentPlayers.length)
    }
    
    
    return(
        <>
        <div className={style.operationsBtns}>
            <button className={style.operatorBtn} disabled={index!=i} onClick={()=>allActivities("+1")}>+1</button>
            <button className={style.operatorBtn} disabled={index!=i} onClick={()=>allActivities("-1")}>-1</button>
            <button className={style.operatorBtn} disabled={index!=i} onClick={()=>allActivities("*2")}>*2</button>
            <button className={style.operatorBtn} disabled={index!=i} onClick={()=>allActivities("/2")}>/2</button>
            <div className={style.operationsBtns}>
                {(currentPlayers[i].number ==100) && <EndGame setAllPlayers={setAllPlayers}
                                allPlayers={allPlayers}
                                currentPlayers={currentPlayers}
                                setCurrentPlayers={setCurrentPlayers}
                                i={i}
                        /> }
            </div>
         </div>

        </>

    )
}
export default StartGame