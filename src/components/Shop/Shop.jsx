import * as React from "react";
import { Button, Card, Pagination } from "react-bootstrap";
import { FaHeart, FaCartPlus } from "react-icons/fa";
import "./Shop.css";
import { getProductos } from "../../helpers/productosApi";
import { useEffect, useState } from "react";
import { AgregarFav } from "../../helpers/fav-com";
import Swal from "sweetalert2";

function Shop() {
  const [articulos, setArticulos] = useState([]);
  useEffect(() => {
    getProductos().then((data) => {
      setArticulos(data.productos);
    });
  }, []);

  function favorito(datos) {
    AgregarFav({ favorit: `true`, producto: `${datos}` })
      .then((datos) => {
        if (datos.msg === "Este articulo ya está en favoritos.") {
          Swal.fire({
            icon: "warning",
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
            title: `¡${`Articulo agregado a favoritos`}!`,
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          });
        }
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error); // Manejar el error
      });
  }
  return (
    <>
      <div className="container">
        <div className=" container row   cards vw-100  ">
          {articulos.map((artic) => (
            <Card className="  shadow col-5 col-md-3 col-lg-2 ">
              <Card.Img className="product-image" variant="" src={artic.img} />
              <Card.Body>
                <Card.Title className="title "> {artic.nombre}</Card.Title>
                <Card.Text className="descripcion">
                  <span>
                    <strong>{artic.categoria.nombre}</strong>{" "}
                  </span>
                  <br />
                  {artic.descripcion}
                  <br />
                  <strong className="precio">${artic.precio}</strong> MXN
                </Card.Text>
                <Card.Text
                  className="text-center "
                  onClick={() => {
                    favorito(artic._id);
                  }}
                >
                  <a type="button" className="btn col-6">
                    <FaHeart color="red" size={30} className="heart" />
                  </a>

                  <a type="button" className="btn col-6">
                    <FaCartPlus color="black" size={30} />
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
          <Pagination className="justify-content-center mt-5 mb-5">
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>

            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>
      </div>
    </>
  );
}

export default Shop;
