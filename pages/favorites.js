import React from 'react'
import { useQuery } from '@apollo/client'
import { FETCH_FAVORITES } from '../queries/fetchData'
import Navbar from '../component/Navbar'
import Title from '../component/Head'
import styled from '@emotion/styled'
import CardFavorite from '../component/cardFavorite'
import { useEffect, useState } from 'react'
import { favorites } from '../helper/graphql'

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

export default function Favorites() {
  const { loading, error, data } = useQuery(FETCH_FAVORITES)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>
  
  const handleDeleteFavorite = (nickName) => {
    alert(`${nickName} di delete`)
    let newFavorites = data.favorites.filter(pokemon => {
      if(pokemon.nickName != nickName) {
         return pokemon
      }
    })
    favorites(newFavorites)
  }

  return (
    <>
      <Title title="Favorites"/>
      <Navbar/>
      <Container>
      <h1>Ini favorite</h1>
        {/* <PokemonCon> */}
          <CardCon>
            {data.favorites && data.favorites.map(pokemon => (
              <CardFavorite key={pokemon.id} pokemon={pokemon} deleteFav={(nickName) => handleDeleteFavorite(nickName)}/>
            ))}
          </CardCon>
          <div>Load More</div>
        {/* </PokemonCon> */}
      </Container>
    </>
  )
}
