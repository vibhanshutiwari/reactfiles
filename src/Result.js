import React from 'react';
import withCounter from './events';


class ClickCounter extends React.Component {
      render() {
        const {count, incrementCount} =  this.props;
          return (
              <div>
                  <button onClick={incrementCount}>click {count} time</button>
              </div>
          );
      }
  }
  
  export default withCounter(ClickCounter);
  

  