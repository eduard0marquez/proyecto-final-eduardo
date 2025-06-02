import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./NotFoundPage.css";
import john from'../../../public/assets/40Oj.gif'

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Container fluid className='vh-100 d-flex align-items-center justify-content-center bg-light'>
      <Row className='text-center'>
        <Col>
          <img className='john' src={john} alt="" />
          <h1 className='display-1 fw-bold '>404</h1>
          <h2 className='mb-3'>Opps! Pagina no encontrada</h2>
          <p>La pagina que esta buscando no existe o fue removida</p>
          <Button className='boton' size='lg' onClick={()=> navigate('/')}>Ir al Inicio</Button>
        </Col>

      </Row>

    </Container>
  )
}

export default NotFoundPage
