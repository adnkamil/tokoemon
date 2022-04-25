import { useQuery } from '@apollo/client'
import { FETCH_FAVORITES } from '../queries/fetchData'
import Navbar from '../component/Navbar'
import Title from '../component/Head'
import styled from '@emotion/styled'
import CardFavorite from '../component/cardFavorite'
import { favorites } from '../helper/graphql'

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
      <h1>List favorite</h1>
          <CardCon>
            {data.favorites && data.favorites.map(pokemon => (
              <CardFavorite key={pokemon.id} pokemon={pokemon} deleteFav={(nickName) => handleDeleteFavorite(nickName)}/>
            ))}
          </CardCon>
      </Container>
    </>
  )
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CardCon = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;
`