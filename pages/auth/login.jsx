import GoogleButton from 'react-google-button'

export default function LoginPage() {
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
            <GoogleButton />
          </div>
        </div>
      </section>
    </>
  )
}
