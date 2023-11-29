import { useState } from "react";
import Entrance from "../Components/Entrance/Entrance";

function Screen(){
    const [count, setCount] = useState(0)

    return (
      <>
      < Entrance />
      </>
    )
}

export default Screen