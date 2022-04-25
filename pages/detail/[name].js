import React, { useEffect, useState } from "react";
import Navbar from "../../component/Navbar";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { favorites } from "../../helper/graphql";
import { GET_POKEMON } from "../../queries/fetchData";
import styled from "@emotion/styled";
import Title from "../../component/Head";

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
  const [classification, setClassification] = useState()
  
  useEffect(() => {
    if (!loading && data) {
      setNamePokemon(data.pokemon.name)
      setMoves(data.pokemon.attacks.special)
      setTypes(data.pokemon.types)
      setImg(data.pokemon.image)
      setClassification(data.pokemon.classification)
    }
  },[data])
  
  const catchPokemon = () => {
    let probability = Math.random() 
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
            <h2>Add your pokemon nickname!</h2>
            <Input type="text" placeholder="Nickname"/>
            <div>
              <ButtonModal type="submit">Submit</ButtonModal>
              <ButtonModal onClick={() => setModal(!modal)}>Close</ButtonModal>

            </div>
          </form>
        </ModalContent>
      </Modal>}
      <CardDetail>
        <Name>{namePokemon}</Name>
        <Image src={img} alt={namePokemon}/>
        <Clasification>
          <TitleDetail>Clasification</TitleDetail>
          <div>{classification}</div>
        </Clasification>
        <Moves>
          <TitleDetail>Moves</TitleDetail>
          <Ul>
            {moves && moves.map((move,index) => (
              <Li key={index}>{move.name}</Li>
              ))}
          </Ul>
        </Moves>
        <Types>
          <TitleDetail>Types</TitleDetail>
          <Ul>
            {types && types.map((type, index) => (
              <Li key={index} className={type}>{type}</Li>
              ))}
          </Ul>
        </Types>
        <Button onClick={catchPokemon}>Catch Pokemon</Button>
      </CardDetail>
    </>
  );
}

// styled
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
  display: flex;
  margin: auto;
`

const Input = styled.input`
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  color: #495057;
  padding: 0.375rem 0.75rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  margin: 1rem 0;
`

const CardDetail = styled.div`
  margin:50px auto;
  width: 80%;
  text-align: center;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 22%) 0px 1px 6px 0px;
  display: grid;
  grid-template-areas:
    "name name"
    "img classification"
    "img moves"
    "img types"
    "button button";
  grid-template-columns: 45% 55%;
  @media (max-width: 640px) {
    grid-template-areas:
      "name"
      "img"
      "classification"
      "moves"
      "types"
      "button";
    grid-template-columns: 100%;
  };
`

const Name = styled.h1`
  grid-area: name;
`

const Image = styled.img`
  grid-area: img;
  margin: auto;
  @media (max-width: 640px) {
    width: 80%;
    margin-bottom: 50px;
  };
`
const TitleDetail = styled.div`
  font-size: 25px;
  font-weight: 600;
`

const Clasification = styled.div`
  grid-area: "classification";
`

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  padding: 5px 0;
  margin: 0;
`
const Li = styled.li`
  list-style: none;
  margin: 0 5px;
  padding: 5px 10px;
  border-radius: 4px;
`

const Moves = styled.div`
  grid-area: moves;
`

const Types = styled.div`
  grid-area: types;
`

const Button = styled.button`
  grid-area: button;
  width: 200px;
  padding: 10px;
  margin: 30px auto;
  border-radius: 7px;
  background-color: #007bff;
  border-color: #007bff;
  border: 1px solid transparent;
  color: #fff;
  cursor: pointer;
`

const ButtonModal = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  margin-right: 10px;
  border: 1px solid transparent;
`