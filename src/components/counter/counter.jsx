import { useState } from "react"

let otherNum = 0 

function Counter(){

  const [num, setNum] = useState(0)

  return <>
      <div>
          num: {num}
      </div>
      <button onClick={() => {
        setNum(num + 1);
      }}>
        inc. state using setNum
      </button>

      <div>
        otherNum: {otherNum}
      </div>
      <button onClick={() => {
        otherNum++
        console.log(otherNum)
      }}>inc. state using Num</button>
  
  </>



}

export default Counter

