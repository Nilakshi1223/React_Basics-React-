import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import Hook_useState from './components/Hook_useState';


class App extends Component {
render(){
  return (
    <div className="App">

    <Hook_useState/>

    {/*<Counter/>

     <Message/>

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

    <Hello/>*/}

    </div>
  );
}}

export default App;
