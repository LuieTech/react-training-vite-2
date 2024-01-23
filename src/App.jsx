import BoxColor from "./components/box-color/box-color";
import ClickablePicture from "./components/clickable-picture/clickable-picture";
import Counter from "./components/counter/counter";
import CreditCard from "./components/credit-card/credit-card";
import Dice from "./components/dice/dice";
import DriverCard from "./components/driver-card/driver-card";
import Greetings from "./components/greetings/greetings";
import IdCard from "./components/id-card/id-card";
import LikeButton from "./components/like-button/like-button";
import Random from "./components/random/random";
import Rating from "./components/rating/rating";
// import '../src/assets/images'


function App(){

  return (
      <div>
        <IdCard />
        <Greetings lang="de">Mario</Greetings>
        <Greetings lang="fr">François</Greetings>
        <Random min={30} max={42}/>
        <Random min={1} max={10}/>
        <BoxColor r="255" g="0" b="0" />
        <BoxColor r="128" g="255" b="0" />
        <BoxColor r="0" g="0" b="255" />
        <hr />
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white" 
        />
            
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
            
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white" 
        />
        <hr />
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
        <hr />
        <Counter />
        <hr />
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE"
          }}
        />

        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: "Audi A3",
            licensePlate: "BE33ER"
          }}
        />
        <hr />
        <LikeButton />
        <LikeButton />
        <hr />
        <ClickablePicture
          img='maxence.png'
          imgClicked='maxence-glasses.png'
        />
        <hr />
        <Dice />
      </div>
    )

}

export default App;