
import React from 'react'
import { ContextStates } from '../../globalStates/context'
import { Main } from '../../style/styledMain'
import { BarExpenses } from './utilityComponents/barExpenses'
import { FooterSec } from './utilityComponents/footerExpenses'
import { HeaderExpenses } from './utilityComponents/headerExpenses'

 const ExpenseChart = () => {
  
  const {data, week, totalWeek, totalMonth, setOfTotalMonth, setWeekAct} = React.useContext
  (ContextStates)




  const SetarPastMonth = () => {
    let pastMonth = week.slice(-1)-1
    let valuePastMonth = setOfTotalMonth(pastMonth)
    let res = 0

    if(valuePastMonth == 0  || valuePastMonth - totalMonth == 0 || totalMonth - valuePastMonth == 0) {
      return null
    } else if (valuePastMonth < totalMonth) {
      let calc = ((totalMonth - valuePastMonth)/valuePastMonth)*100
      res = `+${calc.toFixed(2)}`
    } else if (valuePastMonth > totalMonth) {
      let calc2 = ((valuePastMonth - totalMonth)/valuePastMonth)*100
      res = `-${calc2.toFixed(2)}`
    }
    return res
  }

  // console.log(setWeekAct('02/05'))

  const SetarTotalPastWeek =() =>{
    let pastWeek = week.slice(1,2)-1
    let value = `0${pastWeek}${week.slice(-3)}`
    let valuepastWeek = setWeekAct(value)
    let resp = 0 
    valuepastWeek && valuepastWeek.length > 0?valuepastWeek.reduce((a,i) => {
      a+=Number(i.amount)
      resp = a
      return a
    },0): 0
    return resp.toFixed(2)
  }



  const SetarPasWeek = () => {
    let valuepastWeek = SetarTotalPastWeek()
    let res = 0

    if(valuepastWeek == 0  || valuepastWeek - totalMonth == 0 || totalMonth - valuepastWeek == 0 || valuepastWeek == null) {
      return null
    } else if (valuepastWeek < totalWeek) {
      let calc = ((totalWeek - valuepastWeek)/valuepastWeek)*100
      res = `+${calc.toFixed(2)}`
    } else if (valuepastWeek > totalWeek) {
      let calc2 = ((valuepastWeek - totalWeek)/valuepastWeek)*100
      res = `-${calc2.toFixed(2)}`
    }
    return res
  }


  return (
    <Main flexColum fonth1="1" weighth1="bold" paddiv="2" fontspan="2.5" padh1="1" padh12="0">

        <HeaderExpenses/>

        <BarExpenses />

        <FooterSec 
        total={totalMonth} 
        txt="Total this month"
        percent={SetarPastMonth() || 0}
        comparation="from last month"
        />
        <FooterSec 
        total={totalWeek} 
        txt="Total this week"
        percent={SetarPasWeek() || 0}
        comparation="from last week"
        />

    </Main>
  )
}

export { ExpenseChart }