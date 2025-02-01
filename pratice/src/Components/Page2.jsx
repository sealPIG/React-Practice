import { Provider } from 'react-redux'
import { Outter } from './Tools'
import { reduxStore } from '../Redux/components'
import { Param } from '../Redux/functions'

export default function Page2() {
  return (
    <Outter title='Page 2' subTitle='redux'>
      <Provider store={reduxStore}>
        <Param />
      </Provider>
    </Outter>
  )
}