
import Youtube from "./Youtube"
import { useState } from "react"

function App() {
  const [color, setColor] = useState('cyan')

  const bgChange = (color) => {
    setColor(color)
  }

  return (
    <>
      <div className="w-full h-screen duration-500" style={{background: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button onClick={() => setColor('red')} className="outline-none px-4 py-2 rounded-full shadow-lg text-black bg-red-800">Red</button>
            <button onClick={() => bgChange('green')} className="outline-none px-4 py-2 rounded-full shadow-lg text-black bg-green-800">Green</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
