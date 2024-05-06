import { useState } from "react"

function Add() {
    const [count,setCount]= useState (0)
    const increment = () => {
        setCount((count) => count +1)
        setCount((count) => count +1)

    }
    const decrement = () => {
        setCount(count -1)
    }
    const reset=() => {
        setCount(0)
    }

  return (
   <>
   <p>{count}</p>
   <button onClick={increment}>increment</button> 
   <button onClick={decrement}>decrement</button>
   <button onClick={reset}>reset</button>
   </>
  )
}

export default Add