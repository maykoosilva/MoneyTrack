import { useState } from "react"
import FormNovaDespesa from "./components/nova-despesa/FormNovaDespesa"

function App() {

  const [NovaDespesa, setNovaDespesa] = useState({
    nomeDespesa: "",
    valorDespesa: "",
  })

  return (
    <>
      <section>
        <FormNovaDespesa/>
      </section>
    </>
  )
}

export default App
