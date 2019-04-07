import firebase from 'firebase/app'
import 'firebase/database'
import { useEffect, useState } from 'react'

firebase.initializeApp({
  databaseURL: 'https://hacker-news.firebaseio.com',
})

export function useFirebaseSub(path) {
  const dbRef = firebase
    .database()
    .ref()
    .child(path)
  const [state, setState] = useState(null)
  useEffect(() => {
    dbRef.on('value', s => setState(s.val()))
    return () => {
      dbRef.off()
    }
  }, [])

  return state
}
