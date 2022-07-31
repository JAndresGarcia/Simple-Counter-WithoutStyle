import React from "react";
import { useEffect, useState } from "react";

function Timer() {
    const [counter,setCounter] = useState(0);

    useEffect(() =>{
        if(counter>=0){
            setTimeout(() => setCounter(counter + 1),1000);
        }
    },[counter])
    
    return(
        <div className="contar">
        <span>
            {counter}
        </span>
        </div>
    )
}

export default Timer;