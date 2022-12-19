import { useState } from "react"
import Modal from "react-bootstrap/Modal"
/** 
 index,
 handle done
 item
 edit
 delete
*/

export function Todo(props){
    const [show,setShow]=useState(false);
    const [popValue,setPopvalue]=useState(props.todo.value);

    let done=()=>{
        setShow(!show);
        props.edit(
            {
                id:props.todo.id,
                value:popValue
            }
        )
    }

    return(
        <div>
            <table className="table">
                <tbody>
                    <tr>
                        <td style={{width:15 }} className="text-center">{props.number}</td>
                        <td style={{width:15}} className="text-center"><input type="checkbox" checked={props.todo.isDone} onChange={()=>props.handleDone(props.todo)} /></td>
                        <td style={{width:150 , textDecoration:props.todo.isDone ? 'line-through':''}}className="text-center">{props.todo.value}</td>
                        <td style={{width:50}} className="text-center"><input type="button" className="btn btn-warning" value="Edit" onClick={()=>{setShow(!show)}} /></td>
                        <td style={{width:50}} className="text-center"><input type="button" className="btn btn-danger" value="Delete" onClick={()=>props.delete(props.todo)}/></td>
                    </tr>
                </tbody>
            </table>
        <Modal show={show}>
            <Modal.Header>Edit Items</Modal.Header>
            <Modal.Body>
                <input type="text" className="form-control" placeholder={popValue}   onChange={(event)=>{setPopvalue(event.target.value)}}  ></input>

            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-secondery" onClick={()=>{setShow(!show)}}>Cancel</button>
                <button className="btn btn-primary" onClick={done}>Done</button>
            </Modal.Footer>
        </Modal>
        </div>
    )
}