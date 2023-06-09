
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import Body from './components/body/Body';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App ">
      <Header/>
      <div className='flex'> <Sidebar/>
      <Body/>
      </div>
      

    </div>
    </Provider>
  );
}

export default App;
