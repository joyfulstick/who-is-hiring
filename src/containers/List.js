import React, { useEffect, useState } from 'react'
import Item from '../components/Item'
import useFirebaseSub from '../hooks/useFirebaseSub'

const List = ({ storie, filters: { isRemote, position, salary } }) => {
  const [content, setContent] = useState(null)

  const item = useFirebaseSub(`/v0/item/${storie}`)
  useEffect(() => {
    setContent(item)
  }, [item])

  const regExpRemote = isRemote ? /\b(\w*remote\w*)\b/i : /.*/
  const regExpPosition = Object.is(position, 'all')
    ? /.*/
    : new RegExp(`\\b(\\w*${position}\\w*)\\b`, 'i')
  const regExpDigits = /\d\d/

  const payment = content
    ? regExpDigits.exec(content.title)
      ? +regExpDigits.exec(content.title)[0]
      : 0
    : 0

  return !content ? (
    <p>LOADING ITEM...</p>
  ) : (
    regExpRemote.test(content.title) &&
      regExpPosition.test(content.title) &&
      payment >= salary && <Item content={content} />
  )
}
export default List
