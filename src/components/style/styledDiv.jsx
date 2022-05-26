import styled from "styled-components"
import { css } from "styled-components"

const Div = styled.div`

  width: ${(props) =>props.width? `${props.width}px`: "500px"};
  height: ${(props) => `${props.heightDiv}px`};
  padding: ${(props) => `${props.paddiv}rem`};
  margin-bottom: ${(props) => `${props.mb}rem`};
  border-radius: ${(props) => props.borderR?`${props.borderR}px`: "20px"};
  
  background:${(props) => props.first?"#C3EB78":"#fff"};

  border-bottom: ${(props) => `${props.borderB}`};

  ${(props) => props.flexBetween && css`
    display: flex;
    justify-content: ${(props) =>props.justcont? `${props.justcont}`: "space-between"};
    align-items: ${(props) => `${props.alg}` || "center"};
    /* align-content: center; */
    gap: 1rem;
    position :relative;
    `}

  ${(props) => props.flexColum && css`
    display: flex;
    flex-direction: column;
    justify-content: end;
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
    }

    ${(props) => props.after && css`  
      :hover {
        background:#B6174B;
      }
      &:hover:after {
        opacity:1;
      }
      &::after{
        opacity:0;
        content: "${(props) => props.info}";
        position:absolute;
        /* left:10%; */
        top:-40px;
        padding:.5rem;
        border-radius:20px;
        background: #31313145;
      }
      }
    `}
`

export {
  Div,
}