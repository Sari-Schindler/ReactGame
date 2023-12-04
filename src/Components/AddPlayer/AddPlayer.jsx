import { useState } from "react"
import gamer from "../../gamer";

const AddPlayer=(props)=>{
    const currentName =props.currentPlayer.name;

    function addPlayer(){
        let newName = prompt("Please enter your name:");
        if (newName == null || newName == "") {
            alert( "please enter valid name");
        } else {
             const newGamer = new gamer(newName);
             newGamer.isActive = "true";
             props.setCurrentPlayer(newGamer);
             isExsist();
        }
    }

    function isExsist(){
        const isExsist = props.allPlayers.array.find(element => {
            element.name==currentName;
        });
        if(isExsist)
        {
            let playerDetailsprops = props.allPlayers.map((gamer)=>{
            gamer.name==currentName;
            })
            props.setCurrentPlayer(playerDetailsprops)
        }
        else
        props.setAllPlyers(props.currentName)
    }
    


    return(
        <>
        <button onClick={()=>addPlayer()}>add player</button>
        </>
    )
}


export default AddPlayer