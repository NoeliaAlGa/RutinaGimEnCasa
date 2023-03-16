import React from "react";
import { Link } from "react-router-dom";
import ImgAbdomenPlano from "../../img/iconos secciones/abdomenplano.png";
import ImgGluteos from "../../img/iconos secciones/gluteos.png";
import ImgPesas from "../../img/iconos secciones/pesas.png";
import Card from "react-bootstrap/Card";
import { CardsDiv, CardDiv, ImgCard, H1Style, DivEjercicios } from "./style/EjerciciosStyle";

const Ejercicios = () => {
  return (
    <DivEjercicios>
      <H1Style>Ejercicios</H1Style>
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
    </DivEjercicios>
  );
};

export default Ejercicios;
