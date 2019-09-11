import React from 'react'

export default function Image(props) {
    return <a href={props.hdurl}><img src={props.src} alt={props.alt} /></a>
}