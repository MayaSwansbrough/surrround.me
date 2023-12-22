import './App.scss';
import Searchbar from './components/Searchbar/Searchbar'

function App() {
  return (
    <div className="App">
      <div className="App logo">
        <h1>Surround.me</h1>
      </div>
      <div className="App container">
        <Searchbar />
      </div>
    </div>
  );
}

export default App;
