function Rating({children}){


  const rounded = Math.round(children);
  const FilledStar = "★".repeat(rounded)
  const EmptyStar = "☆".repeat(5-rounded)



  return <div style={{fontSize:"50px"}}>{FilledStar}{EmptyStar}</div>
 

}

export default Rating;