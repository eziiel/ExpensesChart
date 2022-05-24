
import React from 'react'
import { ContextStates } from '../../../globalStates/context'
import { Select } from '../../../style/inputSelect'
import { Div } from '../../../style/styledDiv'

const HeaderExpenses = () => {
  const data = React.useContext(ContextStates)

  const handleWeek =(e) => {
    data.setOfWeek(e.target.value)
  }

  return (
    <Div flexBetween>
      <h1 >
        Spending - Last 7 days
      </h1>
      <Select onChange={handleWeek} name="week" value={data.week}>
        <option value="01/05" >first week - may</option> 
        <option value="02/05">second week - may</option>
        <option value="03/05">third week - may</option>
        <option value="04/05">fourth week - may</option>
      </Select>
    </Div>

  )
}

export { HeaderExpenses }