import styles from '../styles/Home.module.css'
import Title from '../component/Head'
import Navbar from '../component/Navbar'
import client from '../helper/graphql'
import { gql, useQuery } from '@apollo/client'
import CardList from '../component/cardList'
import { FETCH_FAVORITES } from '../queries/fetchData'
import { useEffect, useState } from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const PokemonCon = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`

const CardCon = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;
`


export default function Home({pokemons}) {
  const { data } = useQuery(FETCH_FAVORITES)
  const [jumlah, setJumlah] = useState(0)
  useEffect(() => {
    setJumlah(data.favorites.length);
  },[data])

  return (
    <>
      <Title title={'Tokoemon'}/>
      <Navbar/>
      <Container>
        <h2>Jumlah owned : {jumlah}</h2>
        {/* <PokemonCon> */}
          <CardCon>
            {pokemons && pokemons.map(pokemon => (
              <CardList key={pokemon.id} pokemon={pokemon}/>
            ))}
          </CardCon>
        {/* </PokemonCon> */}
      </Container>
    </>
  )
}

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
      pokemons: data.pokemons
    }
  }

}