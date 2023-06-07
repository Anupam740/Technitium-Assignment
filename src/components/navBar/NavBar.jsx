import React from 'react'
import './NavBar.module.css'
import { Link } from 'react-router-dom';
import HomePage from '../../pages/homePage/HomePage';
import WorkSpace from '../../pages/workSpace/WorkSpace';

const NavBar = () => {
    return (
      
      <div className="nav-bar" >
          
            <h1>Welcome</h1><br /><br />
          <li>
              <Link to="/home">Home</Link>
            </li>
          
          
          <li>
              <Link to="/work-space">Work-Space</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          
        
      </div>
      
    )
  }



export default NavBar
