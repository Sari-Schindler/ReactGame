import { useState } from "react";

const ShowActiveBoards=(props)=>{

   function createBoards(){
    props.allPlayers.map(element=>
        <div>{element.name}</div>
        )
   }

    return(
        <>
        <div>{createBoards()}</div>
        </>
    )
}

export default ShowActiveBoards