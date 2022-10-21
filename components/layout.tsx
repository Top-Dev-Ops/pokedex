import { ReactNode, useEffect } from 'react'
import Head from 'next/head'
import Header from './header'
// import Footer from './footer'

export default function Layout(props: { children?: ReactNode }) {
  useEffect(() => {
    document?.documentElement.classList.add('dark')
  }, [])

  return (
    <div className="flex flex-col w-full min-h-screen bg-stack-1 justify-start items-center">
      <Head>
        <title>POKEDEX</title>
        <meta name="description" content="POKEDEX" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="my-20 w-full max-w-screen-xl">{props.children}</div>

      {/* <Footer /> */}
    </div>
  )
}