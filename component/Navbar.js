import React, { useRef } from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import {FaTimes, FaBars} from 'react-icons/fa'

export default function Navbar() {
  const navRef = useRef()

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

  return (
    <>
      <Header>
        <Logo><Link href="/"><a>TOKEMON</a></Link></Logo>
        <Nav ref={navRef}>
          <Li><Link href="/"><a>Home</a></Link></Li>
          <Li><Link href="/favorites"><a>My Pokemon</a></Link></Li>
          <Button onClick={showNavBar} className="close-btn" aria-label="close-nav">
            <FaTimes/>
          </Button>
        </Nav>
        <Button onClick={showNavBar} aria-label="open-nav">
          <FaBars/>
        </Button>
      </Header>
    </>
  )
}


// Styled
const Header = styled.header`
  padding: 7px;
  box-shadow: 3px 3px 8px 3px rgb(0 0 0 / 22%);
  display: flex;
  height: 60px;
  justify-content: space-between;
  align-items:center;
  `
const Logo = styled.div`
  display: flex;
  margin: 0 20px;
  color: green;
  `

const Nav = styled.nav`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;
  @media (max-width: 640px) {
    position:fixed;
    top:0;
    left:0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: lightgray;
    transition: 0.5s;
    transform: translateY(100vh);
    gap: 1.5rem;
  };
  `

const Li = styled.div`
  margin: 0 16px;
  `

const Button = styled.button`
  padding: 5px;
  cursor: pointer;
  background: transparent;
  border: none;
  visibility: hidden;
  opacity: 0;
  font-size: 1.5rem;
  @media (max-width: 640px) {
    visibility: visible;
    opacity:1;
  };
`