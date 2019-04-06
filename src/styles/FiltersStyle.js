import styled from 'styled-components'

const FiltersStyle = styled.div`
  width: 100%;
  max-width: ${p => p.theme.maxWidth};
  display: flex;
  align-items: center;
  @media (min-width: 650px) {
    justify-content: space-around;
  }
  @media (min-width: ${p => p.theme.maxWidth}) {
    justify-content: space-between;
  }
  flex-wrap: wrap;
  margin: auto;
`

export default FiltersStyle
