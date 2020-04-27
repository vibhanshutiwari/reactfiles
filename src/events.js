
import React, { useState, useMemo } from 'react';

// Callback with useState //

function CallBacks() {
    const [age, setAge] = useState(20);
    const [salary, setSalary] = useState(20000);

  const ageHandler = () => {
        setAge(age + 1);
    }

   const salaryHandler = () => {
        setSalary(salary + 2000);
    }

const isEven = useMemo(() => {
    let i = 0;
    while( i < 200000) i++
    return age % 2 === 0
  }, [age]);

    return (
        <div className="container">
            <span> Show Even and Odd .. {isEven ? 'even' : 'odd'}</span>
            <button onClick={ageHandler}>Increment Age {age}</button>
            <button onClick={salaryHandler}>Increment Salary {salary}</button>
        </div>
    );
}

export default CallBacks;
