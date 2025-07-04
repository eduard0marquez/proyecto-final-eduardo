import { useEffect, useState } from "react";
import React from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import logo from "../../../public/assets/logo.png";
import { BsDisplay } from "react-icons/bs";

import { authLogin } from "../../helpers/ApiLogin";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import axios from "axios";
import { actualizarUsuario, getUsuarioByID } from "../../helpers/usuariosApi";
import Swal from "sweetalert2";
import Login from "../Login/Login1";
const usuar = localStorage.getItem("user");

const FormEditUser = ({ isOpen, closeModal }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [user, setUser] = useState();

  /*Estructura de React Hook*/
  const {
    register,
    handleSubmit,
    formState: { error },
    reset,
  } = useForm();

  useEffect(() => {
    getUsuarioByID(usuar).then((data) => {
      setUser(data.usuario);
    });
  }, []);

  const envioRegistro = async (data) => {
    /* Se ejecuta y se le pasa como valor los datos del form */
    const datos = actualizarUsuario(data)
      .then((datos) => {
        const error = datos.errors;
        if (datos.mensaje != "Usuario cargado correctamente") {
          Swal.fire({
            icon: "error",
            title: `¡Oops! ${error[0].msg}`,
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
            title: `¡ ${datos.mensaje}!`,
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
    {
      /** .then(response => {
        console.log(response.json());
      if (datos.mensaje==console.log(datos);) {
        
        }
      else {
        
        }
        
       
    })*/
    }
  };
  if (!isOpen) return null;

  return (
    <Modal show={isOpen} onHide={closeModal} animation={true}>
      <Modal.Header className="modal-style">
        <Modal.Title>
          <img className="logo" src={logo} alt="Logo" />
          <p>Editar Usuario</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(envioRegistro)}>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            placeholder={user.nombre}
            type="text"
            {...register("nombre")}
          />

          <Form.Label>Apellido</Form.Label>
          <Form.Control
            required
            placeholder={user.apellido}
            type="text"
            id="apellido"
            {...register("apellido")}
          />

          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            placeholder={user.email}
            type="email"
            {...register("email")}
          />

          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            required
            placeholder={user.password}
            type="password"
            id="password"
            minLength={8}
            {...register("password")}
          />

          <Form.Label>Direccíon</Form.Label>
          <Form.Control
            placeholder={user.direccion}
            type="text"
            {...register("direccion")}
          />

          <Form.Label>Fecha de Nacimiento</Form.Label>
          <Form.Control
            value={user.fechaNacimiento}
            type="date"
            {...register("fechaNacimiento")}
          />

          <Form.Label>Imagen</Form.Label>
          <Form.Control
            placeholder={user.img}
            type="text"
            {...register("img")}
          />
          <Form.Label>Rol</Form.Label>
          <Form.Control
            placeholder={user.rol}
            type="text"
            {...register("rol")}
          />

          <Button type="submit" className="w-100 mt-3 bg-primary p-2">
            Guardar Cambios
          </Button>

          <br />
        </Form>
      </Modal.Body>
      <Modal.Footer className="modal-style">
        <Button className="buscar" variant="secondary" onClick={closeModal}>
          Cerrar
        </Button>
        <Login isOpen={isLoginOpen} closeModal={() => setIsLoginOpen(false)} />
      </Modal.Footer>
    </Modal>
  );
};

export default FormEditUser;
