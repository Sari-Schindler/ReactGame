import { useState } from "react"
import gamer from "../../gamer"
import ShowActiveBoards from "../ShowActiveBoards/ShowActiveBoards.jsx"

const AddPlayer=(props)=>{

    const allPlayers=(JSON.parse(localStorage.getItem('allPlayers'))|| []);

    function addPlayer(){
        props.setAdd("true");
        let newName = prompt("Please enter your name:");
        while (newName == null || newName == "") {
            alert( "please enter valid name");
            newName = prompt("Please enter your name:");
        }
        const newGamer = new gamer(newName);
        newGamer.isActive = "true";
        props.setCurrentPlayer(newGamer);
        if (allPlayers == null || allPlayers.length == 0) {
            allPlayers.push(newGamer);
            localStorage.setItem("allPlayers" ,JSON.stringify(allPlayers));
            localStorage.setItem("currentPlayer",JSON.stringify(newGamer));
        }
        else
            isExsist(newGamer);

    }

    function isExsist(newGamer){

        let isExist=false
        allPlayers.map(e=>{
            if(e.name===newGamer.name)
            isExist=true
        })
        
        if(isExist)
        {
            let playerDetailsprops = props.allPlayers.map((gamer)=>{
            gamer.name==currentName;
            })
            props.setCurrentPlayer(playerDetailsprops)
            alert("you already play once. good luck");
        }
        else{
        // props.setAllPlyers(props.currentName)
        allPlayers.push(newGamer);
        localStorage.setItem("allPlayers" ,JSON.stringify(allPlayers));
        localStorage.setItem("currentPlayer",JSON.stringify(newGamer));
        }
    }
    


    return(
        <>
        <button onClick={()=>addPlayer()}>add player</button>
        {/* {(props.add && <showActiveBoards add={props.add} setAdd={props.setAdd} />)} */}
        <ShowActiveBoards allPlayers={props.allPlayers} />
       
        </>
    )
}


export default AddPlayer