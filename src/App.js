import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';


function App() {
  return (
    <div className="App">
    <Greet name = "Nimal" lastName = "Alawathugoda">
        <p> This is children props</p>
        <button> Button </button>
    </Greet>
    <Greet name = "Amal" lastName = "Wellawatta">
        <button> Button </button>
    </Greet>
    <Greet name = "Kamal" lastName = "Gamage"/>


    <Welcome name = "Nimal" lastName = "Alawathugoda"/>
    <Welcome name = "Amal" lastName = "Wellawatta"/>
    <Welcome name = "Kamal" lastName = "Gamage"/>

    <Hello/>
    </div>
  );
}

export default App;
