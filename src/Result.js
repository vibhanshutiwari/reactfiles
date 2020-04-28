
 import React from 'react';
 import CounterOne from './events';



//function useDocument (count) {
   // useEffect(()=> {
    //    document.title = `Count ${count}`
  //  }, [count]);
//}

//export default useDocument;


function ReturnValue () {
 const  [add , incrementValue, decrementValue, clearValue] =  CounterOne();

    return ( 
        <div className="container">
        <h3>Count = {add} </h3>
        <button onClick={incrementValue}>increment</button>
        <button onClick={decrementValue}>decrement</button>
       <button onClick={clearValue}>clear</button>
       </div>
    );   
}

export default ReturnValue;