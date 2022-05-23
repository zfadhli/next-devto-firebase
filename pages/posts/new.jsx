export default function NewPostPage() {
  return (
    <>
      <section className='section'>
        <div className='container-sm'>
          <form>
            <div>
              <input className='w-full px-3 py-2' type='text' placeholder='title' />
            </div>
            <div className='pt-2'>
              <textarea
                className='w-full px-3 py-2'
                name='content'
                id=''
                cols='30'
                rows='10'
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
