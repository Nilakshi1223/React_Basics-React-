import React, { useState } from 'react';


function Hook_useState() {
  //let num1 = 2;

  const[num1,setnum1] = useState(2) //mulin display wena number eka
  const[count,setcount] = useState(0)

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


  return (
    <div>
      <button onClick={handleClick}>Click</button>
      <p>{num1}</p>

      <p>Counter</p>
      <button onClick={decrementFunction}>-</button>
      <button onClick={incrementFunction}>+</button>
      <p>{count}</p>

    </div>
  );
}

export default Hook_useState;