import React, { useState } from 'react'
import AddGamer from './AddGamer/AddGamer.jsx';
const Entrance = (props)=>
{
    function addGamer()
    {
        return(
            // <AddGamer player={props.player} setPlayer={props.setPlayer}/>
            <p>jgvfug</p>
        )
    }
    // function startGame()
    // {
    //     return(
    //         <startGame player={props.player} setPlayer={props.setPlayer}/>
    //     )
    // }
    return(
        <>
         <button onClick={()=>addGamer()}>Log In</button>
         {/* <button onClick={<startGame player={props.player} setPlayer={props.setPlayer}/>}>to start game</button> */}
        {/* <AddGamer player={props.player} setPlayer={props.setPlayer}/> */}
        </>
    )
}

export default Entrance;