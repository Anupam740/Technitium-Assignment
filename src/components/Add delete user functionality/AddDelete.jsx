import React,{useState} from "react";
import "./AddDelete.css";

export default function AddDelete() {
  const [data,setData]=useState(["Elon","Zeff","Mark"])
  function handleDel(i){
    const updatedData=[...data]
    updatedData.splice(i,1);
    setData(updatedData)
  }
  return (
    <div className="mainDiv">
      {
        data.map((el,i)=>{
          return(
            <div  key={i} className="container">

            <h1>{el} <button onClick={handleDel}>delete</button></h1>
            </div>
          )
        })
      }
    </div>
  );
}
