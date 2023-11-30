import { useState } from "react";

const AddGamer=(props)=>{

   function checkGamer()
   {
        const password = document.getElementById("signUpPassword").value;
        const name = document.getElementById("signUpName").value; 
        const exist = props.player.find(element => {element.name === name &&element.password==password});
            if (exist)
        {
            const newPlayer = new gamer(name,password);  
            props.setPlayer(...props.player,newPlayer);
        }
   }
    return(
        <>
          <div  class="login-content" id="logInContainer">
            <form onsubmit={checkGamer}>
                <h2 class="title">Log In</h2>
                <input type="password" class="input" placeholder="Password" required id="logInPassword"/>
                <input id="signUpName" type="text" class="input" placeholder="name" required/>
                <input type="submit" class="btn" value="Login" id="submitlogIn"/>
            </form>
        </div>
        </>
    )
}

export default AddGamer