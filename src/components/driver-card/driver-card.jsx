import "./driver-card.css"

function DriverCard({ name, rating, img, car }){


  const rounded = Math.round(rating);
  const FilledStar = "★".repeat(rounded)
  const EmptyStar = "☆".repeat(5-rounded)

  return <div className="driver-card">
    <div className="driver-image-wrapper">
     <img  src={img} alt="image" className="driver-image" style={{width:"200px", height:"200px"}}/>
    </div>
    <div className="driver-info">
      <h1>{name}</h1>
      <div style={{fontSize:"30px"}}>{FilledStar}{EmptyStar}</div>
      <h4>{car.model} - {car.licensePlate}</h4>
      
    </div>



  </div>

}

export default DriverCard;