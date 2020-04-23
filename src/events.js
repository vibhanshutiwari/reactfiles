
import React from 'react';

class Hellogeeks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inlogged: true
        }
    }
      render() {
      
          // First method //
  
         // if(this.state.inlogged) {
           //return   <div> Conditional rendering function</div>
          //} else {
             //return <div>function not working.</div>
          //}
          
          // Second method
  
          //let message
          //if(this.state.inlogged) {
            //  message = <div> Conditional rendering function</div>
          //} else {
            //  message = <div>function not working.</div>
          //}
             //return <div>{message}</div>
  
          // Third method //
  
            //return this.state.inlogged ? <div> Conditional rendering function</div>
             //: <div>function not working.</div>
  
            // Four method
  
             return this.state.inlogged && <div class="container bg-danger"> 
             <p>if first condition is right then code works.</p>
  
             </div>
      }
  }
  

export default Hellogeeks;