
import React, { useState } from 'react';

function CallBacks() {
    const [age, setAge] = useState(20);
    const [salary, setSalary] = useState(20000);

  const ageHandler = () => {
        setAge(age + 1);
    }

   const salaryHandler = () => {
        setSalary(salary + 2000);
    }

    return (
        <div>
            Age: {age}
            <button onClick={ageHandler}>Increment Age</button>
            Salary: {salary}
            <button onClick={salaryHandler}>Increment Salary</button>
        </div>
    );
}

export default CallBacks;
