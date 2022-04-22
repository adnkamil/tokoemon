import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'

const Header = styled.header`
  padding: 7px;
  box-shadow: 3px 3px 8px 3px rgb(0 0 0 / 32%);
  display: flex;
  justify-content: space-between;
  align-items:center;
  
  `
const Logo = styled.div`
  display: flex;
  margin: 0 20px;
  color: green;
  `

const Ul = styled.ul`
  display: flex;
  list-style: none;
  `

const Li = styled.li`
  margin: 0 16px;
  `

export default function Navbar() {
  return (
    <Header>
      <Logo><Link href="/"><a>TOKEMON</a></Link></Logo>
      <Ul>
        <Li><Link href="/"><a>Home</a></Link></Li>
        <Li><Link href="/favorites"><a>My Pokemon</a></Link></Li>
      </Ul>
    </Header>
  )
}
