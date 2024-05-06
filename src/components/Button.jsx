import { useState } from "react"


function Button() {
   // const [] =useState("")
    const clickme=() => {
        alert("click me")        
    }
    const add =() => {
        console.log()
    }
  return (
   <>
   <button onClick={clickme}>click me</button>
   <br></br>
   <button onClick={() => alert("you clicked me again")

   }>click me again</button>
   <br></br>
   <button>add</button>
   </>
  )
}

export default Button