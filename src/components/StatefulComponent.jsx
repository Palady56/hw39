import React, { useState } from 'react';

export default function StatefulComponent() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current count(stateful): {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};
