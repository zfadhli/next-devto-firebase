import Head from 'next/head'
import Navbar from './navbar.jsx'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>DEVTO</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='w-full min-h-screen antialiased text-slate-900 bg-slate-100 font-inter'>
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  )
}
