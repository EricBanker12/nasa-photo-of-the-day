import React, {useState, useEffect} from 'react'

export default function Input(props) {

    const [today] = useState(new Date().toISOString().replace(/T.+/,''))

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
            <span>Astronomy Picture of the Day: </span>
            <input type="date" max={today} />
        </div>
    )
}