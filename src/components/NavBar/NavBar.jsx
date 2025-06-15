import { useContext, useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  Form,
  Button,
  Modal,
  Dropdown,
  DropdownButton,
  DropdownMenu,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../public/assets/logo.png";
import "./NavBar.css";
import {
  FaHeart,
  FaCartPlus,
  FaQuestionCircle,
  FaUser,
  FaSignInAlt,
  FaUserPlus,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import Login from "../Login/Login1";
import Register from "../Login/Register";
import context from "react-bootstrap/esm/AccordionContext";
import { UserContext } from "../Contextt/user.context";
import Swal from "sweetalert2";

function NavBar() {
  //Se daclaran estados para poder asignar si esta abierto o cerrado (visible o no)
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegistrerOpen, setIsRegistrerOpen] = useState(false);

  const Logout = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("rol");
    Swal.fire({
      icon: "success",
      title: `¡ ${`La sesión se cerro correctamente`}!`,
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
    
  };

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
              <Nav.Link href="/" className="btn active text-uppercase">
                <span className="menuprincipal">Inicio</span>
              </Nav.Link>
              <Nav.Link href="/about" className="btn active text-uppercase">
                <span className="menuprincipal">Nosotros</span>
              </Nav.Link>

              <Nav.Link href="/contact" className="btn active text-uppercase">
                <span className="menuprincipal">Contacto</span>
              </Nav.Link>

              <a type="button" className="btn " href="/questions">
                <FaQuestionCircle color="#0d6efd" size={25} />
              </a>

              <a type="button" className="btn " href="/loved">
                <FaHeart color="red" size={25} className="heart" />
              </a>

              <a type="button" className="btn " href="/cart">
                <FaCartPlus color="black" size={25} />
              </a>

              {/*Se crea el boton y se cambia el estado del modal a "true" para mostrarlo */}

              <NavDropdown
                title={<FaUser color="#fd671a" size={25} />}
                id="basic-nav-dropdown"
                className="btnn"
              >
                <Dropdown.Item onClick={() => setIsLoginOpen(true)}>
                  <FaSignInAlt color="#fd671a" size={15} />
                  <span className=" submenubtn">Iniciar Sesion</span>
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setIsRegistrerOpen(true)}>
                  <FaUserPlus color="#fd671a" size={15} />
                  <span className="submenubtn">Registrarse</span>
                </Dropdown.Item>
                <Dropdown.Item href="#link3">
                  <FaCog color="#fd671a" size={15} />
                  <span className="submenubtn">Mi perfil</span>
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setIsLoginOpen(true)}>
                  <FaSignOutAlt color="#fd671a" size={15} />
                  <span className=" submenubtn" onClick={Logout}>
                    Cerrar Sesion
                  </span>
                </Dropdown.Item>
                <Dropdown.Divider />

                <Dropdown.Item href="/catalog">Catalogos</Dropdown.Item>

                <Dropdown.Item href="#link4">Pedidos</Dropdown.Item>
                <Dropdown.Item href="#link4">Reportes</Dropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Login isOpen={isLoginOpen} closeModal={() => setIsLoginOpen(false)} />
      <Register
        isOpen={isRegistrerOpen}
        closeModal={() => setIsRegistrerOpen(false)}
      />
    </Container>
  );
}

export default NavBar;
