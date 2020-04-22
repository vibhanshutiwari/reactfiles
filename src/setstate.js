import React from 'react';

// Increment value in data..

class App extends React.Component {
    constructor(props) {
       super(props);
       
       this.state = {
          data: 0
       }
       this.setNewNumber = this.setNewNumber.bind(this)
    };
    setNewNumber = () => {
       this.setState({data: this.state.data + 1},
        () => {
           console.log('callback value',this.state.data);
        } 
         )
    }

    render() {
       return (
          <div class="container">
             <button onClick = {this.setNewNumber}>INCREMENT</button>
             <p>Count --{this.state.data}</p>
          </div>
       );
    }
 }

 export default App;
 