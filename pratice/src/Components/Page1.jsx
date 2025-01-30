// usestate, useffect, 生命週期

import { useState, useEffect } from 'react';
import Outter from './Tools'

export default function Page3() {
  console.log('[Page 1] Render');

  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);
    console.log('[Page 1] Mounting ' + count);
  }, []);

  useEffect(() => {
    console.log('[Page 1] Updating ' + count);

    return () => {
      console.log('[Page 1] Unmounting ' + count);
    }
  }, [count]);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <Outter title='Page 1'>
      <p>This is usestate and useEffect test</p>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px' }}>
        <div style={{ width: 'auto', display: 'inline-grid' }}>
          <button style={{ margin: '10px' }} onClick={handleClick}>Click me</button>
          <button style={{ margin: '10px' }} onClick={() => setCount(count + 1)}>Click me</button>
        </div>
        <p style={{ margin: '10px' }}>Counter : {count}</p>
      </div>
    </Outter>
  );
}