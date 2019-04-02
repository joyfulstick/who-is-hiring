import React from 'react'

const Item = ({ content }) => (
  <article style={{ border: '2px solid grey' }}>
    {Object.entries(content).map(([k, v]) => (
      <p key={k}>{`${k}: ${v}`}</p>
    ))}
  </article>
)

export default Item
