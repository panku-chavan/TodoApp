import { useRef, useState } from "react"


export const Refs=()=>{
    const [counter,setCounter]=useState(0)
    let x=useRef(0);
    console.log("X is initially :",x.current);
    const changeX=()=>{
        x.current+=1;
        console.log("X is change ",x.current);
    }
    return(
        <div>
            <h1>Counter :{counter}</h1>
            <button onClick={()=>{setCounter(counter+1)}}>Increament</button>
            <button onClick={changeX}>change x</button>
        </div>
    )
}