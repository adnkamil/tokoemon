import client from '../helper/graphql'
import { gql } from '@apollo/client'

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query pokemons($first: Int!) {
        pokemons(first: $first) {
          id
          name
          types
          image
        }
      }
    `,
    variables: {
      first: 20
    }
  })

  return {
    props: {
      pokemons: data.pokemons.results
    }
  }
}

export default getServerSideProps()