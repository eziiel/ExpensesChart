
import React from "react"

const ContextStates = React.createContext()

const ContextProvider = ({children}) => {
  const [data, setData] = React.useState()
  const [balance, setBalance] = React.useState("1500")
  const dataBase = fetch("http://localhost:8082/")

  React.useEffect(() => {

    async function setar() {
      const dados = await (await dataBase).json()
      setData(dados)
    }
    setar()
  },[])

  const setOfBalance = (date) =>{
    setBalance(balance)
  }



  
  const DATA = {
    data,balance,setOfBalance,
  }

  return (
    <ContextStates.Provider value={DATA}>
      {children}
    </ContextStates.Provider>
  )
}

export {
  ContextStates,
  ContextProvider
}

