
import styled from "styled-components"

const Select = styled.select`

  padding: .5rem;
  border-radius: 30px;
  background:#1C5253;
  color: #fff;
  font-weight: bold;
  border: none;
  position: relative;
  :hover, :focus {
    outline: none;
    box-shadow: 0 0 0 2px #fff, 0 0 0 3px #1C5253;
  }
  >option{
    position: absolute;
    margin: 2rem 0;
}
`

export { Select }