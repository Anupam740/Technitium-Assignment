import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import "./Register.css"


const Register = () => {

    const navigate=useNavigate()
    const psRegix="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[submit,setSubmit]=useState([])
    const handleName=(e)=>{
        setName(e.target.value);
        console.log(name)
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value);
        console.log(email)

    }
    const handlePassWord=(e)=>{
        setPassword(e.target.value);
        console.log(password)

    }

    
        const handleSubmit = (e) => {
            e.preventDefault(); 
            if(name=="" || email =="" || password == " " ){
                alert("please enter valid data in all input fields")

                return;
                
            }
            else{
          
            setSubmit([name, email, password]); // Save the values in an array
            const formData = {
                name: name,
                email: email,
                password: password,
              };
            
            
              // Save the form data in local storage
              localStorage.setItem('formData', JSON.stringify(formData));
              alert("You are successfully Registered")
              navigate("/login")

            }
            
          
            
          
            
          
          

        
        
        
        

        }
        
  return (<>
    <img src="https://transkriptor.com/wp-content/uploads/2022/09/Google-Docs-600x330.webp" width="150px"/><br />
    
        <form onSubmit={handleSubmit} className="reg-container">
            
      <h3>Registration Page</h3>
      <div><TextField  label="Name" variant="outlined"  type="text" value={name} onChange={handleName}/>  </div>
      <div><TextField  label="Email" variant="outlined"  type="email" value={email} onChange={handleEmail}/> </div>
      <div> <TextField  label="Password" variant="outlined"  type="password" value={password} onChange={handlePassWord}/></div>
      <input id ="submit-btn" type="submit" ></input>
      

      
      
     
      </form>
      
    
      </>)
}

export default Register
