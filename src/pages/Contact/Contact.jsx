import React from "react";
import { ContactForm } from "../../components";
import { Container, Row, Col } from "react-bootstrap";

function Contact() {
  return (
    <Container
      style={{ marginTop: 100 } }
      
      
    >
      <Row className="text-center">
        <Col>
          <header className="mt-5">
            <div>
              <h3 className=" text-center mb-5 text-uppercase fw-bold fs-1 mt-5 rounded px-3 py-2">
                Contacto
              </h3>
            </div>
          </header>

          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
