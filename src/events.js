
import React from 'react';

// onClick functions //

class Football extends React.Component {
  shoot = () => {
     alert('great shot !');
 }
    render() {
        return(
    <div class="container">
        <button class="btn btn-info" onClick={this.shoot}> click me </button>
    </div>
        );
    }
}

// Passing value in Parameter //

class Mainball extends React.Component {
    takes = (a,b) => {
       alert('first name -'+ ' ' + a +' ' + 'last name -' + b);
   }
      render() {
          return(
      <div class="container">
          <p>passing argument with onClick functions</p>
          <button class="btn btn-info" onClick={() => this.takes('shubham','tiwari')}> Passing argument </button>
      </div>
          );
      }
  }
  


export  {Football,Mainball};