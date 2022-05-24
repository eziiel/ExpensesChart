
import React from "react"

const ContextStates = React.createContext()

const ContextProvider = ({children}) => {
  const [data, setData] = React.useState()
  const [week, setWeek] = React.useState('01/05')
  const [balance, setBalance] = React.useState("1500")
  const [totalMonth, setTotalMonth] = React.useState(0)
  const [totalWeek, setTotalWeek] = React.useState(0)
  const weekday = ["mon","tue","wed","thu","fri","sat","sun"]
  const dataBase = fetch("http://localhost:8082/")
  
  const [total, setTotal] = React.useState([])
  let monthActual = new Date().getMonth() + 1


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

  React.useEffect(()=>{
    const ValueTotal = (value,inf) => {
      if (!data) return
      let mar = inf
      let max = value.length - 1
      if(mar <= value[max].weekmonth.slice(-1)) {
    
      let res = value.filter(item => {
          return item.weekmonth.slice(-1) == mar
          
      })
      setTotal((total) => total = [...total, {[mar]:res}])
      
      data && ValueTotal(value,mar+1)
    } else {
          return
       }
    }
    ValueTotal(data,monthActual)
  },[data])

  data && console.log(total)

  //functions
  //set week
  const setWeekAct =() => {
    let res = data.filter(item => {
      if(item.weekmonth == week) {
          return item
      }
    })
      return res
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
  React.useEffect(()=>{
    const setarTotal =() => {
      if (!data) null
      
        let res = data.reduce((a,item) => {
        return a += item.amount 
      },0)
      setTotalMonth(res.toFixed(2))
    }
    data && setarTotal()
  },[data])




  
  const DATA = {
    data,balance,setOfBalance, week, setOfWeek,
    setWeekAct,weekday, totalWeek, totalMonth,total
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

