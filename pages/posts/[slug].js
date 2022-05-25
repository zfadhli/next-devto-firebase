import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@lib/firebase'
import { useAuth } from '@lib/use-auth'

export default function PostPage() {
  const { user } = useAuth()
  const router = useRouter()
  const { slug } = router.query
  const [post, setPost] = useState(null)

  useEffect(() => {
    return () => getPost()
  }, [])

  const getPost = async () => {
    const docRef = doc(db, 'users', user.uid, 'posts', slug)
    const docSnap = await getDoc(docRef)
    setPost(null)
    if (docSnap.exists()) {
      setPost(docSnap.data())
    } else {
      console.log('No such document!')
    }
  }
  return (
    <>
      <section className='section'>
        <div className='container'>
          {post && (
            <>
              <div className='p-4 bg-white rounded-lg shadow'>
                <div>
                  <h1 className='text-4xl font-bold tracking-tight uppercase'>{post.title}</h1>
                  <p className='text-sm text-slate-700'>posted by {post.username}</p>
                </div>
                <div className='pt-8'>
                  <p className='text-lg'>{post.content}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  )
}
