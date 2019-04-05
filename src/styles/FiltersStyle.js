import styled from 'styled-components'

const FiltersStyle = styled.header`
  width: 100%;
  max-width: ${p => p.theme.maxWidth};
  display: flex;
  justify-content: space-around;
  @media (min-width: ${p => p.theme.maxWidth}) {
    justify-content: space-between;
  }
  flex-wrap: wrap;
  margin: auto;
`

export default FiltersStyle
