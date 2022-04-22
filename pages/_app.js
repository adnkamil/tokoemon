import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import client from '../helper/graphql'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
