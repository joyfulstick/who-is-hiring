import React, { useEffect, useState } from 'react'
import Item from '../components/Item'
import useFirebaseSub from '../hooks/useFirebaseSub'

const List = ({ storie, filters: { isRemote, position, salary } }) => {
  const [content, setContent] = useState(null)

  const item = useFirebaseSub(`/v0/item/${storie}`)
  useEffect(() => {
    setContent(item)
  }, [item])

  const r1 = isRemote ? /\b(\w*remote\w*)\b/i : /.*/
  const r2 = Object.is(position, 'all')
    ? /.*/
    : new RegExp(`\\b(\\w*${position}\\w*)\\b`, 'i')
  const r3 = /\d\d/
  const payment = content
    ? r3.exec(content.title)
      ? +r3.exec(content.title)[0]
      : 0
    : 0

  return !content ? (
    <p>LOADING ITEM...</p>
  ) : (
    r1.test(content.title) && r2.test(content.title) && payment >= salary && (
      <Item content={content} />
    )
  )
}
export default List
