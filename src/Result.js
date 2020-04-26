import React, { useState, useEffect } from 'react';





function HookMouse() {
  const [count, setCount] = useState(0);

  const countTime = () => {
    setCount(preveCount => preveCount + 1);
  }

  useEffect(() => {
    const Interval = setInterval(countTime, 1000);

    return () => {
      clearInterval(Interval);
    }
  }, []);

  return (
    <div className="container">
      {count}
    </div>
  );
}

export default HookMouse;