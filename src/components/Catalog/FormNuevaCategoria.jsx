import "../Login/LoginRegistrer.css";
import { useEffect, useState } from "react";
import React from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import logo from "../../../public/assets/logo.png";
import { BsDisplay } from "react-icons/bs";
import { authLogin } from "../../helpers/ApiLogin";
import { useForm } from "react-hook-form";
import * as yup from "yup";
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
 
  const envioCategoria = async (data) => {
    /* Se mandan los datos al metodo crear categoria  */
    const datos = crearCategoria(data)
      .then((datos) => {
        const { nombre } = data;
        if (datos.msg === `La categoria ${nombre} ya existe`) {
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
            title: `¡ ${datos.msg}!`,
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
          <p>Nueva Categoria</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(envioCategoria)}>
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
            placeholder="Descripción de la categoria"
            type="text"
            id="descripcion"
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
