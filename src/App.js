import store from './redux/store';
import './App.css';
import { Provider } from 'react-redux';
import TrelloList from './components/trelloList/TrelloList';

function App() {
  return (
    <Provider>
    <div className="App">

      <h2>Hello youtube</h2>
      <TrelloList title="test"/>
    </div>
     </Provider>
  );
}

export default App;
