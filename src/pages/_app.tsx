import 'styles/globals.css'
import { FC, Fragment } from 'react'
import type { AppProps } from 'next/app'
import { setConfiguration } from 'react-grid-system'

setConfiguration({ gutterWidth: 24 })

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&display=swap"
        rel="stylesheet"
      />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default App
