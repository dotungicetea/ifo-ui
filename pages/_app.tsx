import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { UserContext } from '../components/contexts/user-context'
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [loginUser, setLoginUser] = useState('');

  return (
    <UserContext.Provider value={{ loginUser, setLoginUser }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}

export default MyApp
