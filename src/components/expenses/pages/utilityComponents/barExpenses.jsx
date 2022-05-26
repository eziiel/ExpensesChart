
import React from 'react'
import { ContextStates } from '../../../globalStates/context'
import { Div } from '../../../style/styledDiv'

 const BarExpenses = () => {
  const {data,setWeekAct,weekday} = React.useContext(ContextStates)

  return (
    <Div flexColum alg ="end" justcont="end" mb="3" heightDiv ="300" borderB ="2px solid #B6174B" borderR = "0"> 

    
      <Div flexBetween alg ="end" justcont="start"> 
      {data && setWeekAct().map((item)=> (
        <Div key={item.id} first flexBetween width = "58" 
        heightDiv={(item.amount*3)}
        after
        info={item.amount}
        />
      ))}
      </Div>


      <Div flexBetween alg ="end">
      {data && weekday.map((item) => (
        <Div key={item}  flexColum width="58" right="center" height="100">
           <h1>{item}</h1>
         </Div>
      ))}
      </Div>




    </Div>

   





  // {data && setWeekAct().map((item)=> (
  //       <Div first flexBetween width="58" right="center" height={item.amount} >
  //         <span key={item.id} title={item.amount}></span>
  //         </Div>
  //     ))}
    //   {data && weekday.map((item) => (
    //     <Div key={item} first flexColum width="58" right="center">
    //       <h1>{item}</h1>
    //     </Div>
       
      // </Div>
    )
}

export { BarExpenses }