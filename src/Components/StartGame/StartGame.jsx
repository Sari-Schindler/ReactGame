import {useState} from "react"
import gamer from "../../gamer"

const StartGame=(props) =>
{
    function addOne()
    {

    }

    
    function reduceOne()
    {
    
    }

    function timesTwo()
    {

    }

    function DivideByTwo()
    {

    }

    return(
        <>
         <button onClick={()=>addOne()}>+1</button>
         <button onClick={()=>reduceOne()}>-1</button>
         <button onClick={()=>timesTwo()}>*2</button>
         <button onClick={()=>DivideByTwo()}>/2</button>
        </>
    )
}
export default StartGame