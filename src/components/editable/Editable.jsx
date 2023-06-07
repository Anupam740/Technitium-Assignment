import React,{useState} from 'react'
import "./Editable.css"
import { AiFillCloseCircle } from 'react-icons/ai';

function Editable(props) {
    const[showEdit,setShowEdit]=useState(false)
  return (
    <div className='editable'>
        {
            showEdit?(<form className={`editable_edit ${props.editClass || ""}`}
            onSubmit={(event)=>{
                event.preventDefault()
                if(props.onSubmit)props.onSubmit()
            }}
            >
                <input
                autoFocus
                 type="text"
                defaultValue={props.text}
                 placeholder={props.placeholder || "Enter Item"}/>
                <div className="editable_edit_footer">
                    <button type="Submit">{props.buttonText || "Add"}</button>
                    <AiFillCloseCircle onClick={()=>setShowEdit(false)}/>
                </div>
            </form>) : (<p className={`editable_diaplay ${props.displayClass || ""}`} onClick={()=>setShowEdit(true)}>{props.text || "Add item"}</p>)
        }
        
        

      
    </div>
  )
}

export default Editable
