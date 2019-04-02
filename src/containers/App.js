import 'firebase/database'
import React, { useEffect, useState } from 'react'
import useFirebaseSub from '../hooks/useFirebaseSub'
import List from './List'

const App = () => {
  const [stories, setStories] = useState(null)
  const jobstories = useFirebaseSub('/v0/jobstories')
  useEffect(() => {
    setStories(jobstories)
  }, [jobstories])

  return !stories ? (
    <p>LOADING LIST...</p>
  ) : (
    stories.map(s => <List key={s} storie={s} />)
  )
}

export default App
