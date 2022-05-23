import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      <div className='bg-white border-b-2'>
        <div className='container py-2'>
          <div className='flex items-center justify-between'>
            <Link href='/'>
              <a className='px-3 py-2 font-medium text-white border-2 rounded bg-slate-900 border-slate-900'>
                DEVTO
              </a>
            </Link>
            <div className='flex items-center gap-x-6'>
              <Link href='/posts/new'>
                <a className='px-3 py-2 text-sm font-medium text-indigo-600 bg-white border-2 border-indigo-600 rounded hover:bg-indigo-600 hover:text-white'>
                  Create Post
                </a>
              </Link>
              <figure className='w-12 h-12 border-2 border-indigo-600 rounded-full'>
                <img
                  className='rounded-full'
                  src='https://avatars.githubusercontent.com/u/29818436?v=4'
                  alt=''
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
