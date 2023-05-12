import { useState } from 'react'
import { Checkout } from "./components/Checkout";

function App() {
  const [user, setUser] = useState({
    name: "Wagner"
  })

  return (

      <div className="App">
        <p>Seja bem vindo {user.name}</p>
        <Checkout userName={user.name}/>

      </div>
       

  )
}

export default App
