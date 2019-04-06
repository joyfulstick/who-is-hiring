import React from 'react'
import AnchorStyle from '../styles/AnchorStyle'

const Anchor = ({ href }) => (
  <AnchorStyle href={href} target="_blank" rel="noopener noreferrer">
    {href}
  </AnchorStyle>
)

export default Anchor
