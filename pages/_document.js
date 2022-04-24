import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

export default function MyDocument() {
  return (
    <Html>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <link href='/icon-192x192.png' rel='icon' type='image/png' sizes='32x32' />
        <meta name='theme-color' content='#317EFB' />
      </Head>
      <body>
        <Main/>
        <NextScript/>
      </body>
    </Html>
  )
}
