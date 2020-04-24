import React from 'react';
import './App.css';


class App extends React.Component {
    render() {
        return(
            <div>
             <Tables />
             <Show />
            </div>
        );
    }
}

  function Show() {
   const styles = {
       color: 'red',
     };

    return (
        <React.Fragment>
          <h4 style = {styles} >FragmentDemo</h4>
          <p>This describe the fragment demo Component.</p>
          </React.Fragment>
    );
  }

  function Tables() {
    return (
      <table>
        <tbody>
          <tr>
        <Column />
          </tr>
        </tbody>
      </table>
    );
  }
  
  
    function Column() {
      return (
      <>
        <td>Name</td>
        <td>Shubham</td>
      </>
      );
    }

    export default App;

 


