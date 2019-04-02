import React, { useEffect, useState } from 'react'
import Item from '../components/Item'
import useFirebaseSub from '../hooks/useFirebaseSub'

const List = ({ storie }) => {
  const [content, setContent] = useState([])

  const item = useFirebaseSub(`/v0/item/${storie}`)
  useEffect(() => {
    setContent(item)
  }, [item])
  return !content ? <p>LOADING ITEM...</p> : <Item content={content} />
}
export default List
