import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

export default function MyDocument() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name='theme-color' content='#317EFB' />
      </Head>
      <body>
        <Main/>
        <NextScript/>
      </body>
    </Html>
  )
}
