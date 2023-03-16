import React from 'react'
import { Link } from 'react-router-dom'
import {BtnHome} from './style/HomeStyle';


const Home = () => {
  return (
    <div>
        <h1>Home</h1>
        <h3>Ponte en forma con ejercicios fáciles en casa.</h3>
        <Link to="/Ejercicios"><BtnHome>Empezar</BtnHome></Link>
    </div>
  )
}

export default Home