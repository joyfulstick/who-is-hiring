import React from 'react'
import ArticleStyle from '../styles/ArticleStyle'

const Item = ({ content }) => (
  <ArticleStyle>
    {Object.entries(content).map(([k, v]) => (
      <p key={k}>{`${k}: ${v}`}</p>
    ))}
  </ArticleStyle>
)

export default Item
