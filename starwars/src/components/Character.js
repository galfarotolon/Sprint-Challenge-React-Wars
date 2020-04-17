// Write your Character component here
import React from 'react'
import styled from 'styled-components'


////STYLES//
const Title = styled.h1
    `
font-size: 3rem;

`
const Date = styled.div
    `

margin-top: 1%;
font-style: italic;
font-weight: 600;
margin-bottom: 5%;
`

const Img = styled.img

    `
  
width: 70%;
`

const Copyright = styled.div
    `
margin-top: 1%;
font-style: italic;
font-weight: 600;
margin-bottom: 5%;

`

const Explanation = styled.div
    `
margin-top: 1%;
line-height: 2;
padding-bottom: 5%;
font-weight: 600;
font-size: 1rem;
`

//////


export default function Character({ character }) {


    const newArr = Object.values(character)

    console.log(newArr)


    // const img = cardData.hdurl
    // console.log(img)
    // console.log(cardData)


    return (

        <div>

            {
                newArr.map(character => {
                    return (
                        <div>
                            <h1>{character.name}</h1>
                            <p>{character.status}</p>
                            <p>{character.gender}</p>
                            <p>{character.origin.name}</p>

                        </div>
                    )
                })
            }

        </div>
    );
}

