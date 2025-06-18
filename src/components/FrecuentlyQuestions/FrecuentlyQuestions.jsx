import React from "react";
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

function FrecuentlyQuestions() {
  return (
    <Container style={{ marginTop: 100 }}>
      <div className="  m-2 ">
        <h3 className=" text-center mb-5 text-uppercase fw-bold fs-1 mt-5 rounded px-3 py-2">
          Preguntas Frecuentes
        </h3>
        <Accordion className="mb-5">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              ¿Puedo hacer cambios en mi pedido después de haberlo realizado?
            </Accordion.Header>
            <Accordion.Body>
              Sí, siempre que tu pedido no haya sido procesado para envío. Te
              recomendamos contactarnos lo antes posible vía correo o WhatsApp
              para solicitar cualquier cambio en dirección, productos o
              cantidades.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              ¿Qué pasa si recibo un producto dañado o incorrecto?
            </Accordion.Header>
            <Accordion.Body>
              En Rolling Shop nos aseguramos de que tu pedido llegue en perfecto
              estado. Si recibes un artículo dañado o equivocado, contáctanos
              dentro de las primeras 48 horas tras la recepción. Te pediremos
              una foto del producto y te enviaremos el reemplazo sin costo
              adicional.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              ¿Puedo comprar como empresa y solicitar precios especiales?
            </Accordion.Header>
            <Accordion.Body>
              Sí, ofrecemos soluciones personalizadas para empresas,
              contratistas, talleres y proyectos grandes. Puedes escribirnos a
              través de nuestro formulario de contacto o al correo de ventas
              para cotizaciones especiales y convenios de suministro.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              ¿Rolling Shop tiene algún programa de fidelidad o descuentos para
              clientes frecuentes?
            </Accordion.Header>
            <Accordion.Body>
              Estamos desarrollando un programa de recompensas para nuestros
              clientes recurrentes. Por el momento, puedes registrarte en
              nuestro newsletter y redes sociales para recibir cupones,
              promociones exclusivas y noticias de nuevos productos.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              ¿Cómo me entero de nuevas promociones o lanzamientos de productos?
            </Accordion.Header>
            <Accordion.Body>
              Te recomendamos suscribirte a nuestro boletín y seguirnos en redes
              sociales. Allí compartimos promociones exclusivas, lanzamientos de
              temporada, descuentos por tiempo limitado y recomendaciones para
              tus proyectos.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              ¿Puedo guardar productos en una lista de deseos?
            </Accordion.Header>
            <Accordion.Body>
              Sí, al crear una cuenta en nuestro sitio, puedes añadir productos
              a tu lista de deseos para comprarlos más adelante, seguir sus
              precios o consultar disponibilidad futura.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>
              ¿Qué hago si tengo un problema al hacer el pago?
            </Accordion.Header>
            <Accordion.Body>
              Si tu pago no se procesa correctamente, revisa que tus datos estén
              bien ingresados o intenta con otro método de pago. Si el problema
              persiste, contáctanos para ayudarte a completar tu compra de forma
              segura.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>¿Los precios incluyen IVA?</Accordion.Header>
            <Accordion.Body>
              Sí, todos nuestros precios publicados ya incluyen el IVA, por lo
              que no tendrás sorpresas al momento de pagar.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>
              ¿Cuáles son sus horarios de atención?
            </Accordion.Header>
            <Accordion.Body>
              Nuestro equipo de atención trabaja de lunes a viernes de 9:00 a.m.
              a 6:00 p.m. y los sábados de 9:00 a.m. a 2:00 p.m., horario del
              centro de México.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </Container>
  );
}

export default FrecuentlyQuestions;
