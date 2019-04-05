import styled from 'styled-components'

const HeaderStyle = styled.header`
  position: fixed;
  width: 100vw;
  background: ${p => p.theme.secondaryDark};
  border-bottom: 1px solid ${p => p.theme.primary};
`

export default HeaderStyle
