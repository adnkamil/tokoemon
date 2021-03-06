import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import Image from 'next/image'

export default function CardFavorite({pokemon, deleteFav}) {
  const { name, image, nickName } = pokemon
  
  const router = useRouter()

  const goToDetail = (name) => {
    router.push(`detail/${name}`)
  }

  return (
    <Card >
      <ContainerImage onClick={() => {goToDetail(name)}}>
        <Image src={image} alt={name} width={1000} height={1000}/>
      </ContainerImage>
      <NamePokemon>{nickName}</NamePokemon>
      <button onClick={() => deleteFav(nickName)}>Delete</button>
    </Card>
  )
}

// styled
const Card = styled.div`
  display: flex;
  flex-direction: column;  
  justify-content:center;
  align-items:center;
  padding:5px;
  margin: 12px;
  border-radius: 5px;
  width: 23%;
  height:350px;
  text-align: center;
  box-shadow: rgb(0 0 0 / 22%) 0px 1px 6px 0px;
  @media (max-width: 640px) {
    width: 80%
  };
`

const ContainerImage = styled.div`
  width: 80%;
  height: 80%;
  overflow:hidden;
  display:flex;
  justify-content:center;
  align-items: center;
`

const NamePokemon = styled.div`
  @media (max-width: 640px) {
    font-size: 20px;
  };
`