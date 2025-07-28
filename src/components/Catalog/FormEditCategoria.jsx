import "../Login/LoginRegistrer.css";
import { useEffect, useState } from "react";
import React from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import logo from "../../../public/assets/logo.png";
import { BsDisplay } from "react-icons/bs";
import { authLogin } from "../../helpers/ApiLogin";
import { useForm } from "react-hook-form";
import {
  actualizarCategoria,
  getCategoriaByID,
} from "../../helpers/categoriaApi";
import Swal from "sweetalert2";
const categor = localStorage.getItem("category");

const FormEditCategoria = ({ isOpen, closeModal }) => {
  const [consulta, setConsulta] = useState();

  //PRODUCTOS
  useEffect(() => {
    getCategoriaByID(categor).then((data) => {
      localStorage.removeItem("category");
      setConsulta(data.categoria);
    });
  }, []);

  /*Estructura de React Hook*/
  const {
    register,
    handleSubmit,
    formState: { error },
    reset,
  } = useForm();

  const envioCategoria = async (data) => {
    let nombr = consulta.nombre;
    let descrip = consulta.descripcion;
   
    /* Se mandan los datos al metodo crear categoria  */
    if (data.descripcion != '') {
      descrip = data.descripcion;
    } else if ((data.nombre != '')) {
      nombr = data.nombre;
    }
  
    const datos = actualizarCategoria(categor, {
     nombre: nombr,
     descripcion: descrip,
    })
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
          <p>Editar Categoria</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(envioCategoria)}>
          <Form.Label>Nombre (Opcional)</Form.Label>
          <Form.Control
            placeholder={consulta.nombre}
            type="text"
            {...register("nombre")}
          />

          <Form.Label>Descripción (Opcional)</Form.Label>
          <Form.Control
            placeholder={consulta.descripcion}
            type="text"
            id="descripcion"
            {...register("descripcion")}
          ></Form.Control>

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
      </Modal.Footer>
    </Modal>
  );
};

export default FormEditCategoria;
