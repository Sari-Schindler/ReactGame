import { useState } from "react";
import style from '../ShowActiveBoards/ShowActiveBoards.module.css'
const ShowActiveBoards=(props)=>{
    
        return(
            <>
                <div className={style.w}>
                    <div>name: {props.currentPlayer.name}</div>
                    <div>is able: {props.currentPlayer.isAble? true: false}</div>
                    <div>score: {props.currentPlayer.score}</div>
                    <div>steps: {props.currentPlayer.steps}</div>
                    <div>number: {props.currentPlayer.number}</div>
                    <div>score: {props.currentPlayer.score}</div>
                </div>
                
            </>
        )
}

export default ShowActiveBoards