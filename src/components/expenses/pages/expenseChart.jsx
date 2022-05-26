
import React from 'react'
import { ContextStates } from '../../globalStates/context'
import { Main } from '../../style/styledMain'
import { BarExpenses } from './utilityComponents/barExpenses'
import { FooterSec } from './utilityComponents/footerExpenses'
import { HeaderExpenses } from './utilityComponents/headerExpenses'

 const ExpenseChart = () => {
  const {totalWeek, totalMonth} = React.useContext(ContextStates)


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
        total={totalWeek} 
        txt="Total this week"
        percent="2"
        comparation="from last week"
        />

    </Main>
  )
}

export { ExpenseChart }