import Link from 'next/link'
import { Menu } from '@headlessui/react'
import { useAuth } from '@lib/use-auth'
import { useUser } from '@lib/use-user'
import { useRouter } from 'next/router'
import { NavLink } from '@components/nav-link'

export default function Navbar() {
  const router = useRouter()
  const { user, username } = useUser()
  const { logout } = useAuth()

  const handleLogout = async () => {
    await logout()
    router.push('/')
  }

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
            {user ? (
              <div className='relative flex items-center gap-x-6'>
                <Link href='/posts/new'>
                  <a className='px-3 py-2 text-sm font-medium text-indigo-600 bg-white border-2 border-indigo-600 rounded hover:bg-indigo-600 hover:text-white'>
                    Create Post
                  </a>
                </Link>
                <Menu as='div' className='relative'>
                  <Menu.Button>
                    <figure className='w-12 h-12 border-2 border-indigo-600 rounded-full'>
                      <img className='rounded-full' src={user?.photoURL} alt='' />
                    </figure>
                  </Menu.Button>
                  <Menu.Items className='absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={`block px-4 py-2 text-sm hover:text-white group ${
                            active && 'bg-indigo-600 text-white'
                          }`}
                          href={`/users/${user?.displayName}`}
                        >
                          <span className='block'>{user?.displayName}</span>
                          <span className='block text-xs text-slate-700 group-hover:text-slate-200'>
                            @{username}
                          </span>
                        </a>
                      )}
                    </Menu.Item>
                    <hr />
                    <Menu.Item>
                      {({ active }) => (
                        <NavLink
                          href='/posts'
                          className={`block px-4 py-2 text-sm hover:text-white ${
                            active && 'bg-indigo-600 text-white'
                          }`}
                        >
                          Posts
                        </NavLink>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <NavLink
                          href='/posts/new'
                          className={`block px-4 py-2 text-sm hover:text-white ${
                            active && 'bg-indigo-600 text-white'
                          }`}
                        >
                          Create Post
                        </NavLink>
                      )}
                    </Menu.Item>
                    <hr />
                    <Menu.Item>
                      {({ active }) => (
                        <NavLink
                          href='/'
                          className={`block px-4 py-2 text-sm hover:text-white ${
                            active && 'bg-indigo-600 text-white'
                          }`}
                          onClick={handleLogout}
                        >
                          Logout
                        </NavLink>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              </div>
            ) : (
              <Link href='/auth/login'>
                <a className='px-3 py-2 text-sm font-medium text-indigo-600 bg-white border-2 border-indigo-600 rounded hover:bg-indigo-600 hover:text-white'>
                  Login
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
