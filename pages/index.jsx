import PostCard from '../components/post-card'

export default function Home() {
  return (
    <>
      <div className='section'>
        <div className='container'>
          <div className='flex'>
            <div className='w-[200px]'></div>
            <div className='space-y-8'>
              <PostCard />
              <PostCard />
              <PostCard />
            </div>
            <div className='w-[200px]'></div>
          </div>
        </div>
      </div>
    </>
  )
}
