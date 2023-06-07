import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/homePage/HomePage';
import WorkSpace from './pages/workSpace/WorkSpace';
import NavBar from './components/navBar/NavBar';
import About from './pages/about/About';
import Board from './components/board/Board';
import Editable from './components/editable/Editable';

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/work-space" element={<WorkSpace />} />
          <Route exact path="/"  element={<NavBar />} />
          <Route exact path="/about"  element={<About />} />
        </Routes>
      </Router> */}
      <div className='app_navbar'>
        <h2>Kanban</h2>
      </div>
      <div className='app_outer'>
        <div className='app_boards custom-scroll'>
          <Board/>
          <Board/>
          <div className="app_boards_board">
            <Editable
            text="Add Board"
            placeholder="Enter Board Title"/>
            
               
          

          
          
          </div>

          
          


        </div>
      </div>



      
    </div>
  );
}

export default App;
