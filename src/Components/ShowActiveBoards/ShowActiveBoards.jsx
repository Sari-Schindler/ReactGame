import style from '../ShowActiveBoards/ShowActiveBoards.module.css'
import StartGame from '../StartGame/StartGame'

const ShowActiveBoards=(props)=>{
  const{index,setIndex ,allPlayers,setAllPlayers,currentPlayer,currentPlayers,setCurrentPlayers,start,i} = props;
        
  
        return(
            <>
            <div className={style.GamerBoard}>
                    <div>name: {currentPlayer.name}</div>
                    <div className={style.isAble}>is able:<div className={i==index? style.able: style.disable}>{i==index ? "true":"false"}</div></div>
                    <div>your number is: {currentPlayer.number}</div>
                    <div>steps: {currentPlayer.steps}</div>
                    <div>score: {currentPlayer.allScores}</div>
                <div>
                {start && <StartGame
                          setAllPlayers={setAllPlayers}
                          allPlayers={allPlayers}
                          currentPlayers={currentPlayers}
                          setCurrentPlayers={setCurrentPlayers}
                          index={index} setIndex={setIndex}
                          i={i}/> 
                          } 
                </div>
            </div>
            </>
        )
}

export default ShowActiveBoards