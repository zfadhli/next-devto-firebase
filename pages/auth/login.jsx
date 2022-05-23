import { useEffect } from 'react'
import { useRouter } from 'next/router'
import GoogleButton from 'react-google-button'
import { useAuth } from '@lib/use-auth'

export default function LoginPage() {
  const router = useRouter()
  const { user, login } = useAuth()

  const handleLogin = async () => {
    await login()
  }

  useEffect(() => {
    if (user) {
      router.push('/')
    }
  }, [user])

  return (
    <>
      <section className='section'>
        <div className='relative w-full max-w-2xl px-6 mx-auto'>
          <div className='text-center'>
            <h2 className='text-4xl font-bold tracking-tight'>Welcome to DEVTO Community</h2>
            <p className='pt-2 text-slate-700'>
              DEVTO Community is a community of 862,660 amazing developers
            </p>
          </div>
          <div className='flex items-center justify-center pt-8'>
            <GoogleButton onClick={handleLogin} />
          </div>
        </div>
      </section>
    </>
  )
}
