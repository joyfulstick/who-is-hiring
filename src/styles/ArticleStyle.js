import styled from 'styled-components'

const ArticleStyle = styled.article`
  padding: 1rem 1.8rem;
  margin: 0.4rem 0;
  background: ${p => p.theme.overlay};
  box-shadow: ${p => p.theme.shadow};
  border-radius: 0.4em;
  display: grid;
  grid-auto-columns: 1fr;
  grid-gap: 0.2em;
  span:first-child {
    opacity: 0.6;
    font-size: 0.8rem;
  }
  .title {
    grid-area: 1 / 1 / 2 / 2;
    font-size: 1.6rem;
    font-weight: 100;
    color: ${p => p.theme.primary};
  }
`

export default ArticleStyle
