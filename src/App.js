import React, {useState, useEffect} from "react"
import axios from 'axios'
import styled from 'styled-components'
import Header from './components/Header'
import Image from './components/Image'
import Info from './components/Info'
import Input from './components/Input'
import "./App.css"

const Container = styled.div`
    overflow: hidden;
    min-height: 100vh;
    background-color: #282c34;
    color: white;
    line-height: 1.5;
    font-size: 1.25rem;
    text-shadow:
        -1px -1px 0 black,
        1px -1px 0 black,
        -1px 1px 0 black,
        1px 1px 0 black,
        0 0 12px black;

    header, section {
        position:relative;
        z-index: 2;
        width 70%;
        margin 0 auto;
        @media (max-width:800px) {
            width: 90%;
        }
    }

    a {
        color: white;
        text-decoration: none;
        &:hover {
            text-decoration:underline;
        }
    }
`

function App() {

  // var
  const [data, setData] = useState({})
  const [date, setDate] = useState('')

  useEffect(()=>{
    // commented out to prevent API over-usage
    // axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY${date?`&date=${date}`:''}`)
    //     .then(resp=>{
    //         //console.log(resp)
    //         setData(resp.data)
    //     })
    //     .catch(err=>{
    //         console.error(err)
    //     })

    // temporary manual response
    setData({
        copyright: "Bray Falls",
        date: "2019-09-11",
        explanation: "What energizes the Heart Nebula? First, the large emission nebula dubbed IC 1805 looks, in whole, like a human heart.  The nebula glows brightly in red light emitted by its most prominent element: hydrogen.  The red glow and the larger shape are all powered by a small group of stars near the nebula's center.  In the center of the Heart Nebula are young stars from the open star cluster Melotte 15 that are eroding away several picturesque dust pillars with their energetic light and winds. The open cluster of stars contains a few bright stars nearly 50 times the mass of our Sun, many dim stars only a fraction of the mass of our Sun, and an absent microquasar that was expelled millions of years ago.  The Heart Nebula is located about 7,500 light years away toward the constellation of Cassiopeia.  Coincidentally, a small meteor was captured in the foreground during imaging  and is visible above the dust pillars.  At the top right is the companion Fishhead Nebula.",
        hdurl: "https://apod.nasa.gov/apod/image/1909/HeartNebula_Falls_2378.jpg",
        media_type: "image",
        service_version: "v1",
        title: "IC 1805: The Heart Nebula",
        url: "https://apod.nasa.gov/apod/image/1909/HeartNebula_Falls_960.jpg",
    })

  },[date])
  
  return (
    <div className="App">
      <Container>
        <Header />
        <section>
          <Input date={data.date} handler={setDate} />
          <Info title={data.title} copyright={data.copyright} explanation={data.explanation} hdurl={data.hdurl} />
        </section>
        <Image src={data.url} alt={data.title} />
      </Container>
    </div>
  );
}

export default App;
