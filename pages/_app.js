import '@fontsource/inter/variable.css'
import '../styles/globals.css'
import Layout from '@components/layout'
import { AuthProvider } from '@context/auth-context'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  )
}

export default MyApp
