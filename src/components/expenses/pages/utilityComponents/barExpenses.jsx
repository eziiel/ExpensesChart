
import React from 'react'
import { ContextStates } from '../../../globalStates/context'
import { Div } from '../../../style/styledDiv'

 const BarExpenses = () => {
  const {data} = React.useContext(ContextStates)
 
  console.log(data)
  return (
    
    <Div flexBetween justcont="start" mb='2'>
      
        <Div first flexColum width="58" right="center">
          <span>aa</span>
          <h1>mon</h1>
        </Div>
       
      </Div>
    )
}

export { BarExpenses }