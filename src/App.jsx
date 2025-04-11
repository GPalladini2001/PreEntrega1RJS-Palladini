import { useState } from "react"
import { Boton, Header, ItemListContainer,} from "./components"

function App() {

  const [count, setCount] = useState(0)

  const sumar = () => {
    setCount(count + 1)
  }

  const restar = () => {
    setCount(count - 1)
  }

  return (
    <>
      <Header/>
      <Boton label = {"Sumar"}
      type = {"success"}
      onClick={sumar}/>
      <h1>{count}</h1>
      <Boton label = {"Restar"}
      type = {"danger"}
      onClick={restar}/>   
      <ItemListContainer/> 
    </>
  )
}

export default App
