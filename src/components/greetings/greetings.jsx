import './greetings.css';


function Greetings({lang, children}){

let greeting = ""
  
  switch(lang){
    case "de":
      greeting = "Hallo";
      break;
    case "en":
      greeting = "Hello";
      break;
    case "es":
      greeting = "Hola";
      break;
    case "fr":
      greeting = "Bonjour";
      break;
    default:
      greeting = "Hello"        
  }

  return (
    <div className="border-greeting">
      <div >{greeting} {children}</div>   
    </div>
  )
}

export default Greetings