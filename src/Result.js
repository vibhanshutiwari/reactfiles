import React, { useState, useEffect } from 'react';


function Counter() {

    const [name, setname] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${name} timmes.`
    })

    return (
        <button onClick={() => setname(name + 1)}>click {name}</button>
    );
}

export default Counter;
