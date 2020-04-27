
import React, { useEffect, useRef, useState } from 'react';


//function UseRefs() {
  //  const inputRef = useRef(null);

    //useEffect(() => {
      //  inputRef.current.focus();
    //}, []);

    //return (
      //  <input type="text" ref={inputRef} />
  //  );
//}


//export default UseRefs;

function HookTimer () {
    const [timer, setTimer] = useState(0);
      const InteralHook = useRef();

   useEffect(()=>{
    InteralHook.current = setInterval(() => {
     setTimer(prevTimer => prevTimer + 1 );  
  }, 1000);
  return () => {
      clearInterval(InteralHook.current);
  };
   }, []);

    return (
        <div>
        CountTimer-- {timer}
        <button onClick={() => clearInterval(InteralHook.current)}>click to stop function</button>
        </div>
    );
}


export default HookTimer;
