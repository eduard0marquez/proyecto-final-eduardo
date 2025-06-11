import { useState } from "react";
import { Container, Nav, Navbar, Form, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../public/assets/logo.png";
import "./NavBar.css";
import { FaHeart, FaCartPlus, FaQuestionCircle, FaUser } from "react-icons/fa";
import Login from "../Login/LoginRegistrer";

function NavBar() {
  //Se daclaran estados para poder asignar si esta abierto o cerrado (visible o no)
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  return (
    <Container>
      <Navbar expand="lg" className="fixed-top bg-body-tertiary shadow ">
        <Container>
          <Navbar.Brand className="navbar-brand ">
            <Link to="/">
              <img className="logo" src={logo} alt="Logo" />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mh-1 justify-content-end w-100">
              <Form className="d-flex  w-100 ">
                <Form.Control
                  type="search"
                  placeholder="Buscar por producto..."
                  className="me-1"
                  aria-label="Search"
                />
                <Button className="buscar">Buscar </Button>
              </Form>
            </Nav>

            <Nav className="me-auto justify-content-end w-100">
              <Nav.Link href="/" className="active text-uppercase">
                Inicio
              </Nav.Link>
              <Nav.Link href="/about" className="active text-uppercase">
                Nosotros
              </Nav.Link>
              <Nav.Link href="/shop" className="active text-uppercase">
                Tienda
              </Nav.Link>
              <Nav.Link href="/contact" className="active text-uppercase">
                Contacto
              </Nav.Link>

              <a type="button" className="btn " href="/questions">
                <FaQuestionCircle color="#0d6efd" size={25} />
              </a>

              <a type="button" className="btn " href="/loved">
                <FaHeart color="red" size={25} />
              </a>

              <a type="button" className="btn " href="/cart">
                <FaCartPlus color="black" size={25} />
              </a>

              {/*Se crea el boton y se cambia el estado del modal a "true" para mostrarlo */}
              <a
                type="button"
                className="btn"
                onClick={() => setIsLoginOpen(true)}
              >
                <FaUser color="#fd671a" size={25} />
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Login isOpen={isLoginOpen} closeModal={() => setIsLoginOpen(false)} />
    </Container>
  );
}

export default NavBar;
