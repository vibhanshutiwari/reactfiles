import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'Reset':
      return initialState
    default:
      return state
  };
}

function Main() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countOne, dispatchOne] = useReducer(reducer, initialState);
  return (
    <div className="container">
      Count : {count}
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('Reset')}>Reset</button>

      <div className="container">
        Countone : {countOne}
        <button onClick={() => dispatchOne('increment')}>Increment</button>
        <button onClick={() => dispatchOne('decrement')}>Decrement</button>
        <button onClick={() => dispatchOne('Reset')}>Reset</button>
      </div>
    </div>
  );
}

export default Main;



