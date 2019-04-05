import styled from 'styled-components'

const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  min-height: 8rem;
  width: 100vw;
  background: ${p => p.theme.secondaryDark};
  border-bottom: 1px solid ${p => p.theme.primary};
  display: flex;
  align-items: center;
`

export default HeaderStyle
