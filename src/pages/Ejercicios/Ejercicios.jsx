import React from "react";
import { Link } from "react-router-dom";
import ImgAbdomenPlano from "../../img/iconos secciones/abdomenplano.png";
import ImgGluteos from "../../img/iconos secciones/gluteos.png";
import ImgPesas from "../../img/iconos secciones/pesas.png";
import Card from "react-bootstrap/Card";
import { CardsDiv, CardDiv, ImgCard } from "./style/EjerciciosStyle";

const Ejercicios = () => {
  return (
    <div>
      <h1>Ejercicios</h1>
      <h3>Que quieres hacer?</h3>
      <CardsDiv>
        <CardDiv>
          <Link to="/AbdomenPlano">
            <ImgCard variant="top" src={ImgAbdomenPlano} alt="Abdomen Plano" />
          </Link>
          <Card.Body>
            <Card.Title>Abdomen</Card.Title>
          </Card.Body>
        </CardDiv>
        <CardDiv>
          <Link to="/Gluteos">
            <ImgCard variant="top" src={ImgGluteos} alt="Ejercicios Gluteos" />
          </Link>
          <Card.Body>
            <Card.Title>Gluteos</Card.Title>
          </Card.Body>
        </CardDiv>
        <CardDiv>
          <Link to="/QuemaGrasaPesas">
            <ImgCard variant="top" src={ImgPesas} alt="Ejercicios con Pesas" />
          </Link>
          <Card.Body>
            <Card.Title>Pesas</Card.Title>
          </Card.Body>
        </CardDiv>
      </CardsDiv>
    </div>
  );
};

export default Ejercicios;
