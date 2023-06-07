import React, { useState } from 'react'
import "./Board.css"
import { FiMoreHorizontal } from 'react-icons/fi';
import Card from '../card/Card';
import Editable from '../editable/Editable';
import DropDown from '../dropdown/DropDown';




function Board() {
  const [showDropDown,setShowDropDown]=useState(false);
  return (
    <div className='board'>
      <div className="board_top">
        <p className='board_top_title'>To Do <span>2</span></p>
        <div className="board_top_more" onClick={()=>setShowDropDown(true)}>
        <FiMoreHorizontal/>
        {
          showDropDown && (<DropDown  onClose={()=> setShowDropDown(false)}>
            <div className="board_dropdown">
            <p>Delete Board</p>
  
            </div>
            
          </DropDown>)
        }
        
        </div>
        
        
      </div>
      <div className="board_cards custom-scroll">
        <Card/>
        <Card/>
        
        <Editable
        displayClass="boards_cards_add"
        text="Add Card"
        placeholder="Enter Card"
        
        
        />

      </div>
    </div>
  )
}

export default Board
