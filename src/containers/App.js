import 'firebase/database'
import React, { useEffect, useState } from 'react'
import Filters from '../components/Filters'
import useFirebaseSub from '../hooks/useFirebaseSub'
import HeaderStyle from '../styles/HeaderStyle'
import MainStyle from '../styles/MainStyle'
import List from './List'

const App = () => {
  const [stories, setStories] = useState(null)

  const jobstories = useFirebaseSub('/v0/jobstories')
  useEffect(() => {
    setStories(jobstories)
  }, [jobstories])

  const [filters, setFilters] = useState({
    position: 'all',
    salary: 5,
    isRemote: false,
  })

  const handleChange = ({ target: { type, name, value, checked } }) => {
    const v = type === 'checkbox' ? checked : value
    setFilters({ ...filters, [name]: v })
  }

  return (
    <>
      <HeaderStyle>
        <Filters handleChange={handleChange} filters={filters} />
      </HeaderStyle>
      <MainStyle>
        {!stories ? (
          <p>LOADING LIST...</p>
        ) : (
          stories.map(s => <List key={s} storie={s} filters={filters} />)
        )}
      </MainStyle>
    </>
  )
}

export default App
