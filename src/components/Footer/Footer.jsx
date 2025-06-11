import { Row, Col, Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import "./Footer.css";
import logo from "../../../public/assets/logo.png";

function Footer() {
  return (
    <footer className="bg-light  py-4">
      <Container fluid className="px-5">
        <Row className="justify-content-between">
          <Col md={3} className="text-center mb-3">
            <img className="logo" src={logo} alt="Logo" />
            <p>
              <i>"Equipando tus proyectos, impulsando tus ideas."</i>
            </p>
          </Col>

          <Col md={3} className="text-center mb-3">
            <h5>Menú</h5>
            <div className="d-flex justify-content-center gap-3 mb-3">
              <a href="/about">Nosotros</a>
            </div>
            <div className="d-flex justify-content-center gap-3 mb-3">
              <a href="/shop">Tienda</a>
            </div>
            <div className="d-flex justify-content-center gap-3 mb-3">
              <a href="/cart">Carrito</a>
            </div>
          </Col>
          <Col md={3} className="text-center mb-3">
            <h5>Utilidad</h5>
            <div className="d-flex justify-content-center gap-3 mb-3">
              <a href="/loved">Favoritos</a>
            </div>
            <div className="d-flex justify-content-center gap-3 mb-3">
              <a href="/questions">¿Tienes dudas?</a>
            </div>
          </Col>
          <Col md={3} className="text-center mb-3">
            <h5>Siguenos:</h5>
            <div className="d-flex justify-content-center gap-3 mb-3">
              <a href="#">
                <FaFacebook size={25} />
              </a>
              <a href="#">
                <FaInstagram size={25} />
              </a>
              <a href="#">
                <FaTwitter size={25} />
              </a>
            </div>
            <h5>Contactanos:</h5>
            <div>
              <a href="mailto:academy@rollingcodeschool.com">
                <FaEnvelope size={20} />
                <span className="icon">academy@rollingcodeschool.com</span>
              </a>
              <br />
              <a href="tel:+543815783030">
                <FaPhone size={20} />
                <span className="icon">+543815783030</span>
              </a>
            </div>
          </Col>
        </Row>

        {/* Derechos reservados */}
        <Row className="text-center mt-3">
          <Col>
            <small>
              &copy; {new Date().getFullYear()} Rolling Shop. Todos los derechos
              reservados.
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
