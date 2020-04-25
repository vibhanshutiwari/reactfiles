import React from 'react';


class Counter extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          count: 0
      }
}
changeValue =() => {
    this.setState(prevstate => {
        return {count: prevstate.count +1 } 
    });
}
    render() {
        return(
            <div>
                {this.props.render(this.state.count, this.changeValue)};
            </div>

        );
    }
}

export default Counter;





  