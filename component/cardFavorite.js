import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'

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
`

const ContainerImage = styled.div`
  width: 80%;
  height: 80%;
  overflow:hidden;
  display:flex;
  justify-content:center;
  align-items: center;
`

const Image = styled.img`
  width: 100%;
`

export default function CardFavorite({pokemon, deleteFav}) {
  const { name, image, nickName, types } = pokemon
  
  const router = useRouter()

  const goToDetail = (name) => {
    router.push(`detail/${name}`)
  }

  return (
    <Card >
      <ContainerImage onClick={() => {goToDetail(name)}}>
        <Image src={image} alt={name}/>
      </ContainerImage>
      <div>{nickName}</div>
      <button onClick={() => deleteFav(nickName)}>Delete</button>
    </Card>
  )
}
