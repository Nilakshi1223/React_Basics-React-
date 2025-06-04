// rce

import React, {Component} from 'react'

class Counter extends Component{
// rconst

constructor(props){
    super(props)
    this.state= {
        count :0
    }
}



    increment (){
        // use setState for UI dispaly instead of directley use state
        // setState have 2 params 1-object 2-call back function (arrow function)
//        this.setState(
//            {count : this.state.count+1} , () => {console.log ('Callback value', this.state.count)}
//        )
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
        console.log (this.state.count);
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render(){
        return(
            <div>
                <div> Count - {this.state.count} </div>
                <button onClick ={ () => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter