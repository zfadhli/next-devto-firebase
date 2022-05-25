import { useEffect, useState } from 'react'
import Link from 'next/link'
import PostCard from '../components/post-card'
import { db } from '@lib/firebase'
import { collectionGroup, query, where, getDocs } from 'firebase/firestore'
import { useAuth } from '@lib/use-auth'

export default function Home() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    return () => getPosts()
  }, [])

  const getPosts = async () => {
    const postQuery = query(collectionGroup(db, 'posts'))
    const querySnapshot = await getDocs(postQuery)
    setPosts([])
    querySnapshot.forEach((doc) => {
      setPosts((post) => [...post, doc.data()])
    })
  }
  return (
    <>
      <div className='section'>
        <div className='container'>
          <div className='flex'>
            <div className='w-[200px]'></div>
            <div className='space-y-8'>
              {posts.map((post) => (
                <div className='border shadow rounded-xl' key={post.slug}>
                  <div className='px-8 py-8'>
                    <div className='flex gap-x-4'>
                      <figure className='w-8 h-8 border-2 border-indigo-600 rounded-full'>
                        <img className='rounded-full' src={post?.avatar} alt='' />
                      </figure>
                      <div className='text-xs'>
                        <h4>{post.username}</h4>
                        <p>May 22 (2 hours ago)</p>
                      </div>
                    </div>
                    <div className='pt-4 ml-12'>
                      <h3 className='text-2xl font-medium'>
                        <Link href={`posts/${post.slug}`}>
                          <a>{post.title}</a>
                        </Link>
                      </h3>
                      <div className='flex items-center justify-between pt-4 text-sm'>
                        <a className='px-3 py-2 -ml-3 hover:bg-slate-100' href='#'>
                          ❤ 24 reactions
                        </a>
                        <p>3 min read</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='w-[200px]'></div>
          </div>
        </div>
      </div>
    </>
  )
}
