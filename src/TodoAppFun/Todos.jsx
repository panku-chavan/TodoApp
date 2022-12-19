import { useState } from "react";
import { AddTodo } from "./AddTodo";
import { Todo } from "./Todo";



export function Todos(){
  const [todos,setTodos]=useState( localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")): []  );
  
  /*
  add()
  delete()
  complete()
  edit() 
  */
 let onDelete=(todo)=>{
  //console.log(todo)
   let todoArr=todos.filter(item=>item.id!==todo.id)
   updateState(todoArr);
 }
  

 let handleDone=(todo)=>{
   //console.log(todo)
   const todoArr=[...todos];
  // console.log(todoArr)
   todoArr.map((item)=>{
       if(item.id===todo.id){
        item.isDone=!todo.isDone;
       }
       return item;
   })
   updateState(todoArr);
 }

 let addNewTodo=(todoValue)=>{
    // console.log(todoValue);
    if(todoValue){
      const todoArr=[...todos];
      todoArr.push({
        id:new Date().getTime(),
        value:todoValue,
        isDone:false
      });
      updateState(todoArr) 
    }
 }
 let updateState=(arr)=>{
     setTodos(arr);
     localStorage.setItem("todos",JSON.stringify(arr));
 }
 
 
 let onEdit=(todo)=>{
   //console.log(todo)
   const arr=[...todos];
   arr.map((item)=>{
      if(item.id===todo.id){
        item.value=todo.value;
      }
      return item;
   });
   updateState(arr);

 } 
  
  
  
  return(
       <div>
        {
          todos?.length===0? <h1>No Items in list</h1>:
                            todos.map((item,index)=>{
                              return <Todo  key={index} number={index+1} todo={item} handleDone={handleDone} delete={onDelete} edit={onEdit}/>
                            })
        }
         <AddTodo addTodo={addNewTodo}/>
       </div>
        

    )
}