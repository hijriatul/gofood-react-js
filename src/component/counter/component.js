import React, { useState } from 'react';

function Counters(props) {
  const [number, setNumber] = useState(100);
  return (
    <React.Fragment>
      <h1>Hello World</h1>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={() => setNumber(number - 1)}>-</button>
    </React.Fragment>
  );
}

export default Counters;
