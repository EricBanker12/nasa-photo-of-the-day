import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const today = new Date().toISOString().replace(/T.+/,'')

const InputDate = styled.input.attrs({
    type: 'date',
    max: today
})`
    color: #282c34;
    font-size: 1.5rem;
    border: none;
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