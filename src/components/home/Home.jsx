import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Home.css"

function Home() {
    const navigate=useNavigate()
    const handleClick=()=>{
        navigate("/login")

    }
  return (
    <div className='home'>
        <img src="https://transkriptor.com/wp-content/uploads/2022/09/Google-Docs-600x330.webp" width="250px"/>
      <h1>Welcome to Google Docs Clone</h1>
      
      <button onClick={handleClick}>Click</button> here to start...
    </div>
  )
}

export default Home
