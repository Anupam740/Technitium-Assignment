import React,{useState} from 'react'
import GoogleButton from 'react-google-button'
import { Link,useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import './Login.css'



const Login = () => {
    const navigate=useNavigate()
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[getData,setGetData]=useState(false)
    const signIn=()=>{
        setGetData(true)

    }
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handlePassWord=(e)=>{
        setPassword(e.target.value)
    }
    const handleLoginSubmit=(e)=>{
        e.preventDefault();
        const storedFormData=localStorage.getItem("formData")
        const parsedFormData = storedFormData ? JSON.parse(storedFormData) : null;
        if (parsedFormData && email === parsedFormData.email && password === parsedFormData.password) {
            alert('Login successful!');
            navigate("/editor")
            // Perform the desired action upon successful login
          } else {
            alert('Invalid login credentials!');
            // Display an error message or perform other actions for failed login
          }
      
          // Clear the form fields
          setEmail('');
          setPassword('');
        };
      


   
    
  return (
    <div className="google-btn">
      <h2>Login Page</h2><br /><img src="https://transkriptor.com/wp-content/uploads/2022/09/Google-Docs-600x330.webp" width="150px"/> <br />
      <GoogleButton onClick={signIn}/><br />
      {
        getData?(<div className="login-container"><img src="https://transkriptor.com/wp-content/uploads/2022/09/Google-Docs-600x330.webp" width="150px"/><form onSubmit={handleLoginSubmit}><h3>Login Page</h3>
            <div className='loginEmail'><TextField autoComplete="off"   label="Email" variant="outlined"  type="email" value={email} onChange={handleEmail}/> </div><br />
            <div className='loginEmail'> <TextField autoComplete="off"   label="Password" variant="outlined"  type="password" value={password} onChange={handlePassWord}/></div>
            <input id ="submit-btn" type="submit" ></input>
            </form></div>):""
      }
      
      <span>If you don't have an account, please <Link to="/register">Click here</Link>  </span>

    </div>
  )
}

export default Login
