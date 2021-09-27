import logo from './logo.svg';
import './App.css';
import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         <Button>Test</Button>
        </p>



      </header>
    </div>
  );
}

export default App;
