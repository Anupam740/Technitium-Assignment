import React from 'react'
import "./Chip.css"
import { AiFillCloseCircle } from 'react-icons/ai';

function Chip(props) {
  return (
    <div className='chip' style={{backgroundColor:props.color}}>
        {props.text}
        {props.close  && <AiFillCloseCircle onClick={props.onClose?props.close () : ""}/>}

      
    </div>
  )
}

export default Chip
 