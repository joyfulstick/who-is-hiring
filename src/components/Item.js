import React from 'react'
import ArticleStyle from '../styles/ArticleStyle'
import Anchor from './Anchor'

const Item = ({ content }) => {
  const formatDate = timestamp =>
    new Date(timestamp * 1000).toString().substr(0, 21)

  return (
    <ArticleStyle>
      {Object.entries(content).map(
        ([k, v]) =>
          (k !== 'url' && (
            <p key={k} className={k}>
              <span>{!Object.is(k, 'title') && `${k}: `}</span>
              <span>{`${(Object.is(k, 'time') && formatDate(v)) || v}`}</span>
            </p>
          )) || <Anchor key={k} href={v} />,
      )}
    </ArticleStyle>
  )
}

export default Item
