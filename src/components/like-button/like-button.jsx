import { useState } from "react";
import "./like-button.css"

const colors = ["purple", "blue", "green", "yellow", "orange", "red"]

function LikeButton(){

  const [num, setNum] = useState(0)
  const [colorIndex, setColorindex] = useState(0)


  return <>

      <button  onClick={() => {
        setNum(num + 1)
        setColorindex((colorIndex + 1) % colors.length)
        }} 
        
      style={{background:colors[colorIndex]}} 
    >
      {num} Likes
    </button>
 
  </>

}

export default LikeButton;