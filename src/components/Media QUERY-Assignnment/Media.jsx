import React from 'react'
import './Media.css'

const Media = () => {
  return (
    
      <div>
      <nav>
        <input type="checkbox" id="check"/>
        <label for="check" className="checkbtn">
          <i className="fas fa-bars">
            <img src="https://icons.deanishe.net/icon/fontawesome/444/bars/256.png" id="barimg"/>
            </i></label>
        <label className="logo">DesignX</label>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Videos</a></li>
          
          <li><button>Login</button></li>
          
        </ul>
        
      </nav>
      <section className="hero">
      <div className="hero-content">
        <h1 className="hero-heading">Welcome to Our Website</h1>
        <p className="hero-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        <button className="hero-btn">See How   ▶</button>
      </div>
      <div className="hero-image">
        <img src="https://www.orfonline.org/wp-content/uploads/2021/10/Women-in-Tech.jpg" alt="Hero Image" id="heroimg"/>
      </div>
    </section>
    </div>
  )
}

export default Media
