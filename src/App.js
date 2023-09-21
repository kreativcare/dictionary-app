import logo from "./logo.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={logo} className="Logo img-fluid" />
          <div>
            <h1>Dictionary</h1>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
