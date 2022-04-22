import React from 'react'
import { useQuery } from '@apollo/client'
import { FETCH_FAVORITES } from '../queries/fetchData'
import Navbar from '../component/Navbar'

export default function Favorites() {
  const { loading, error, data } = useQuery(FETCH_FAVORITES)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>

  return (
    <>
      <Navbar/>
      <h1>Ini favorite</h1>
      <div>{JSON.stringify(data)}</div>
    </>
  )
}
