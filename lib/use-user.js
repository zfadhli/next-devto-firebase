import { useState, useEffect } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@lib/firebase'
import { useAuth } from '@lib/use-auth'

export const useUser = () => {
  const { user } = useAuth()
  const [username, setUsername] = useState(null)

  useEffect(() => {
    const unsubscribe = async () => {
      if (user) {
        const docRef = doc(db, 'users', user.uid)
        const docSnap = await getDoc(docRef)
        setUsername(docSnap.data().username)
      } else {
        setUsername(null)
      }
    }

    return () => unsubscribe()
  }, [user, username])
  return { user, username }
}
