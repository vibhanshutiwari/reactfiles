import React from 'react';

// forceupdate function //
class Forces extends React.Component {
    constructor() {
        super();
        this.useforce = this.useforce.bind(this);
    }
    useforce = () => {
        this.forceUpdate();
    }
    render() {
        return (
            <div class="container">
                <button onClick={this.useforce}>force update</button>
                <h3> value: {Math.random()} </h3>
            </div>
        );
    }
}

export default Forces;