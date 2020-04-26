import React, { useState, useEffect } from 'react';



// Conditionally run effect //

//function CounterHookone() {
  //  const [name, setname] = useState(0);
   // const [count, setcount] = useState('');

   // useEffect(() => {
     //   console.log('useEffect -- updateing document title')
       // document.title = `You clicked ${name} timmes.`
   // },[name]);

   // return (
     //   <div>
       //     <input type="text" value={count}
         //       onChange={e => setcount(e.target.value)} />
           // <button onClick={() => setname(name + 1)}>click {name}</button>
       // </div>
   // );
// }

// export default CounterHookone;


function HookMouse () {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = e => {
      console.log('mouseevents')
      setX(e.clientX)
      setY(e.clientY)
  }

useEffect (() => {
    console.log('useEffect called');
    window.addEventListener('mousemove', logMousePosition );

 return () => {
   console.log('Component unMounting code');
   window.removeEventListener('mousemove', logMousePosition);
 }
}, []);

    return (
         <div className="container">
       Hooks X- {x} Y- {y}
         </div>
    );
}

export default HookMouse;