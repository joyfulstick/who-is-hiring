import styled from 'styled-components'

const ArticleStyle = styled.article`
  padding: 1rem 1.8rem;
  margin: 0.4rem 0;
  background: ${p => p.theme.overlay};
  box-shadow: ${p => p.theme.shadow};
  border-radius: 0.4em;
`

export default ArticleStyle
