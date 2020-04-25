
import React from 'react';
import { UserConsume } from './Result';



class NewComponent extends React.Component {
    render() {

        return (
            <div>
                <UserConsume>
                    {username => {
                        return  <div className="container"> Hello {username} </div>
                    }}
                </UserConsume>
            </div>
        );
    }
}
    



export default NewComponent;


