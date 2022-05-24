import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import debounce from 'lodash.debounce'
import { collection, doc, setDoc, getDoc } from 'firebase/firestore'
import { db } from '@lib/firebase'
import { useAuth } from '@lib/use-auth'

export default function UsernamePage() {
  const { user } = useAuth()
  const router = useRouter()
  const { register, handleSubmit } = useForm()
  //   const [username, setUsername] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = async (data) => {
    const docRef = doc(db, 'username', data.username)
    const docSnap = await getDoc(docRef)
    if (!docSnap.exists()) {
      await setDoc(doc(db, 'users', user.uid), {
        username: data.username,
        displayName: user?.displayName,
        photoURL: user?.photoURL,
      })
      await setDoc(doc(db, 'username', data.username), {
        uid: user?.uid,
      })
      router.push('/')
    }
    setMessage('Username already taken')
  }

  return (
    <>
      <section className='section'>
        <div className='container-sm'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className='block w-full px-3 py-2'
              type='text'
              placeholder='username'
              {...register('username')}
            />
            <p>{message}</p>
            <button
              className='block px-3 py-2 mt-4 text-sm font-medium text-white bg-indigo-600 border-2 border-indigo-600 rounded hover:bg-indigo-700'
              type='submit'
            >
              Set Username
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
