// usestate

import { useState } from 'react'

function Page1() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div style={{ width: '90vw', height: '70vh', borderRadius: '20px', padding: '2rem', border: '2px solid White' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px' }}>
        <h1>Page 1</h1>
      </div>
      <p>This useState test</p>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button style={{ margin: '10px' }} onClick={handleClick}>Click me</button>
        <p style={{ margin: '10px' }}>Counter : {count}</p>
      </div>
    </div>
  );
}

export default Page1