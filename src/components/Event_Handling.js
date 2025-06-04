import React, { useState, useEffect } from 'react';

function Event_Handling() {

    function hello1(){ //normal function
        console.log ("Hello 1");
    }

    const hello2 = (e) =>{ //Arrow function with event object... also we can use e.target
            console.log ("Hello 2", e);
    }

    function hello3(name,e){ //normal function with parameters with event object
            console.log ("Hello 3 "+ name, e);
    }
//() => { //this is anonymous function. anonymous functions haven't name
//      hello3("Ann")
//      }

    const hello4 = (name) =>{ //Arrow function with parameters
                console.log ("Hello 4" + name);
    }

    function hello1(e){ //normal function with event object
            console.log ("Hello 1" , e);
    }

  // {hello1} kiyala vitharak dala thiyenne () dammoth click karanakan in nathuwa console eke hello1 kiyala pennana nisa

  return (
    <div>
        <button onClick = {hello1}>Click 1</button>
        <button onClick = {hello2}>Click 2</button>
        <button onClick = {(e) => {hello3("Ann",e)}}>Click 3</button>
        <button onClick = {() => {hello4("Devid")}}>Click 4</button>

    </div>
  );
}

export default Event_Handling;