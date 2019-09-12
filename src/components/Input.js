import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const today = new Date().toISOString().replace(/T.+/,'')

const InputDate = styled.input.attrs({
    type: 'date',
    max: today
})`
    margin: 1em;
    color: #282c34;
    background-color: white;
    font-size: 1.25rem;
    border: 1px solid black;
    box-shadow: 0 0 12px black;
`

export default function Input(props) {

    useEffect(()=>{
        const input = document.querySelector('input')
        if (!input.value) input.value = props.date

        function setDate() {
            if (input.value && new Date(input.value) <= new Date(today)) {
                //console.log('setDate', input.value)
                props.handler(input.value)
            }
        }

        input.addEventListener('input', setDate)

        return () => {input.removeEventListener('input', setDate)}
    },[today,props])

    return (
        <div>
            <span>Date: </span>
            <InputDate />
        </div>
    )
}