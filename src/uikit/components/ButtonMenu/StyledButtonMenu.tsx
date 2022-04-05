import styled from 'styled-components'

const StyledButtonMenu = styled.div`
  background-color: #E8ECF0;
  border-radius: 16px;
  display: inline-flex;
  align-items: center;
  padding: 0px;
  box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.1);
  & > button + button,
  & > a + a {
    margin-left: 2px; // To avoid focus shadow overlap
  }
`

export default StyledButtonMenu
