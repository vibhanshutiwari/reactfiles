import React from 'react';
import './App.css';
import Main from './Result';



export const UserContext = React.createContext()
export const ChannelContext = React.createContext()


class App extends React.Component {
    render() {
        return (
            <div>
                <UserContext.Provider value={'shubham'}>
                    <ChannelContext.Provider value={'tiwari'}>
                        <Main />
                    </ChannelContext.Provider>
                </UserContext.Provider>

            </div>
        );
    }
}



export default App;




