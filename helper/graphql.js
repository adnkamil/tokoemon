import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const favorites = makeVar([])

const client = new ApolloClient({
  uri: 'https://graphql-pokemon2.vercel.app/',
  // uri: 'https://graphql-pokeapi.graphcdn.app',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          favorites: {
            read:() => {
              return favorites();
            }
          }
        }
      }
    }
  })
})

export default client


// alternatif uri
// https://graphql-pokeapi.graphcdn.app