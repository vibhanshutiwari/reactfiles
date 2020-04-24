import React from 'react';
import './App.css';


class App extends React.Component {

    render() {
        return(
            <div>
             
             <ParentRef />
            </div>
        );
    }
}

// Use the Refs function //

//class RefsDemo extends React.Component{
  //  constructor(props) {
   //     super(props)
     //   this.inputRef = React.createRef()
    //}
     //componentDidMount() {
       //  this.inputRef.current.focus();
      //console.log(this.inputRef);
     //}
     
     //clickHandler = () => {
       //  alert(`${this.inputRef.current.value}`);
     //}
    
    //render() {
      //  return (
        //    <div>
          //    <input type="text" ref={this.inputRef} />
            //  <button onClick={this.clickHandler}>Click</button>
       //</div>
        //)
    //}
//}

// Passed the Value with help of Refs Forwarding //

class ParentRef extends React.Component {
    constructor(props) {
        super(props)
        this.otherRef = React.createRef();
}
 focusHandler = () => {
     this.otherRef.current.focus();
 }

  render() {
     return(
         <div>
        <ChilRef  ref={this.otherRef}/>
        <button onClick={this.focusHandler}>Focus click</button>
        </div>   
    );
 }
}

// Child Ref //

const ChilRef = React.forwardRef((props, ref) => {
return (
    <div>
        <input type="text" ref={ref} />
    </div>
)
});


  
    export default App;

 


