import { useState } from "react";
import { Button } from "./Button";

export function AddTodo(props) {
    const [value,setValue]=useState('');
    const onSubmit = (event) => {
        event.preventDefault();
       // console.log(event)
        props.addTodo(value);
    }
    const onChange=(event)=>{
        setValue(event.target.value);
        //console.log(event.target.value)
    }

    return (
        <div className="container">
            <form onSubmit={onSubmit} >
                <div className="input-group mb-3">
                    <input type='text' className="form-control" placeholder="add items" value={value} onChange={onChange} />
                    <div className="input-group-append">
                        {/* <button className="btn btn-success" type="submit">Add Items</button> */}
                        <Button type="submit">Add Items</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}