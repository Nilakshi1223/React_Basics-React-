import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import Hook_useState from './components/Hook_useState';
import Hook_useEffect from './components/Hook_useEffect';
import Event_Handling from './components/Event_Handling';
import Fetch from './axios_for_API_calls/Fetch';
import Post from './axios_for_API_calls/Post';
import Update from './axios_for_API_calls/Update';
import Delete from './axios_for_API_calls/Delete';
import FormValidation from './Basic_form_validation/FormValidation';


class App extends Component {
render(){
  return (
    <div className="App">

    <FormValidation/>

    {/*<Delete/>

    <Update/>

    <Post/>

    <Fetch/>

    <Event_Handling/>

    <Hook_useEffect/>

    <Hook_useState/>

    <Counter/>

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
