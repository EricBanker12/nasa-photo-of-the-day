import React from 'react'
import styled from 'styled-components'

const H2 = styled.h2`
    margin:0;
    font-size:4vw;
    font-weight:bold;
    @media (max-width: 500px) {
        font-size: 1.25rem;
    }
`

export default function Info(props) {
    return (
        <div>
            <H2>{props.title}</H2>
            <p>HD Image: <a href={props.hdurl}>link</a></p>
            {props.copyright ? <p>Copyright: {props.copyright}</p>:''}
            <p>{props.explanation}</p>
        </div>
    )
}