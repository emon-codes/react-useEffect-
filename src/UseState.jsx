import React from 'react'
import { useState } from 'react'

const UseState = () => {

  const [count, setCount] = useState(0);





  return (
   <div className='w-[80%] flex flex-col justify-center items-center'>

      <span>{ count}</span>

<button onClick={()=> setCount(count - 1000)} className='border border-amber-400'>click me</button>






   </div>






  )
}

export default UseState