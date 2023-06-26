import React,{useState} from 'react'

const AddTask = ({taskList,setTaskList}) => {
    const [addModel,setAddModel] =useState(false)
    const [projectName,setProjectName]=useState("")
    const [taskDescription,setTaskDescription] =useState("")
    const handleAdd = (e) => {
        e.preventDefault();
        if(!projectName) {
          setErrorMessage("Enter project Name to continue")
        }else{
          let timestamp=new Date();
          let tempList = taskList;
          tempList.push({
            projectName,
            taskDescription,
            timestamp: timestamp,
            duration:0

          })
          localStorage.setItem("taskList",JSON.stringify(tempList))
          window.location.reload()

        
        setTaskList([...taskList, { projectName, taskDescription,timestamp: timestamp}]);

      
        setAddModel(false);
        setProjectName("");
        setTaskDescription("");
        }
        
      };
      const [errorMessage,setErrorMessage] = useState("");
      
      
    const handleInput= e =>{
        const {name, value}=e.target;
        if(name==="projectName") {setProjectName(value);
        setErrorMessage("") }
        if (name==="projectName"  && value===""){
          setErrorMessage("Enter project Name to continue")
        }
        if(name==="taskDescription") setTaskDescription(value)
        

    }
    
  return (
    <>
      <button className="bg-blue-500 text-white uppercase text-sm font-semibold py-1 mx-1.5 pl-2 pr-2.5 rounder hover:opacity-70" onClick={()=> setAddModel(true)} type='button'>+New</button>
      {
        addModel? (
            <>
            <div className="flex items-center justify-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-100"> 
            <div className="bg-white w-9/12 border rounded-lg shadow-md relative flex flex-col">
                
            
            <div className="flex flex-row justify-between p-5 border-b border-slate-200 rounded-t ">
            <h3 className="text-3xl font-semibold">Add New Task</h3>
            <button
                className="px-1 text-gray-400 float-right text-3xl leading-none font-semibold block" onClick={()=>setAddModel(false)}>x
            </button> 

            </div>
            <form className="px-6 pt-6 pb-4">
                <div>

               
                <label className="tracking-wide uppercase text-gray-700 text-xs font-semibold mb-2 block"
                htmlFor="project-name"
                >
                    Project Name
                </label>
                <input
                className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id=" project-name"
                name="projectName"
                type='text'
                value={projectName}
                onChange={handleInput}
                required
                placeholder='A Project Name'
                />
                <p className="text-red-500 text-center mt-2 mb-5">{errorMessage}</p>
                 </div>
                 <div>
                    <label
                    className="tracking-wide uppercase text-gray-700 text-xs font-semibold mb-2 block"
                    
                    >
                        Task description

                    </label>
                    <textarea
                    className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-5 leading-tight focus:outline-none focus:bg-white"
                    id="task-description"
                    name='taskDescription'
                    value={taskDescription}
                    onChange={handleInput}
                    rows="5"
                    placeholder='Task description'
                    
                    />
                 </div>
            </form>
            <div className="flex justify-end p-6 border-t border-slate-200 rounded-b">
                <button
                className="bg-blue-500
                text-white font-semibold uppercase text-sm px-6 py-3 rounded hover:opacity-70
                "
                onClick={handleAdd}
                
                >Add Task</button>
            </div>

            </div>
            </div>
            </>
        ):null
      }
    </>
  )
}

export default AddTask
