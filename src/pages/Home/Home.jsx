import React from 'react'
import { Link } from 'react-router-dom'
import {BtnHome, BodyHome, ImgLogo} from './style/HomeStyle';
import ImgLogoGim from '../../img/logo/home-fitness-turquoise-concept-icon-2257797.png'

const Home = () => {
  return (
    <BodyHome>
      <div>
          <ImgLogo src={ImgLogoGim} alt="Logo gim en casa"></ImgLogo>
          <h3>Ponte en forma con ejercicios fáciles en casa.</h3>
          <Link to="/Ejercicios"><BtnHome>Empezar</BtnHome></Link>
    </div>
    </BodyHome>
  )
}

export default Home