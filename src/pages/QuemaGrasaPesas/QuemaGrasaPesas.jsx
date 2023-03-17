import React from 'react'
import {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImgPesas from '../../img/iconos secciones/pesas.png';
import Ej1 from '../../img/perder grasa con pesas/ej1PGP.jpg';
import Ej2 from '../../img/perder grasa con pesas/ej2PGP.jpg';
import Ej3 from '../../img/perder grasa con pesas/ej3PGP.jpg';
import Ej4 from '../../img/perder grasa con pesas/ej4PGP.jpg';
import Ej5 from '../../img/perder grasa con pesas/ej5PGP.jpg';
import { ImgGrande, ColStyle, DivTitulo, ImgIconoAbdomen, ButtonsStyle} from '../style/ApartadosStyle';
import {Link} from 'react-router-dom';
import {ImgPesasLittle, ButtonsDivPesas} from './style/PesasStyle';

const QuemaGrasaPesas = () => {
  const [ImgActual, setImgActual] = useState(Ej1);
  const [nomImgActual, setNomImgActual] = useState("Ej1");
  const [rutinaActual, setRutinaActual] = useState("Dia 1")
  return (
    <div>
        <DivTitulo>
            <ImgIconoAbdomen src={ImgPesas} alt="Pesas"></ImgIconoAbdomen>
            <h1>Quema grasa con pesas</h1>
        </DivTitulo>
      <Container>
        <Row>
          <Col>
          <h2>{rutinaActual}</h2>
            <ImgGrande src={ImgActual} alt={nomImgActual} />
          </Col>
          <ColStyle>
              <ImgPesasLittle
                src={Ej1}
                alt="Ej1"
                onClick={() =>{ 
                    setImgActual(Ej1)
                    setNomImgActual("Ej1")
                    setRutinaActual("Dia 1")
                }}
              />
              <ImgPesasLittle
                src={Ej2}
                alt="Ej2"
                onClick={() => { 
                    setImgActual(Ej2)
                    setNomImgActual("Ej2")
                    setRutinaActual("Dia 2")
                }}
              />
              <ImgPesasLittle
                src={Ej3}
                alt="Ej3"
                onClick={() => { 
                    setImgActual(Ej3)
                    setNomImgActual("Ej3")
                    setRutinaActual("Dia 3")
                }}
              />
              <ImgPesasLittle
                src={Ej4}
                alt="Ej4"
                onClick={() => { 
                    setImgActual(Ej4)
                    setNomImgActual("Ej4")
                    setRutinaActual("Dia 4")
                }}
              />
              <ImgPesasLittle
                src={Ej5}
                alt="Ej5"
                onClick={() => { 
                    setImgActual(Ej5)
                    setNomImgActual("Ej5")
                    setRutinaActual("Dia 5")
                }}
              />
          </ColStyle>
        </Row>
      </Container>
      <ButtonsDivPesas>
        <Link to="/Ejercicios"><ButtonsStyle>Ejercicios</ButtonsStyle></Link>
        <Link to="/AbdomenPlano"><ButtonsStyle>Abdomen</ButtonsStyle></Link>
        <Link to="/Gluteos"><ButtonsStyle>Gluteos</ButtonsStyle></Link>
      </ButtonsDivPesas>
    </div>
  );
}

export default QuemaGrasaPesas