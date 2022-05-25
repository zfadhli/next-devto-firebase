import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import slugify from '@sindresorhus/slugify'
import { useUser } from '@lib/use-user'
import { db } from '@lib/firebase'
import { doc, setDoc } from 'firebase/firestore'

export default function NewPostPage() {
  const router = useRouter()
  const { user, username } = useUser()
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = handleSubmit(async (data) => {
    const post = {
      uid: user.uid,
      username: username,
      avatar: user.photoURL,
      title: data.title,
      slug: slugify(data.title),
      content: data.content,
    }

    const postRef = doc(db, 'users', user.uid, 'posts', post.slug)
    await setDoc(postRef, { ...post }, { merge: true })
    router.push('/posts')
  })
  return (
    <>
      <section className='section'>
        <div className='container-sm'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                className='w-full px-3 py-2'
                type='text'
                placeholder='title'
                {...register('title')}
              />
            </div>
            <div className='pt-2'>
              <textarea
                className='w-full px-3 py-2'
                name='content'
                id=''
                cols='30'
                rows='10'
                {...register('content')}
              ></textarea>
            </div>
            <div className='pt-4 text-right'>
              <button
                className='px-3 py-2 text-sm font-medium text-white bg-indigo-600 border-2 border-indigo-600 rounded hover:bg-indigo-700'
                type='submit'
              >
                Create Post
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
