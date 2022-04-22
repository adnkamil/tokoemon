import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'

const Card = styled.div`
  /* border: 1px solid black; */
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

export default function CardList({pokemon}) {
  const { name, image } = pokemon
  const router = useRouter()
  
  // useEffect(() => {
  //   setName(pokemon.name)
  //   console.log('diload')
  // }, [])

  const goToDetail = (name) => {
    router.push(`detail/${name}`)
    // alert('hai')
    // console.log(name);
  }

  return (
    <Card onClick={() => {goToDetail(name)}}>
      <ContainerImage>
        <Image src={image} alt={name}/>
      </ContainerImage>
      <div>{name}</div>
    </Card>
  )
}
