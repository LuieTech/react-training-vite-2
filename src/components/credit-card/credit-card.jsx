import "./credit-card.css" 

function CreditCard({type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color}) {

    const VISA_IMG = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1920px-Visa_Inc._logo.svg.png"
    const MASTERCARD_IMG = "https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
    
    const MONTH = expirationMonth.toString().padStart(2, "0")
    const YEAR = expirationYear.toString().slice(-2)


  return (

    <div className="credit-card" style={{backgroundColor: bgColor, color}}>
      <img className="credit-card-logo"
        src={type === 'Visa' ? VISA_IMG : MASTERCARD_IMG} 
        alt="CardType-Image" 
      />
      <p className="credit-card-num">**** **** **** {number.toString().slice(-4)}</p>
      <div className="credit-card-info">
        <div className="credit-card-expire" >
          Expires {MONTH}/{YEAR}
          {" "} 
          <p>{bank}</p>
        </div>
        <p className="credit-card-name">{owner}</p>

      </div>
      
    </div>
  )

}

export default CreditCard