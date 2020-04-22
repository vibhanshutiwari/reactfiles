import React from 'react';

class Myform extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hello: '' };
    }
    myinput = (event) => {
        this.setState({ hello: event.target.value });
    }
    render() {
        let header = '';
        if (this.state.hello) {
            header = <span> {this.state.hello} </span>;
        } else {
            header = '';
        }

        return (
            <div class="container">
                <h3>form variable</h3>
                <input type="text" onClick={this.myinput} />
                {header}
            </div>
        );
    }
}

// Submitting from //

class Submitfrom extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Name: '' };
    }

    submitInput = (event) => {
        event.preventDefault();
        alert("submiting input value" + this.state.Name);
    }

    storeInput = (event) => {
        this.setState({ Name: event.target.value });
    }

    render() {
        return (
            <div class="container">
                <form onSubmit={this.submitInput} >
                    <p>enter input name.</p>
                    <input type="text" onClick={this.storeInput} />
                    <span>{this.state.Name}</span>
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

// Mutiple input fields //

class Mutipleinput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: null,
        };
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]:val});
    }

        render() {
            return(
              <div class="container">
                  <h1> hello {this.state.name} {this.state.age}</h1>
                  <p>Enter name.</p>
                  <input type ="text" name="name" onChange ={this.myChangeHandler}  /> 
                  <p>Enter age.</p>
                  <input type ="text" name="age" onChange ={this.myChangeHandler}  />
              </div>
            );
        }
    }




export { Myform, Submitfrom, Mutipleinput };