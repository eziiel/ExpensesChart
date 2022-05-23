import React from 'react'
import { ContextStates } from '../../globalStates/context'
import { Div } from '../../style/styledDiv'
import logo from "../../../images/logo.svg"

 const Header = () => {
  const {balance} = React.useContext(ContextStates)



  const balanceValue = Number(balance).toFixed(2)
  
  return (
    <Div mb="2" first flexBetween paddiv ="2">
      <Div first flexColum fontspan="2">
        <h1 weight="550" >My balance</h1>
        <span>$ {balanceValue}</span>
      </Div >
        <img src={logo} alt = "Logo" />
    </Div>
  )
}

export { Header }