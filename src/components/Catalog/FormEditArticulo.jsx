import "../Login/LoginRegistrer.css";
import { useEffect, useState } from "react";
import React from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import logo from "../../../public/assets/logo.png";
import { BsDisplay } from "react-icons/bs";
import { authLogin } from "../../helpers/ApiLogin";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {
  getProductoByID,
  actualizarProducto,
} from "../../helpers/productosApi";
import { getCategorias } from "../../helpers/categoriaApi";
import Swal from "sweetalert2";
const articul = localStorage.getItem("artic");

const FormEditArticulo = ({ isOpen, closeModal }) => {
  const [articulo, setArticulo] = useState([]);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    getProductoByID(articul).then((data) => {
      setArticulo(data.producto);
    });
  }, []);
  useEffect(() => {
    getCategorias().then((data) => {
      setCategorias(data.categorias);
    });
  }, []);
  const {
    register,
    handleSubmit,
    formState: { error },
    reset,
  } = useForm();

  const envioProducto = async (data) => {
    let nombr = articulo.nombre;
    let prec = articulo.precio;
    let descrip = articulo.descripcion;
    let fabric = articulo.fabricante;
    let imag = articulo.img;
    let stoc = articulo.stock;
    let categori = articulo.categoria._id;

    if (data.nombre != "") {
      nombr = data.nombre;
    }
    if (data.precio != "") {
      prec = data.precio;
    }
    if (data.descripcion != "") {
      descrip = data.descripcion;
    }
    if (data.fabricante != "") {
      fabric = data.fabricante;
    }
    if (data.img != "") {
      imag = data.img;
    }
    if (data.stock != "") {
      stoc = data.stock;
    }
    if (data.categoria != "") {
      categori = data.categoria;
    }

    console.log(
      "nombre : " +
        nombr +
        " precio : " +
        prec +
        " descripcion : " +
        descrip +
        " fabricante : " +
        fabric +
        " imagen :" +
        imag +
        "stock : " +
        stoc +
        "categoria:" +
        categori
    );

    /* Se mandan los datos al metodo crear categoria  */
    const datos = actualizarProducto(articul, {
      nombre: nombr,
      precio: prec,
      descripcion: descrip,
      fabricante: fabric,
      img: imag,
      stock: stoc,
      destacado: data.destacado,
      categoria: categori,
    })
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
            placeholder={articulo.nombre}
            type="text"
            {...register("nombre")}
          />
          <Form.Label>Precio</Form.Label>
          <Form.Control
            placeholder={articulo.precio}
            type="number"
            {...register("precio")}
          />

          <Form.Label>Descripción</Form.Label>
          <Form.Control
            placeholder={articulo.descripcion}
            type="text"
            id="descripcion"
            {...register("descripcion")}
          />
          <Form.Label>Destacado</Form.Label>
          <Form.Check checked={articulo.destacado} {...register("destacado")} />

          <Form.Label>Fabricante</Form.Label>
          <Form.Control
            placeholder={articulo.fabricante}
            type="text"
            {...register("fabricante")}
          />

          <Form.Label>Imagen</Form.Label>
          <Form.Control
            placeholder={articulo.img}
            type="text"
            {...register("img")}
          />

          <Form.Label>Stock</Form.Label>
          <Form.Control
            placeholder={articulo.stock}
            type="number"
            {...register("stock")}
          />
          <Form.Label>Categoria</Form.Label>
          <Form.Select type="select" {...register("categoria")}>
            <option value={""}>{articulo.categoria.nombre}</option>
            {categorias.map((categor) => (
              <option value={categor._id}>{categor.nombre}</option>
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
