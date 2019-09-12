import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
    margin:0;
    font-size:6vw;
    font-weight:bold;
    @media (max-width: 500px) {
        font-size: 2rem;
    }
`

export default function Header(props) {
    return (
    <header>
        <H1>Astronomy Picture of the Day</H1>
    </header>
    )
}