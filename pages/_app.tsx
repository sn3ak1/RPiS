import Head from 'next/head'
import Navbar from '../components/layout/navbar'
import Link from 'next/link'
import '../styles/globals.scss'
import 'remixicon/fonts/remixicon.css'
import 'katex/dist/katex.min.css'
import React from 'react'


function Fizykapp({ Component, pageProps }) {
  return (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />
      <meta name='apple-mobile-web-app-title' content="Fizykapp"/>
      <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
      <meta name='application-name' content="Fizykapp" />
      <meta name='format-detection' content='telephone=no' />
      <meta name='mobile-web-app-capable' content='yes' />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <link rel="manifest" href="/manifest.json" />
      <title>Fizykapp</title>
    </Head>

    <Navbar />

    <div className="container is-fluid">
      <div className="container">
        <Component {...pageProps} />
      </div>
    </div>

  </>
  ) 
}

export default Fizykapp
