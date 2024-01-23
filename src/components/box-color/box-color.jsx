import "./box-color.css"

function rgbColorTo2DigitHex(r, g, b){

  return (
    "#" + 
    r.toString(16).padStart(2, "0") +
    g.toString(16).padStart(2, "0") +
    b.toString(16).padStart(2, "0")
  )

}


function BoxColor({r, g, b}){

  return <div className="box-color" style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
    <p>rgb({r}, {g}, {b})</p>
    <p>
      {rgbColorTo2DigitHex(r, g, b)}
    </p>
  </div>

}

export default BoxColor;