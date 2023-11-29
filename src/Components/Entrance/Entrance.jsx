import React, { useState } from 'react'
import AddGamer from './AddGamer/AddGamer';


const Entrance = ()=>
{

   function showButtons()
   {
       return (
        <>
        <button onClick={checkKey()}>Add Gamer</button>
        <button>start game</button>
        </>
       )
   }
function checkKey(){
    return alert(  <AddGamer />);
}



    return(
        <>
            <div >{showButtons()}</div>
        </>
    )
}

export default Entrance;