import React from 'react';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: 'ford',
      model: 'mustang',
      color: 'white',
      year: 2001
    };
  }

  changeColor = () => {
    this.setState({ 
      color: "blue",
       brand: 'hero',
    });
  }
  render() {
    return (
      <div class="container">
        <h4>My {this.state.brand}</h4>
        <p>saktimann always wear {this.state.color} clothes,
             {this.state.model} from {this.state.year}</p>
        <button type="button" style = {{margin:'5px', border: '2px solid red'}} onClick = {this.changeColor}> change </button>
      </div>
    );
  }
}

// lifecycle //

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = { store: 'yellow' };
  }
  static getDerivedStateFromProps(props, state) {
    return { store: props.favour };
  }
  render() {
    return (
      <div class="container">
        <p>My favorite color is {this.state.store}</p>
      </div>
    );
  }
}

// click the button change the value..

class Car extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'Welcome Users',
    };
  }
  changeMessage = () => {
    this.setState({message: 'thanks for subscribing'});
  }

  render() {
    return (
      <div class="container">
        <h3>{this.state.message} </h3>
        <button onClick = {this.changeMessage}>Subscribe</button>
      </div>
    );
  }
}

// Insert value in empty data object..
// (setstate) 

class Other extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
    this.newProject = this.newProject.bind(this);
  }
  newProject = () => {
    let item = 'newvalue';
    let myerry = this.state.data.slice();
    myerry.push(item);
    this.setState({ data: myerry });
  }

  render() {
    return (
      <div class="container">
        <button onClick={this.newProject}>set state</button>
        <p>show array function {this.state.data}</p>
      </div>

    );
  }
}


export { Main, Car, Hello, Other };