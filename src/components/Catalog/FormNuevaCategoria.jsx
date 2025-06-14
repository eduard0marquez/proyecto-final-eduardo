import "../Login/LoginRegistrer.css";
import { useEffect, useState } from "react";
import React from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import logo from "../../../public/assets/logo.png";
import { BsDisplay } from "react-icons/bs";
import { authLogin } from "../../helpers/ApiLogin";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import axios from "axios";
import { crearCategoria } from "../../helpers/categoriaApi";
import Swal from "sweetalert2";

const FormNuevaCategoria = ({ isOpen, closeModal }) => {
  /*Estructura de React Hook*/
  const {
    register,
    handleSubmit,
    formState: { error },
    reset,
  } = useForm();
  {
    /*Envio de info a la Base por medio de la API, se hace asincrona por el tiempo que puede demorar el proceso*/
  }
  const envioRegistro = async (data) => {
    /* Se ejecuta en AXIOS
           que es el que ayuda a interactuar con apis y se la importacion de authLogin que es el archivo de nuestro login y los datos */
    const datos = crearCategoria(data)
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
          <p>Nueva Categoria</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(envioRegistro)}>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            placeholder="Ingresa tu Nombre"
            type="text"
            {...register("nombre")}
          />

          <Form.Label>Descripción</Form.Label>
          <Form.Control
            required
            placeholder="Ingresa tu Apellido"
            type="text"
            id="apellido"
            {...register("descripcion")}
          />

          <Button type="submit" className="w-100 mt-3 bg-primary p-2">
            Crear
          </Button>

          <br />
        </Form>
      </Modal.Body>
      <Modal.Footer className="modal-style">
        <Button className="buscar" variant="secondary" onClick={closeModal}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FormNuevaCategoria;
