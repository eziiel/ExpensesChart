
import React from "react"

const ContextStates = React.createContext()

const ContextProvider = ({children}) => {
  const [data, setData] = React.useState()
  const [dataFinal, setDataFinal] = React.useState()
  let monthActual = new Date().getMonth() + 1
  const [week, setWeek] = React.useState(`01/0${monthActual}`)
  const [balance, setBalance] = React.useState("1500")
  const [totalMonth, setTotalMonth] = React.useState(0)
  const [totalWeek, setTotalWeek] = React.useState(0)
  const dataBase = fetch("http://localhost:8082/")
  
  const months = {
    Jan:1,
    Feb:2,
    Mar:3,
    Apr:4,
    May:5,
    Jun:6,
    Jul:7,
    Aug:8,
    Sep:9,
    Oct:10,
    Nov:11,
    Dec:12,
  }

  const weeks = {
    semana1 :1,
    semana2 :2,
    semana3 :3,
    semana4 :4,
  }
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

  const setOfDataFinal = (value) => {
    setDataFinal(value)
  }


  //functions
  //set week
  const setWeekAct =(value = week) => {
    if(!data) return null
    let res = data.filter(item => {
      if(item.weekmonth == value) {
          return item
      }
    })
      return res
  }
  // sett propies of names
  const mountAct=(value) =>{
    for (var i in months) {
      if (months[i] == value) {
        return i
      }
    }
  }
  
  const weekAct=(value) =>{
    for (var i in weeks) {
      if (weeks[i] == value) {
        return i
      }
    }
  }

  
  //useEffects
  //----------------set of total month
  React.useEffect(()=>{
    const setarTotalWeek =() => {
      if (!setWeekAct()) null

        let res = setWeekAct().reduce((a,item) => {
        return a += item.amount 
      },0)
      setTotalWeek(res.toFixed(2))
    }
    data && setarTotalWeek()
  },[data,week])
  //----------------set of total week
  
  
  
  const setOfTotalMonth =(month = week.slice(-1)) => {
    if (!data) return null
    let res = data.filter(item => item.weekmonth.slice (-1)== month).reduce((a,item) => a+=item.amount,0)
    return res.toFixed(2)
  }
  
  React.useEffect(()=>{
    setTotalMonth(setOfTotalMonth())
  },[data,week])  


  const DATA = {
    data,balance,setOfBalance, week, setOfWeek,setOfDataFinal,
    setWeekAct, totalWeek, totalMonth, months, weeks,
    mountAct, weekAct, setOfTotalMonth
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

