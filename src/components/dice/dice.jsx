import { useState } from "react";
import diceImages from '../../data/dice-images'
import diceZero from '../../assets/images/dice-empty.png'

function Dice(){

  const [dice, setDice] = useState(diceImages[1])
  const randomDiceImage = diceImages[Math.floor(Math.random() * diceImages.length)]


  const handleClick = () => {

    setDice(diceZero)

    setTimeout(()=>{

      setDice(randomDiceImage);

    }, 1000);

  }

  return (
    <img 
      src={dice} 
      alt="clickable dice" 
      srcSet="" 
      style={{cursor: 'pointer', width:"100px"}}
      onClick={handleClick}  
    />
  )

}

export default Dice;

