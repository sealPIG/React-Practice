// jotai
/**
 * React 狀態管理套件比較與原理實現 - https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/a-comparison-of-react-state-management-libraries-ba61db07332b
 * jotai github - https://github.com/pmndrs/jotai
 */

import { atom } from 'jotai'
import Outter from './Tools'

export default function Page4() {
  const count = atom(0)

  return (
    <Outter title='Page 4'>
          <button style={{ margin: '10px' }} onClick={stateHandleClick}>function Click</button>
          <p style={{ margin: '10px' }}>state Counter : {stateCount}</p>
    </Outter>
  )
}