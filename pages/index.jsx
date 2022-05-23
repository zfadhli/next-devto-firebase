import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Netw Starter</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='w-full min-h-screen antialiased text-slate-900 bg-slate-50 font-inter'>
        <div className='section'>
          <div className='container text-center'>
            <h1 className='text-4xl font-extrabold tracking-tight text-center text-slate-900 sm:text-5xl lg:text-6xl dark:text-white'>
              Rapidly build modern websites without ever leaving your HTML.
            </h1>
            <div className='pt-8 text-xl font-medium text-slate-500'>
              A utility-first CSS framework packed with classes like flex, pt-4, text-center and
              rotate-90 that can be composed to build any design, directly in your markup.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
