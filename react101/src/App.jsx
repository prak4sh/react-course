
import Youtube from "./Youtube"
import { useState } from "react"

function App() {
  const [counter, setCounter] = useState(0)

  const addValue = () => {
    setCounter(counter + 1)
  }

  function removeValue(){
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Reach Course Aug 12</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
      <footer>Footer: {counter}</footer>
    </>
  )
}

export default App
