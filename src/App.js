import React from 'react';
import './App.css';


import { UserProvider } from './Result';
import NewComponent from './events';



class App extends React.Component {
    render() {
        return (
            <div>
                <UserProvider value='Chemistry'>
             <NewComponent/>
                </UserProvider>
            </div>
        );
    }
}



export default App;




