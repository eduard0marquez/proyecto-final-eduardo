import { useEffect, useState } from "react";
import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import logo from "../../../public/assets/logo.png";
import { BsDisplay } from "react-icons/bs";
import "./LoginRegistrer.css";
import * as Yup from "yup";

const validationSchema = Yup.object({
  
  email: Yup.string()
    .email("Mail incorrecto")
    .required("El email es requerido"),
  password: Yup.string()
    .matches(/^[0-9]+$/, "Tiene que ser un número")
    .required("El número de teléfono es requerido"),
  comments: Yup.string(),
});

const Login = ({ isOpen, closeModal }) => {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <Modal show={isOpen} onHide={closeModal} animation={true}>
      <Modal.Header className="modal-style">
        <Modal.Title>
          <img className="logo" src={logo} alt="Logo" />
          <p>Iniciar Sesión</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Label>Email</Form.Label>
          <Form.Control
            htmlFor="email"
            placeholder="Ingresa tu Email"
            type="email"
          >

          </Form.Control>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            placeholder="Ingresa tu Contraseña"
            type="password"
          ></Form.Control>
          <Button className="w-100 mt-3 bg-primary p-2"> Ingresar</Button>
          <a href="">¿No tienes cuenta? Regístrate aqui</a>
        </Form>
      </Modal.Body>
      <Modal.Footer className="modal-style">
        <Button
          className="buscar"
          variant="secondary"
          onClick={closeModal}
          color=""
        >
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Login;
