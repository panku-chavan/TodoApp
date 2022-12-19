import { useState } from "react"



export const Forms=()=>{
    const [formdata,setFormdata]=useState({
        name:'',
        number:'',
        email:''
    })
    const inputHandle=(e)=>{
       // console.log(e.target.value)
       setFormdata({
         ...formdata,
         [e.target.name]:e.target.value
       })
    }
    const submitForm=(e)=>{
        e.preventDefault();
        //console.log(formdata)
        fetch('http://localhost:8080/formData',
            {
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(formdata)
                
            }
            
        )
        console.log("Data Transfer Successfull....");
    }
    let arrData=[];
    fetch('http://localhost:8080/formData').then((res)=>{return res.json()}).then((data)=> data.map((e)=>{
        arrData.push(e)
        return arrData;
    }) )
   console.log(arrData)
    
   
    return(
        <div>
            <form onSubmit={submitForm} >
                <input type="text" name="name" onChange={inputHandle}/>
                <input type="number" name="number" onChange={inputHandle}/>
                <input type="email" name="email" onChange={inputHandle}/>
                <input type="submit" />
            </form>
            
        </div>
    )
}