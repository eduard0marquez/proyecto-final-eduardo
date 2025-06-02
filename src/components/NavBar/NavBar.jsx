import { Container, Nav, Navbar,Form,Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from'../../../public/assets/logo.png'
import "./NavBar.css";
import { FaHeart,FaCartPlus,FaQuestionCircle,FaUser } from "react-icons/fa";
function NavBar() {
  return (
      <Navbar expand='lg' className='fixed-top bg-body-tertiary shadow '>
          <Container >
         
              <Navbar.Brand className="navbar-brand " >
                  <Link to="/" >
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
                  <Button className="buscar" >Buscar </Button>
                  </Form>
                  
              </Nav>
                  
              <Nav className="me-auto justify-content-end w-100">
                  <Nav.Link href="/" className="active text-uppercase">Inicio</Nav.Link>
                  <Nav.Link href="/about" className="active text-uppercase">Nosotros</Nav.Link>
                  <Nav.Link href="/shop" className="active text-uppercase">Tienda</Nav.Link>
                  <Nav.Link href="/contact" className="active text-uppercase">Contacto</Nav.Link>
                  <Nav.Link href="/questions" className="active text-uppercase" title="Preguntas Frecuentes"><FaQuestionCircle /></Nav.Link>
                      <Nav.Link href="/loved" className="active text-uppercase favorito " title="Favoritos">
                          <button type="button" class="btn btn-success">
                              <FaHeart />
                              <span class="badge badge-light">4</span>
                          </button>
                      </Nav.Link>
                      <Nav.Link href="/cart" className="active text-uppercase" title="Carrito">
                          <button type="button" class="btn btn-primary">
                              <FaCartPlus />
                              <span class="badge badge-light">$0</span>
                          </button>
                      </Nav.Link>
                  <Nav.Link href="/cart" className="active text-uppercase" title="Usuario"><FaUser /></Nav.Link>
                     
                  
              </Nav>
              </Navbar.Collapse>         

              
                  
              
          </Container>
          
    </Navbar>
  )
}

export default NavBar
