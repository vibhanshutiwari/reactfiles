
import React from 'react';



    class NewComponent extends React.Component {
        render() {
            const {count, changeValue} = this.props;
            return (
                <div>
                    <button onClick={changeValue}> click {count} time</button>
                    <p onMouseOver= {changeValue}>Hover{count} time</p>
                </div>
            );
        }
    }
    


export default NewComponent;


