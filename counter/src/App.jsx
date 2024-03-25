import './App.css'
import Counter from './component/Counter'

function App() {

  return (
    <Counter>
      <Counter.Label label="Counter App" />
      <Counter.Count />
      <div className='btn'>
        <Counter.Increment icon="Increment" />
        <Counter.Decrement icon="Decrement" />
      </div>

    </Counter>
  )
}

export default App
