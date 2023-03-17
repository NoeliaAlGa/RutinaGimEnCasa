import React from 'react'
import {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImgGluteos from '../../img/iconos secciones/gluteos.png';
import Ej1 from '../../img/gluteos/ej1Gluteos.png';
import Ej2 from '../../img/gluteos/ej2Gluteos.png';
import Ej3 from '../../img/gluteos/ej3Gluteos.png';
import Ej4 from '../../img/gluteos/ej4Gluteos.png';
import {LittleImg, ImgGrande, ColStyle, DivTitulo, ImgIconoAbdomen, ButtonsDiv, ButtonsStyle} from '../style/ApartadosStyle';
import {Link} from 'react-router-dom';

const Gluteos = () => {
  const [ImgActual, setImgActual] = useState(Ej1);
  const [nomImgActual, setNomImgActual] = useState("Ej1");
  return (
    <div>
        <DivTitulo>
            <ImgIconoAbdomen src={ImgGluteos} alt="Gluteos"></ImgIconoAbdomen>
            <h1>Gluteos</h1>
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
          </ColStyle>
        </Row>
      </Container>
      <ButtonsDiv>
        <Link to="/Ejercicios"><ButtonsStyle>Ejercicios</ButtonsStyle></Link>
        <Link to="/AbdomenPlano"><ButtonsStyle>Abdomen</ButtonsStyle></Link>
        <Link to="/QuemaGrasaPesas"><ButtonsStyle>Pesas</ButtonsStyle></Link>
      </ButtonsDiv>
    </div>
  );
}

export default Gluteos