import React from "react"
import { ContextStates } from "./context"

const Data =() =>{
  const {data,setOfDataFinal,months,weeks,mountAct,weekAct} = React.useContext(ContextStates) 
  const [actualMonth, setActualMont] = React.useState(new Date().getMonth() + 1)


  let dados =[]
  let semanas = {}


  //Effects
  React.useEffect(() => {
    dados && setOfDataFinal(dados)
  },[data])
  //others

  if (!data) return null
  const novo = (value, weekD, monthD) => {
    let weekly = `0${weekD}/0${monthD}`
    let total = 0
  
        if(weekD <= 4) {
          value.map(item => {
              if (weekly == item.weekmonth) {
                   total += item.amount   
              }
          })
            semanas = {...semanas, [weekAct(weekD)]:total}
          novo(value, weekD+1,monthD)
        } else {
      return
        }
      return semanas
  }
  const finalAlt = (values,inf = actualMonth) => {
     if(inf <= values[values.length-1].weekmonth.slice(-1)) {
  
    values.filter(item => {
        return item.weekmonth.slice(-1) == inf
    })
    dados = [...dados,{[mountAct(inf)]:novo(values,1,inf)}]
    
    finalAlt(values,inf+1)
  } else {
        return
     }
  }

  data && actualMonth && finalAlt(data)

  return <></>
}

export { Data }