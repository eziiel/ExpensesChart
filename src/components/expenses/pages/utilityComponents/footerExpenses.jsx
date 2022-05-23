import { Div } from "../../../style/styledDiv"

const FooterSec =({txt,total,percent,comparation}) => {
  
  
  return (
    <Div flexBetween mb='2'>
    <Div flexColum padh1="0" padh12="0">
      <h1>
        {txt}
      </h1>
      <span >
        R$ {total}
      </span>
    </Div>

    <Div flexColum fontspan="1" right="end">
      <h1>+ {percent} %</h1>
      <span>{comparation}</span>
    </Div>
  </Div>
  )
}

export { FooterSec }