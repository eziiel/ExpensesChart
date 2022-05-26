
import React from 'react'
import { ContextStates } from '../../../globalStates/context'
import { Select } from '../../../style/inputSelect'
import { Div } from '../../../style/styledDiv'

const HeaderExpenses = () => {
  const {data,setOfWeek,week} = React.useContext(ContextStates)
  const [weeks, setWeeks] = React.useState()
  const handleWeek =(e) => {
    setOfWeek(e.target.value)
  }


  React.useEffect(() => {

  const setarSemana = ()=>{
    if(!data) return null

    let arrSemana = data.map(item => item.weekmonth)
    let WeeFinal = arrSemana.filter((a,i) => arrSemana
    .indexOf(a) === i)
      setWeeks(WeeFinal)
  }
  data && setarSemana()
  },[data])


  return (
    <Div flexBetween>
      <h1 >
        Spending - Last 7 days
      </h1>
      <Select onChange={handleWeek} name="week" value={week}>
       
       {weeks && weeks.map((item)=>(
         <option key={item} value={item} >{item}</option> 
       ))}
       

      </Select>
    </Div>

  )
}

export { HeaderExpenses }