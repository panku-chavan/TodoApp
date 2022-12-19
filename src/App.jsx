import { useState } from 'react';
import './App.css';
import { Button } from './TodoAppFun/Button';
import { Todos } from './TodoAppFun/Todos';

 
 

function App() {
  const [show,setShow]=useState(true);
 return (
   <div className="container" id='App' >
     {show? <h1 style={{color:'Orange'}}>Todos App</h1>:null}
     {show ? <Todos/> : null }
    <Button style={{backgroundColor:"red"}} onClick={()=>{setShow(!show)}}>{show ? "Hide ":"Show "}Application</Button>
   </div>
 );
}
export default App;