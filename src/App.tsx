import { Checkout } from "./components/Checkout";
import { Profile } from "./components/Profile";
import { useUser } from './context/UserContext';

function App() {
  const user = useUser()

  return (

      <div className="App">
        <p>Seja bem vindo {user.name}</p>
        <Checkout/>
        <Profile />

      </div>
       

  )
}

export default App
