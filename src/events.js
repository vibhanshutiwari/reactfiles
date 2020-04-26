
import React, {useState} from 'react';
import HookMouse from './Result';



function CleanUp () {
   const [display, setdisplay] = useState(true);

    return (
        <div>
            <button onClick={() => setdisplay(!display)}>Toggle Display</button>
            {display && <HookMouse />}
        </div>
    );
}

export default CleanUp; 


