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
              <div className='border shadow rounded-xl'>
                <div className='px-6 py-6'>
                  <div className='flex gap-x-4'>
                    <figure className='w-8 h-8 border-2 border-indigo-600 rounded-full'>
                      <img
                        className='rounded-full'
                        src='https://avatars.githubusercontent.com/u/29818436?v=4'
                        alt=''
                      />
                    </figure>
                    <div className='text-xs'>
                      <h4>zfadhli</h4>
                      <p>May 22 (2 hours ago)</p>
                    </div>
                  </div>
                  <div className='pt-4 ml-12'>
                    <h3 className='text-2xl font-medium'>How to clone dev.to</h3>
                    <div className='flex items-center justify-between pt-4 text-sm'>
                      <a className='px-3 py-2 -ml-3 hover:bg-slate-100' href='#'>
                        ❤ 24 reactions
                      </a>
                      <p>3 min read</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-[200px]'></div>
          </div>
        </div>
      </div>
    </>
  )
}
