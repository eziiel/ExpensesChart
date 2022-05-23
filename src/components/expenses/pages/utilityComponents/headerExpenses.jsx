
import React from 'react'
import { Div } from '../../../style/styledDiv'

 const HeaderExpenses = () => {
  return (
    <Div flexBetween>
      <h1 >
        Spending - Last 7 days
      </h1>
      <select name="week">
        <option value="firstWeek" selected>first week</option>
        <option value="secondWeek">second week</option>
        <option value="thirdWeek">third week</option>
        <option value="fourthWeek">fourth week</option>
      </select>
    </Div>

  )
}

export { HeaderExpenses }