import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ImgAbdomenPlano from "../../img/iconos secciones/abdomenplano.png";
import Ej1 from "../../img/abdomen plano/ej1.jpg";
import Ej2 from "../../img/abdomen plano/ej2.jpg";
import Ej3 from "../../img/abdomen plano/ej3.jpg";
import Ej4 from "../../img/abdomen plano/ej4.jpg";
import Ej5 from "../../img/abdomen plano/ej5.jpg";
import Ej6 from "../../img/abdomen plano/ej6.jpg";
import Ej7 from "../../img/abdomen plano/ej7.jpg";
import Ej8 from "../../img/abdomen plano/ej8.jpg";
import Ej9 from "../../img/abdomen plano/ej9.jpg";
import Ej10 from "../../img/abdomen plano/ej10.jpg";
import {LittleImg, ImgGrande, ColStyle, DivTitulo, ImgIconoAbdomen, ButtonsDiv, ButtonsStyle} from './style/AbdomenStyle';
import { Link } from "react-router-dom";
import QuemaGrasaPesas from '../QuemaGrasaPesas/QuemaGrasaPesas';

const AbdomenPlano = () => {
  const [ImgActual, setImgActual] = useState(Ej1);
  const [nomImgActual, setNomImgActual] = useState("Ej1");
  return (
    <div>
        <DivTitulo>
            <ImgIconoAbdomen src={ImgAbdomenPlano} alt="Abdomen plano"></ImgIconoAbdomen>
            <h1>Abdomen Plano</h1>
        </DivTitulo>
      <Container>
        <Row>
          <Col>
            <ImgGrande src={ImgActual} alt={nomImgActual} />
          </Col>
          <ColStyle>
              <LittleImg
                src={Ej1}
                alt="Ej1"
                onClick={() =>{ 
                    setImgActual(Ej1)
                    setNomImgActual("Ej1")
                }}
              />
              <LittleImg
                src={Ej2}
                alt="Ej2"
                onClick={() => { 
                    setImgActual(Ej2)
                    setNomImgActual("Ej2")
                }}
              />
              <LittleImg
                src={Ej3}
                alt="Ej3"
                onClick={() => { 
                    setImgActual(Ej3)
                    setNomImgActual("Ej3")
                }}
              />
              <LittleImg
                src={Ej4}
                alt="Ej4"
                onClick={() => { 
                    setImgActual(Ej4)
                    setNomImgActual("Ej4")
                }}
              />
              <LittleImg
                src={Ej5}
                alt="Ej5"
                onClick={() => { 
                    setImgActual(Ej5)
                    setNomImgActual("Ej5")
                }}
              />
          </ColStyle>
          <ColStyle>
          <LittleImg
                src={Ej6}
                alt="Ej6"
                onClick={() => { 
                    setImgActual(Ej6)
                    setNomImgActual("Ej6")
                }}
              />
              <LittleImg
                src={Ej7}
                alt="Ej7"
                onClick={() => { 
                    setImgActual(Ej7)
                    setNomImgActual("Ej7")
                }}
              />
              <LittleImg
                src={Ej8}
                alt="Ej8"
                onClick={() => { 
                    setImgActual(Ej8)
                    setNomImgActual("Ej8")
                }}
              />
              <LittleImg
                src={Ej9}
                alt="Ej9"
                onClick={() => { 
                    setImgActual(Ej9)
                    setNomImgActual("Ej9")
                }}
              />
              <LittleImg
                src={Ej10}
                alt="Ej10"
                onClick={() => { 
                    setImgActual(Ej10)
                    setNomImgActual("Ej10")
                }}
              />
          </ColStyle>
        </Row>
      </Container>
      <ButtonsDiv>
        <Link to="/Ejercicios"><ButtonsStyle>Ejercicios</ButtonsStyle></Link>
        <Link to="/Gluteos"><ButtonsStyle>Gluteos</ButtonsStyle></Link>
        <Link to="/QuemaGrasaPesas"><ButtonsStyle>Pesas</ButtonsStyle></Link>
      </ButtonsDiv>
    </div>
  );
};

export default AbdomenPlano;
