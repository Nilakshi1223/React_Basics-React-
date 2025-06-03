import React from 'react'

const Hello = () =>{ // With JSX
//    return (
//        <div className='dummyClass'>
//            <h1> Hello.js file</h1>
//        </div>
//    )

//return React.createElement ('div', null, 'Hello.js file')
//return React.createElement ('HTML_tag_to_be_render', keys_for_object, 'Children_for_HTML_element') - minimum 3 parameters

//return React.createElement ('div', null, 'h1', 'Hello.js file')

return React.createElement ('div', {id:'hello', className:'dummyClass'}, React.createElement ('h1', null,'Hello.js file')) // Without JSX
                                   // <div id = "hello" class = "dummyClass">

}

export default Hello