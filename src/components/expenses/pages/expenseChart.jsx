
import React from 'react'
import { ContextStates } from '../../globalStates/context'
import { Div } from '../../style/styledDiv'
import { Main } from '../../style/styledMain'

 const ExpenseChart = () => {
  const [total, setTotal] = React.useState(``)
  const {data} = React.useContext(ContextStates)

  // data && console.log(typeof data[1].amount)

  
  
  React.useEffect(()=>{
    const setarTotal =() => {
      if (!data) null
      
      let x = data.reduce((a,item) => {
        a += item.amount 
        setTotal(a)
        return a
      },0)
    }
    data && setarTotal()
  },[data])

  // data && console.log(total)

  return (
    <Main flexColum fonth1="1" weighth1="bold" paddiv="2" fontspan="2.5" padh1="1" padh12="0">
      <h1 >
      Spending - Last 7 days
      </h1>

      <Div flexBetween justcont="start">
        
        <Div first flexColum width="58" right="center">
          <span>aa</span>
          <h1>mon</h1>
        </Div>
        <Div first flexColum width="58" right="center">
          <span>aa</span>
          <h1>mon</h1>
        </Div>
        <Div first flexColum width="58" right="center">
          <span>aa</span>
          <h1>mon</h1>
        </Div>
        <Div first flexColum width="58" right="center">
          <span>aa</span>
          <h1>mon</h1>
        </Div>
        <Div first flexColum width="58" right="center">
          <span>aa</span>
          <h1>mon</h1>
        </Div>
        <Div first flexColum width="58" right="center">
          <span>aa</span>
          <h1>mon</h1>
        </Div>
        {/* <Div first flexColum width="58" right="center">
          <span>aa</span>
          <h1>mon</h1>
        </Div> */}
        
       
      


      </Div>


      <Div flexBetween>
        <Div flexColum >
          <h1>
          Total this month
          </h1>
          <span >
            {data && total}
          </span>
        </Div>

        <Div flexColum fontspan="1" right="end">
          <h1>+2.5%</h1>
          <span>from last month</span>
        </Div>
      </Div>

    </Main>
  )
}

export { ExpenseChart }