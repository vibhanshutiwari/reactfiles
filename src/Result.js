import React, { useState } from 'react';


// Hook function //

function HookCounter() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click me {count}</button>
        </div>
    );
}

//export default HookCounter;


// Increment random Number //

function HookOther() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const incrementValue = () => {
        for (let i = 0; i <= 5; i++) {
            setCount(prevCount => prevCount + 1);
        }
    }
    return (
        <div className="container">
            <button onClick={() => setCount(prevCount => prevCount.count + 1)}>Click me {count}</button>
            <button onClick={incrementValue} >New click</button>
        </div>
    );
}

// export default HookOther;


// Hook Object //

function StateHooks() {

    const [name, setname] = useState({ firstname: '', lastname: '', village: '' })

    return (
        <div className="container">
            <form>
                <p>firstname is -- {name.firstname} </p>
                <input type="text" value={name.firstname}
                    onChange={e => setname({ ...name, firstname: e.target.value })} />

                <p>lastname is -- {name.lastname} </p>
                <input type="text" value={setname.lastname}
                    onChange={e => setname({ ...name, lastname: e.target.value })} />

                <p>Village -- {name.village}</p>
                <input type="text" value={name.village}
                    onChange={e => setname({ ...name, village: e.target.value })} />
            </form>
        </div>
    );
}

//export default StateHooks;


// Hook Array //

function ArrayHooks() {
    const [iteam, setIteam] = useState([]);

    const addValue = () => {
        setIteam([...iteam, {
            id: iteam.length,
            Name: 'shubham',
            lived: 'mumbai'
        }]);
    }
    return (
        <div className="container">
            <button onClick={addValue}>click</button>
            <ul>
                {
                    iteam.map(value =>
                        <li>{value.id} {value.Name} {value.lived} </li>
                    )
                }
            </ul>
        </div>
    );
}

export default ArrayHooks;