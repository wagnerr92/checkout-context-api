import { Checkout } from "./components/Checkout";
import { Profile } from "./components/Profile";
import { useUser } from './context/UserContext';

function App() {
  const user = useUser()

  return (

      <div className="App">
        <p>Seja bem vindo {user.state.name}</p>
        <small>Seu token é: {user.state.token}</small>
        <p>Você clickou no botão {user.state.totalClicks} vezes</p>
        <Checkout/>
        <Profile />
      </div>
       

  )
}

export default App
