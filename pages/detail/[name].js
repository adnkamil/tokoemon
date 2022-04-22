import React, { useEffect, useState } from "react";
import Navbar from "../../component/Navbar";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { favorites } from "../../helper/graphql";
import { GET_POKEMON } from "../../queries/fetchData";
import styled from "@emotion/styled";
import Title from "../../component/Head";

const Modal = styled.div`
  width:100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ModalContent = styled.div`
  width: 500px;
  height: 300px;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`

const Input = styled.input`

`

export default function Detail() {
  const router = useRouter()
  
  const { name } = router.query
  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { name: name }
  });
  const [modal, setModal] = useState(false)
  const [namePokemon, setNamePokemon] = useState()
  const [moves, setMoves] = useState([])
  const [types, setTypes] = useState([])
  const [img, setImg] = useState()
  
  useEffect(() => {
    if (!loading && data) {
      setNamePokemon(data.pokemon.name)
      setMoves(data.pokemon.attacks.special)
      setTypes(data.pokemon.types)
      setImg(data.pokemon.image)
    }
  },[data])
  
  const catchPokemon = () => {
    
    // let probability = Math.random() 
    let probability = 0.6   
    if (probability >= 0.5) {           //probabilty catch is 50%
      alert(`${name} ditambahkan`)
      setModal(!modal)
    } else {
      alert(`${name} kabur`)
    }
  }

  const addNickName = (event) => {
    event.preventDefault();
    let favoriteWithNickname = {...data.pokemon, nickName: event.target[0].value}
    const oldFavorites = favorites()
    favorites([...oldFavorites, favoriteWithNickname])
    setModal(!modal)
  }

  return (
    <>
      <Title title={namePokemon}/>
      <Navbar />
      {loading && <div>Loading...</div>}
      {modal && <Modal>
        <ModalContent>
          <form onSubmit={addNickName}>
            <Input type="text" placeholder="Nickname"/>
            <div>
              <button type="submit">Submit</button>
              <button onClick={() => setModal(!modal)}>Close</button>

            </div>
          </form>
        </ModalContent>
      </Modal>}
      <button onClick={catchPokemon}>Catch Pokemon</button>
      <h1>{namePokemon}</h1>
      <img src={img} style={{ }} alt={namePokemon}/>
      {moves && moves.map((move,index) => (
        <h4 key={index}>{move.name}</h4>
      ))}
      {types && types.map((type, index) => (
        <h4 key={index}>{type}</h4>
      ))}
    </>
  );
}
