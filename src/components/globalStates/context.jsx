
import React from "react"

const ContextStates = React.createContext()

const ContextProvider = ({children}) => {
  const [data, setData] = React.useState()
  const weekday = ["mon","tue","wed","thu","fri","sat","sun"]
  const [week, setWeek] = React.useState('01/05')
  const [actWeek, setActWeek] = React.useState({})
  const [balance, setBalance] = React.useState("1500")
  const dataBase = fetch("http://localhost:8082/")

  //Fetch API
  React.useEffect(() => {
    async function setar() {
      const dados = await (await dataBase).json()
      setData(dados)
    }
    setar()
  },[])
  //setStates
  const setOfWeek = (data) => {
    setWeek(data)
  }

  const setOfBalance = (data) =>{
    setBalance(data)
  }

  //useEffects

  // React.useEffect(()=>{
  //   const setWeekAct =() => {
  //     data.filter(item => {
  //       if(item.weekmonth == week) {
  //           return item
  //       }
  //     })
  //   }
  //   setActWeek(setWeekAct())
  // },[week])

  // functions

    const setWeekAct =() => {
      let res = data.filter(item => {
        if(item.weekmonth == week) {
            return item
        }
      })
        return res
    }

  
  const DATA = {
    data,balance,setOfBalance, week, setOfWeek,actWeek,
    setWeekAct,weekday,
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

