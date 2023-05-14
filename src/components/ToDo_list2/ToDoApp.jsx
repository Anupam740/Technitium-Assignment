import React,{useState} from "react";
import TodoList from './TodoList.jsx'

import ToDoInput from './ToDoInput.jsx'

export default function ToDoApp() {
  const [listTodo,setListTodo]=useState([]);
  let addList=(inputText)=>{
    if(inputText!=='')
    setListTodo([...listTodo,inputText]);
  }
  const deleteItem=(key)=>{
    let newListTodo=[...listTodo]
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  
  return (
    <>
    <div className="main-container">
      <div className="center=-container">
        <ToDoInput addList={addList}/>
        <h1 className="app-heading">TODO</h1>
        <hr/>
        {listTodo.map((listItem,i)=>{
          return(
            <>
            
            <TodoList key={i} index={i} item={listItem} deleteItem={deleteItem}/>
            

            </>
          )
        })}



      </div>
      
    </div>
    </>
  );
  
}


