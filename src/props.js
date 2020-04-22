import React from 'react';
import { renderIntoDocument } from 'react-dom/test-utils';


class Prop extends React.Component {
 constructor(props) {
     super(props);
 }
    render() {
        return (
            <div class="container">
                <p>My name is {this.props.name} from {this.props.village}</p>
            </div>
        );
    }
}

// Use ES6 function ..

 const Newstore = props => {
    console.log(props);
    return (
        <div class="container">
       <h4>students: {props.name} and {props.last}</h4>
    </div>
    );
}

// Destructuring Props and State..//

const Dest = props => {
    const {laptop,phone} = props
    return (
        <div class="container">
            <span style= {{color:'red'}}>I have a laptop {laptop} and phone {phone}.</span>
        </div>
    );

}

// Passed Porps ParentComponent to ChildComponent //

class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ParentName: 'Surjeet kumar tiwari'
        }
    }
        childHandler = () => {
            alert(`ParentName : ${this.state.ParentName}.`)
        }
    
    render() {
        return (
         <ChildComponent greekHandler = {this.childHandler} />
        );
    }
}

function ChildComponent (props) {
    return (
        <div>
            <button onClick= {props.greekHandler}>click me</button>
        </div>
    );
}




export { Prop, Newstore, Dest, ParentComponent };