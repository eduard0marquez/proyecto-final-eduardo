import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { TbBackground } from "react-icons/tb";
import "./About.css";
function About() {
  return (
    <Container style={{ marginTop: 100 }}>
      <div className="  m-2 ">
        <h3 className=" text-center mb-5 text-uppercase fw-bold fs-1 mt-5 rounded px-3 py-2">
          Nuestra Historia
        </h3>
        <p className="text-center">
          Rolling Shop “Equipando tus proyectos, impulsando tus ideas.” Nuestro
          sitio web es una plataforma de comercio electrónico especializada en
          la venta de artículos y herramientas para reparaciones y mejoras del
          hogar. Nuestro catálogo incluye productos de plomería, albañilería,
          pintura, cerrajería y más, ofreciendo soluciones prácticas y
          accesibles tanto para profesionales como para personas que realizan
          mejoras por cuenta propia. A través de un servicio confiable,
          asesoramiento útil y envíos rápidos, buscamos convertirnos en un
          aliado esencial para quienes transforman ideas en acción.
        </p>

        <p className=" text-center ">
          <strong>
            <i>¡Equipate con nuestros articulos e impulsa tus ideas!</i>
          </strong>
        </p>
        <br />
        <h3 className="whit-des text-center mb-5">Desarrollador</h3>
        <Col col-xs-12 col-sm-6 col-md-4>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <Image
                  className="foto"
                  src="https://res.cloudinary.com/dppgbrtfk/image/upload/v1750212456/lnckxptnzxen7w71hiys.jpg"
                  roundedCircle
                />

                <h4>Eduardo Marquez</h4>
              </div>
              <div className="flip-card-back">
                <h1>Eduardo Marquez</h1>
                <p>Ocupación: Desarrollador</p>
                <p>Edad: 29 años</p>
              </div>
            </div>
          </div>
        </Col>
      </div>
    </Container>
  );
}

export default About;
