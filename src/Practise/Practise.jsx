import React, { useState } from 'react';

function Practise() {
  // useState(0) ka matlab hai starting value 0 hai
  // count -> current value
  // setCount -> function jo count ko update karega
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1); // Value change hui, React screen refresh kar dega
  };

  return (
    <div>
      <p>Total Clicks: {count}</p>
      <button onClick={increment}>Click Me</button>
    </div>
  );
}


export default Practise ;