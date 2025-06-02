import React from 'react'
import { Col, Container, Image, Row } from "react-bootstrap";
function About() {
  return (
    <Container>
        <div className="whit vh-100 m-2">
          <h3  className=" text-center mb-5 text-uppercase fw-bold fs-1 mt-5 rounded px-3 py-2">Nuestra Historia</h3>
          <p className='text-center'> 
          Rolling Shop “Equipando tus proyectos, impulsando tus ideas.” Nuestro sitio web es una plataforma de comercio electrónico especializada en la venta de artículos y herramientas para reparaciones y mejoras del hogar. Nuestro catálogo incluye productos de plomería, albañilería, pintura, cerrajería y más, ofreciendo soluciones prácticas y accesibles tanto para profesionales como para personas que realizan mejoras por cuenta propia. A través de un servicio confiable, asesoramiento útil y envíos rápidos, buscamos convertirnos en un aliado esencial para quienes transforman ideas en acción.
          </p>
          
          <p className=' text-center'>
            ¡Equipate con nuestros articulos e impulsa tus ideas!
          </p>
          <br />
          <h3 className="whit-des text-center">Desarrolladores</h3>
        </div>
        
      </Container>
  )
}

export default About
