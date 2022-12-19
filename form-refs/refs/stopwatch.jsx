import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react"




export const Stopwatch=()=>{
    const [timer,setTimer]=useState(0);
    const timeRef=useRef(null);
    useEffect(()=>{
       startTimer();
    },[])
    let startTimer=()=>{
        timeRef.current= setInterval(()=>{
            setTimer((prevVal)=>prevVal+1)
        },1000)
    }
  return(
    <div>
        <h1>Timer :{timer}</h1>
        <button onClick={()=>clearInterval(timeRef.current)}>Paus</button>
        <button onClick={startTimer}>Start</button>
        <button onClick={()=>{clearInterval(timeRef.current); setTimer(0)}} >Reset</button>
    </div>
  )
}