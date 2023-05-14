import React,{useState} from "react";
import "./ToDo-list.css";

export default function ToDolist() {
  const [state,SetState]=useState()
  const [items,setItems]=useState([]);
  
    const handleChange=(e)=>{
      e.preventDefault([])
      SetState(e.target.value)

  }
  const handleClick=(e)=>{
    
    setItems((oldItems)=>{
      return [...oldItems,state]
    })

  }
  const removeItem=()=>{
    
  }


  
  return (
    <div className="main_div">
      <div className="center_div">
        <br/>
        <div className="TodoHeader">
        <h1> ToDo List</h1></div><br/>
        <input id="inputBox" onChange={handleChange} type="text" placeholder="Add Items" value={items}/>
        <button id="add-btn"onClick={handleClick}>+</button>
        <ol>
          {/* <li>{state}</li> */}
          {items.map((interval)=>(
            <>
            <li>{interval}</li>
            <button onClick={removeItem}>X</button></>
          ))}
        </ol>
      </div>
      <h3></h3> 
    </div>
  );
}
