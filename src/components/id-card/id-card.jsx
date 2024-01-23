
import data from "../../data/data.json"

function IdCard(){

  return (
    <div>
      {data.map((user, i) => (
        <Card 
          key={i}
          lastName={user.lastName}
          firstName={user.firstName}
          gender={user.gender}
          height={user.height}
          birth={user.birth}
          picture={user.picture}
        />
      ))}
    </div>
  )

}

function Card ({lastName, firstName, gender, height, birth, picture}) {

  const newbirthDate = new Date(birth)
  const birthDate = newbirthDate.toDateString();
 
    return <div className="card m-3" style={{width: "740px"}}>
            <div className="row g-0">
              <div className="col-md-4 d-flex p-2">
                <img src={picture} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <p className="card-text"><strong>First name: </strong>{firstName}</p>
                  <p className="card-text"><strong>Last name: </strong>{lastName}</p>
                  <p className="card-text"><strong>Gender: </strong>{gender}</p>
                  <p className="card-text"><strong>Height: </strong>{height}</p>
                  <p className="card-text"><strong>Birth: </strong>{birthDate}</p>
                </div>
              </div>
            </div>
          </div>
  

}

export default IdCard