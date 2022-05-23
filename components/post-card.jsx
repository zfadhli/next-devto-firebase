export default function PostCard() {
  return (
    <>
      <div className='border shadow rounded-xl'>
        <figure>
          <img
            className='rounded-t-xl'
            src='https://res.cloudinary.com/practicaldev/image/fetch/s--FCf6OelP--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xu037gv870tiubwb1lb9.jpg'
            alt=''
          />
        </figure>
        <div className='px-8 py-8'>
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
            <h3 className='text-2xl font-medium'>As a developer, I hate...?</h3>
            <div className='flex items-center justify-between pt-4 text-sm'>
              <a className='px-3 py-2 -ml-3 hover:bg-slate-100' href='#'>
                ❤ 24 reactions
              </a>
              <p>3 min read</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
