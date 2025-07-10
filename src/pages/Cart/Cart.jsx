import { TbBackground } from "react-icons/tb";
import { Col, Container, Image, Row } from "react-bootstrap";

import { Cartt } from "../../components";

function Cart() {
  return (
    <Container style={{ marginTop: 100 }} className="min-vh-100">
      <div className="  m-2 ">
        <h3 className=" text-center mb-5 text-uppercase fw-bold fs-1 mt-5 rounded px-3 py-2">
          Carrito
        </h3>
        <Cartt />
      </div>
    </Container>
  );
}

export default Cart;
