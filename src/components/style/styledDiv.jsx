import styled from "styled-components"
import { css } from "styled-components"

const Div = styled.div`

  width: ${(props) =>props.width? `${props.width}px`: "500px"};
  /* height: 100px; */
  padding: ${(props) => `${props.paddiv}rem`};;
  margin-bottom: ${(props) => `${props.mb}rem`};
  border-radius: 20px;
  
  background:${(props) => props.first?"#C3EB78":"#fff"};

  ${(props) => props.flexBetween && css`
    display: flex;
    justify-content: ${(props) =>props.justcont? `${props.justcont}`: "space-between"};
    align-items: center;
    gap: 1rem;
  `}

  ${(props) => props.flexColum && css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${(props) =>props.right? `${props.right}`: "start"};
    gap: 1rem;
    `
  }
    h1{
      font-weight: ${(props) => props.weighth1};
      font-size: ${(props) => `${props.fonth1}rem`};
      padding: ${(props) => `${props.padh1}rem ${props.padh12}rem`};
    }
    span{
      font-size: ${(props) => `${props.fontspan}rem`};
      font-weight: bold;
      /* text-align: ${(props) => `${props.right}`}; */
    }
`

  const DivBar = styled.div`
    background: red;

    display: flex;
    justify-items: left;
    align-items: end;
  

  `


export {
  Div,
  DivBar
}