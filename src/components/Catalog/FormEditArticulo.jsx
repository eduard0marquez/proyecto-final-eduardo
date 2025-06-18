import "../Login/LoginRegistrer.css";
import { useEffect, useState } from "react";
import React from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import logo from "../../../public/assets/logo.png";
import { BsDisplay } from "react-icons/bs";
import { authLogin } from "../../helpers/ApiLogin";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { crearProducto } from "../../helpers/productosApi";
import { getCategorias } from "../../helpers/categoriaApi";
import Swal from "sweetalert2";

const FormEditArticulo = ({ isOpen, closeModal }) => {
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    getCategorias().then((data) => {
      setCategorias(data.categorias);
    });
  }, []);

  const obtenerCategorias = getCategorias().then((obtenerCategorias) => {
    const { id } = obtenerCategorias;
    console.log();
  });
  console.log();

  const {
    register,
    handleSubmit,
    formState: { error },
    reset,
  } = useForm();

  const envioProducto = async (data) => {
    /* Se mandan los datos al metodo crear categoria  */
    const datos = crearProducto(data)
      .then((datos) => {
        const { nombre } = data;
        if (datos.msg === `El artículo ${nombre} ya existe`) {
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
          <p>Editar Artículo</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(envioProducto)}>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            placeholder="Nombre del Articulo"
            type="text"
            {...register("nombre")}
          />
          <Form.Label>Precio</Form.Label>
          <Form.Control
            required
            placeholder="Ingresa el precio"
            type="number"
            {...register("precio")}
          />

          <Form.Label>Descripción</Form.Label>
          <Form.Control
            required
            placeholder="Descripción del artículo"
            type="text"
            id="descripcion"
            {...register("descripcion")}
          />

          <Form.Label>Fabricante</Form.Label>
          <Form.Control
            required
            placeholder="Ingresa el fanricante"
            type="text"
            {...register("fabricante")}
          />

          <Form.Label>Imagen</Form.Label>
          <Form.Control
            required
            placeholder="Ingresa el link de tu imagen"
            type="text"
            {...register("img")}
          />

          <Form.Label>Stock</Form.Label>
          <Form.Control
            required
            placeholder="Pzas en exitencia"
            type="number"
            {...register("stock")}
          />
          <Form.Label>Categoria</Form.Label>
          <Form.Select
            required
            placeholder="Pzas en exitencia"
            type="select"
            {...register("categoria")}
          >
            <option>Selecciona una opcion</option>
            {categorias.map((categor) => (
              <option>{categor.nombre}</option>
            ))}
          </Form.Select>

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

export default FormEditArticulo;
