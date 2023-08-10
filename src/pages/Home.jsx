import React from 'react'
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Wrapper>
        <h1>WORK WITH US</h1>
        <hr/>
        <p>Peppermint Service Robots are uniquely positioned to be the first full-stack Service Robotics Company in the world.
Supported by SINE IIT-Bombay & Qualcomm, we manufacture Housekeeping Robots and Material Handling Robots tuned into your specific industry needs. Our full-stack platform, along with Mint OS, and modular assembly delivers the most efficient autonomous solutions for our clients.</p>
        <h3>Are you ready to join the team</h3>
        <Link to={"/jobs"}><button type="button" className="btn btn-info">OPEN POSITIONS</button></Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    text-align: center;
    margin: 0 20rem;

    h1{
        font-size: 4rem;
        margin-top: 5rem;
    }
    hr{
        margin-top: 2rem;
       border: 5px solid black;
    }
    p{
        margin-top: 2rem;
        font-family: 'Rubik', sans-serif;
    }
    h3{
        margin-top: 5rem;
    }
    button{
        margin-top: 2rem;
    }
`

export default Home;
