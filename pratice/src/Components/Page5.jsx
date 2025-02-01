import { Provider } from 'react-redux'
import { Outter } from './Tools'
import { incremented, decremented } from '../Redux/anotherType'

export default function Page5() {
  return (
    <Outter title='Page 2' subTitle='redux'>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '30vw', paddingRight: '30vw' }}>
      <div style={{ width: 'auto', display: 'inline-grid' }}>
        <button style={{ margin: '10px' }} onClick={stateHandleClick}>function Click</button>
        <button style={{ margin: '10px' }} onClick={() => setStateCount(stateCount + 1)}>useState Click me</button>
        <button style={{ margin: '10px' }} onClick={refHandleClick}>useRef Click</button>
      </div>
        <p style={{ margin: '10px' }}>ref Counter : {refCount.current}</p>
      </div>
    </div>
    </Outter>
  )
}