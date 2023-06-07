import React from 'react'
import "./Card.css"
import { FiMoreHorizontal } from 'react-icons/fi';
import { AiFillClockCircle } from 'react-icons/ai';
import { IoMdCheckboxOutline } from 'react-icons/io';
import Chip from '../chip/Chip';


function Card() {
  return (
    <div className='card'>
        <div className="card_top">
            <div className="card_top_labels">
                <Chip text="Frontend" color="green"/>
                
                

            </div>
            <FiMoreHorizontal/>
        </div>
        <div className="card_title">
            hghggu
        </div>
        <div className="card_footer">
            <p><AiFillClockCircle/>05 june</p>
            <p><IoMdCheckboxOutline/></p>

        </div>
      
    </div>
  )
}

export default Card
