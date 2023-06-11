import {Routes,Route} from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import Register from './components/registeration/Register';
// import {app} from "./firebaseConfig"
import Editor from './components/editor/Editor';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      
      
      <Routes>
        
        <Route exact  path="/"  element={<Home/>}/>
        <Route exact  path="/login"  element={<Login/>}/>
        <Route exact  path="/register"  element={<Register/>}/>
        <Route exact  path="/editor"  element={<Editor/>}/>



        
      </Routes>
    </div>
  );
}

export default App;
