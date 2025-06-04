import React, { useState, useEffect } from 'react';

function Hook_useEffect() {

  const[num1,setnum1] = useState(2); //mulin display wena number eka
  const[count,setcount] = useState(0);
  const [clicks, setclicks] = useState(0);

  function handleClick(){
    //num1=3;

    setnum1(3) //click karama display wena number eka

    //alert(num1);
  }

  const decrementFunction = () =>{
    setcount(count-1)
  }

  const incrementFunction = () =>{
    setcount(count+1)
  }

  //let myNumber = 10;

    useEffect(()=>{
        document.title = `You clicked ${clicks} times`; // browser title
    },[count]);

    useEffect(()=>{
        fetch("" )
    });

  {/*useEffect (() => {
    console.log("hi");
//    if(myNumber == 5){
//           alert("Equal to 5");
//         }else{
//           alert("Not equal to 5");
//         }
  },[count,num1]) //[]- dependency list*/}

  return (
    <div>
        <button onClick={handleClick}>Click</button>
              <p>{num1}</p>

              <p>Counter</p>
              <button onClick={decrementFunction}>-</button>
              <button onClick={incrementFunction}>+</button>
              <p>{count}</p>

              <p> You clicked {clicks}</p>
              <button onClick={()=> setclicks(clicks+1)}>
                Click me
              </button>
    </div>
  );
}

export default Hook_useEffect;