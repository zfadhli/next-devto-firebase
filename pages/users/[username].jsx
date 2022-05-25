import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { doc, getDoc, query } from 'firebase/firestore'
import { db } from '@lib/firebase'

export default function UsernamePage() {
  const router = useRouter()
  const { username: slug } = router.query
  const [user, setUser] = useState(null)

  useEffect(() => {
    return () => getUser()
  }, [])

  const getUser = async () => {
    const usernameRef = doc(db, 'username', slug)
    const usernameSnap = await getDoc(usernameRef)
    const usersRef = doc(db, 'users', usernameSnap.data().uid)
    const userSnap = await getDoc(usersRef)
    setUser(userSnap.data())
  }

  return (
    <>
      <section className='section'>
        <div className='container-sm'>
          <figure>
            <img src={user?.photoURL} alt='' />
          </figure>
          <p className='pt-6 text-xl font-bold'>{user?.displayName}</p>
          <p className='text-slate-700'>@{user?.username}</p>
        </div>
      </section>
    </>
  )
}
