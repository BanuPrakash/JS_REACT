import {useSelector} from 'react-redux';
import Counter from './Counter';
function App() {
  let {count} = useSelector(state => state.counter);
  return (
    <div>
      Count State: {count} <br />
      <Counter/>
    </div>
  )
}

export default App
