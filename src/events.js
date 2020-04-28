import  {useState} from 'react';
//import useDocument from './Result';


//function Counter() {
  //  const [count, setCount] = useState(0);

    //useDocument(count) 
   // return (
   // <button onClick={() => setCount(count + 1)}>click {count}</button>
    //);
// }

 //export default Counter;


 function CounterOne () {
    const [add , setAdd] = useState(0);
    
    const incrementValue = () => {
        setAdd(prevAdd => prevAdd + 1);
    }
    
    const decrementValue = () => {
        setAdd(prevAdd => prevAdd - 1);
    }
    
    const clearValue = () => {
        setAdd(0);
    }
    
   return [add , incrementValue, decrementValue, clearValue]

 }

 export default CounterOne;