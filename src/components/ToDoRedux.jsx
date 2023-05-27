import React,{useState} from 'react'
import "./ToDoRedux.css"
import {useSelector, useDispatch } from 'react-redux'
import { addTodo,deleteTodo,removeTodo } from '../actions/index'
import TodoReducer from './../reducers/TodoReducer';

const ToDoRedux = () => {
    const [inputData,setinputData]=useState("")
    const list =useSelector((state)=>state.TodoReducer.list)
    const dispatch=useDispatch();
  return (
    <>
    <div className='main-div'>
      <div className="child-div">
        <figure>
          <figcaption>Add your List here </figcaption>
        </figure>
        <div className="addItems">
          <input value={inputData} type='text' placeholder='✍🏻 Add items...' onChange={(e)=>setinputData(e.target.value)}/>
          <button id="addbtn" onClick={()=>dispatch(addTodo(inputData),setinputData(''))}> ➕</button>
        </div>
        <div className="showItems">

            {
                list.map((elem)=>{
                    return(
                    <div className="eachItems" key={elem.id}>
                <h3>{elem.data}</h3>
                <div className="todo-btn">
          
          <button  onClick={()=>dispatch(deleteTodo(elem.id))}>❌</button>
          </div>
          </div>
                    )

                })
            }
            
        </div>
        <div className="showItems">
            <button  id="clearallbtn"
            onClick={()=>dispatch(removeTodo())}
            
            >Clear All</button>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default ToDoRedux
