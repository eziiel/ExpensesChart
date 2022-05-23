
import React from 'react'
import { ContextStates } from '../../globalStates/context'
import { Div } from '../../style/styledDiv'
import { Main } from '../../style/styledMain'
import { BarExpenses } from './utilityComponents/barExpenses'
import { FooterSec } from './utilityComponents/footerExpenses'
import { HeaderExpenses } from './utilityComponents/headerExpenses'

 const ExpenseChart = () => {
  const [totalMonth, setTotalMonth] = React.useState(0)
  const [totalWeek, setTotalWeek] = React.useState(0)
  const {data, setWeekAct, week,actWeek} = React.useContext(ContextStates)

  
  React.useEffect(()=>{
    const setarTotal =() => {
      // if (!data)  null
      
        data.reduce((a,item) => {
        a += item.amount 
        setTotalMonth(a)
        return a
      },0)
    }
    data && setarTotal()
  },[data])
 
  React.useEffect(()=>{
    const setarTotalWeek =() => {
      if (setWeekAct().length == 0) null

        setWeekAct().reduce((a,item) => {
        a += item.amount 
        setTotalWeek((a).toFixed(2))
        return a
      },0)
    }
    data && setarTotalWeek()
  },[data,week])


  return (
    <Main flexColum fonth1="1" weighth1="bold" paddiv="2" fontspan="2.5" padh1="1" padh12="0">

        <HeaderExpenses/>

        <BarExpenses />

        <FooterSec 
        total={totalMonth} 
        txt="Total this month"
        percent="2.5"
        comparation="from last month"
        />
        <FooterSec 
        total={totalWeek || 0} 
        txt="Total this week"
        percent="2"
        comparation="from last week"
        />

    </Main>
  )
}

export { ExpenseChart }