
import React from 'react'
import { ContextStates } from '../../../globalStates/context'
import { Div } from '../../../style/styledDiv'

 const BarExpenses = () => {
  const {data,setWeekAct} = React.useContext(ContextStates)

  return (
    <Div flexColum alg ="end" justcont="end" mb="3" heightDiv ="300" borderB ="2px solid #B6174B" borderR = "0"> 


    <Div flexColum>

      <Div flexBetween alg ="end" justcont="start"> 
      {data && setWeekAct().map((item)=> (
        <Div key={item.id} first flexBetween width = "58" 
        heightDiv={(item.amount*3)}
        after
        info={item.amount}
        />
      ))}
      </Div>
       
      <Div flexBetween alg ="end" justcont="start" mb="2" > 
      {data && setWeekAct().map((item)=> (
        <Div key={item.id} flexBetween width = "58"  justcont="center"
        >{item.weekday}</Div>
      ))}
      </Div>
    </Div>

    </Div>
    )
}

export { BarExpenses }