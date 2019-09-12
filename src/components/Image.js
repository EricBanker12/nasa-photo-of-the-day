import React from 'react'
import styled from 'styled-components'

const HeroImg = styled.img.attrs(props => ({
    src: props.src,
    alt: props.alt
}))`
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
`

export default function Image(props) {
    return <HeroImg src={props.src} alt={props.alt} />
}