import "./random.css"

function Random({min, max}){

  const minNum = Number(min);
  const maxNum = Number(max)

  let randomNumber = Math.floor(Math.random() * (maxNum - minNum)+ minNum)

  return <div className="border-random">
    Random value between {min} and {max} = {randomNumber}
  </div>

}

export default Random;