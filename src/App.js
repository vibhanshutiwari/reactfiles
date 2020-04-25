import React from 'react';
import './App.css';

import NewComponent from './events';
import Counter from './Result';




class App extends React.Component {
    render() {
        return (
            <div>
                <Counter  render= {(count, changeValue) =>(
               <NewComponent count = {count} changeValue = {changeValue} />
                )}/>
            </div>
        );
    }
}



export default App;




