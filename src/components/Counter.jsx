import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../redux-toolkit/features/counter/CounterSlice';

function Counter() {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <h2>{count}</h2>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}

export default Counter
