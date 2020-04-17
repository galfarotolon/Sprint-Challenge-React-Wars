// Write your Character component here
import React from 'react'
import styled from 'styled-components'


////STYLES//

const Container = styled.div
    `
background-color: #24325FFF;
border: 2px double yellow;
width: 50%;
margin: 3% auto;
padding: 2% 0; 

box-shadow: 0 0 50px yellow;

`
const CharName = styled.h1

    `
    font-family: 'Creepster', cursive;
    letter-spacing: 0.2rem;
    font-size: 4rem;
    color: #69C8ECFF;
    -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #005851;
  text-shadow: 2px 2px 2px #AEFF00;
`

const Image = styled.img
    `

width: 30%;
`

const CharInfo = styled.p
    `
color: white;
font-weight: 600;
font-size: 1rem;

`


//////


export default function Character({ character }) {


    const newArr = Object.values(character)

    console.log(newArr)


    return (

        <div>

            {
                newArr.map(character => {
                    return (
                        <Container>
                            <CharName>{character.name}</CharName>
                            <Image src={character.image} />
                            <CharInfo>Status: {character.status}</CharInfo>
                            <CharInfo>Species: {character.species}</CharInfo>
                            <CharInfo>Gender: {character.gender}</CharInfo>
                            <CharInfo>Homeworld: {character.origin.name}</CharInfo>
                            <CharInfo>Episode Appearances: {character.episode.length}</CharInfo>
                        </Container>
                    )
                })
            }

        </div>
    );
}

