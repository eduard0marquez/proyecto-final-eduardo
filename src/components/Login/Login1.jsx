import { useEffect, useState } from "react";
import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import logo from "../../../public/assets/logo.png";
import { BsDisplay } from "react-icons/bs";
import "./LoginRegistrer.css";
import { authLogin } from "../../helpers/ApiLogin";
import Register from "./Register";
import { styled } from "@mui/material";

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Login = ({ isOpen, closeModal }) => {
  //Se daclaran estados para poder asignar si esta abierto o cerrado (visible o no el Registro)
  const [isRegistrerOpen, setIsRegistrerOpen] = useState(false);

  /*Estructura de React Hook*/
  const {
    register,
    handleSubmit,
    formState: { error },
    reset,
  } = useForm();
  const envioLogin = async (data) => {
    /* Se ejecuta y se le pasa como valor los datos del form */
    const datos = authLogin(data)
      .then((datos) => {
        const { token, email, password } = data;
        localStorage.setItem("email", email);
        localStorage.setItem("rol", datos.usuario.rol);
        localStorage.setItem("token", JSON.stringify(datos.token));
        console.log(datos.usuario);
        console.log(datos.token);
        if (datos.msg != "Login Ok") {
          Swal.fire({
            icon: "error",
            title: `¡Oops! ${datos.msg}`,
            text: " favor de verificar.",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          });
        } else {
          Swal.fire({
            icon: "success",
            title: `¡ ${`Bienvenido ${datos.usuario.nombre}`}!`,
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          });
          reset();
          closeModal(true);
        }
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error); // Manejar el error
      });
  };

  const abrirCerrar = async (data) => {
    const abrir = setIsRegistrerOpen(data);
    if (abrir == "undefined") {
      closeModal(true);
    }
    console
      .log(abrir)
      .then((abrir) => {
        if (abrir == "undefined") {
          closeModal(true);
        }
      })
      .catch((error) => {});
  };

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
        <Form onSubmit={handleSubmit(envioLogin)}>
          <Form.Label>Email</Form.Label>
          <Form.Control
            htmlFor="email"
            placeholder="Ingresa tu Email"
            type="email"
            required
            {...register("email")}
          />
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            minLength={8}
            placeholder="Ingresa tu Contraseña"
            type="password"
            {...register("password")}
          />
          <Button type="submit" className="w-100 mt-3 bg-primary p-2">
            Ingresar
          </Button>
          ¿No tienes cuenta?
          <a type="button" className="regis" onClick={() => abrirCerrar(true)}>
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
