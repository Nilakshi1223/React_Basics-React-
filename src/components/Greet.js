import React from 'react'

//function Greet(){
  //  return <h1> Hello Nilakshi </h1>
//}

const Greet = (props) => {
    console.log(props)
    return ( // tag dekak wadaa karanna ba. ea nisa <div> use karala thiyena tag okkoma rap karanna oni
        <div>
            <h1> Hello {props.name} {props.lastName} </h1>
            {props.children}
        </div>
        )
    }

//export const Greet = () => <h1> Hello Nilakshi </h1> mehema unoth App.js eke component name eka {Greet} kiyala danna oni
//ea kiyanne 'import {Greet} from 'components/Greet'

export default Greet