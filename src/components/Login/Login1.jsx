import { useEffect, useState } from "react";
import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import logo from "../../../public/assets/logo.png";
import { BsDisplay } from "react-icons/bs";
import "./LoginRegistrer.css";
import { authLogin } from "../../helpers/ApiLogin";
import Register from "./Register";
import { styled } from "@mui/material";
import { LiaCloudSunSolid } from "react-icons/lia";

const Login = ({ isOpen, closeModal }) => {
  //Se daclaran estados para poder asignar si esta abierto o cerrado (visible o no el Registro)
  const [isRegistrerOpen, setIsRegistrerOpen] = useState(false);

  function abrirCerrar() {
    cerrar(true);
  }

  function cerrar(data) {
    setIsRegistrerOpen(data);
  }

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
          ></Form.Control>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            placeholder="Ingresa tu Contraseña"
            type="password"
          ></Form.Control>
          <Button className="w-100 mt-3 bg-primary p-2">Ingresar</Button>
          ¿No tienes cuenta?
          <a type="button" className="regis" onClick={() => abrirCerrar()}>
            <strong>Regístrate aqui</strong>
          </a>
          <br />
          <a href=""> Olvide mi contraseña</a>
        </Form>
      </Modal.Body>
      <Modal.Footer className="modal-style">
        <Button className="buscar" variant="secondary" onClick={closeModal}>
          Cerrar
        </Button>
        <Register
          isOpen={isRegistrerOpen}
          closeModal={() => setIsRegistrerOpen(false)}
        />
      </Modal.Footer>
      <Register />
    </Modal>
  );
};

export default Login;
