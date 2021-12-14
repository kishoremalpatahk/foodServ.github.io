
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./componets/Login"
import { Routing } from "./route/Routing"

export function App() {
  var data = sessionStorage.getItem("login");
  {
 
      if (data === "true") {
        return (
          <Routing />
        )
      }
      else {
        return (
          <Login />
        )
      }
    
  }
}

export default App;


// to run server cmd npx json-server --watch data.json --port 8000