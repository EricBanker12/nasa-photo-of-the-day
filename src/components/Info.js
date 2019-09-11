import React from 'react'

export default function Info(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            {props.copyright ? <p>copyright: {props.copyright}</p>:''}
            <p>{props.explanation}</p>
        </div>
    )
}