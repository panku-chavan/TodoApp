import { useState } from "react"


export const FormM = () => {
    const [formData,setformData]= useState({
        name:'',
        age:''
    })
    let handle=(e)=>{
        setformData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
   let onSubmit=(e)=>{
    e.preventDefault();
      console.log(formData)
      let url='http://localhost:8080/formData';
      fetch(url, {
        method : "POST",
        headers:{
            "content-type":"application/json"
        },
        body   : JSON.stringify(formData)
      })
   }
    //console.log(formData)
    return (
        <form onSubmit={onSubmit} >
            <input type="text" name='name' onChange={handle}/>
            <input type="number" name='age' onChange={handle} />
            <input type="email" name='email' onChange={handle} />
            <input type="submit" value='Submit' />
        </form>
    )
}