import * as React from "react";
import { Button, Card, Pagination } from "react-bootstrap";
import { FaHeart, FaCartPlus } from "react-icons/fa";
import "./Shop.css";
import { getProductos } from "../../helpers/productosApi";
import { useEffect, useState } from "react";
import { AgregarFav } from "../../helpers/fav-com";
import Swal from "sweetalert2";
import NavBar from "../NavBar/NavBar";
import { useQuery } from "@tanstack/react-query";

function Shop() {
  const pagination = [];
  const [articulos, setArticulos] = useState([]);
  //Se usa UseRef , este no dispara el recargar la pagina, solo trae la info
  const [articulosRef, setArticulosRef] = useState(1);
  const [limteArtic, setLimiteArtic] = useState();
  const [paginas, setPagination] = useState([]);
  let pagin;
  let limiteArtic;
  //Si la pantalla es menor a 768(chica), entonces se pone un limite de articulo para que se muestren 10 articulos por pagina
  if (window.innerWidth < 768) {
    limiteArtic = 10;
  }
  //En caso de ser mayor a 991(Grande),entonces se pone un limite de articulo para que se muestren 15 articulos por pagina
  else if (window.innerWidth > 991) {
    limiteArtic = 15;
  }
  //En caso de no ser ni grande ni pequeña la pantalla,entonces se pone un limite de articulo para que se muestren 12 articulos por pagina
  else {
    limiteArtic = 12;
  }

  useEffect(() => {
    cargarInfo();
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
          location.reload();
        }
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error); // Manejar el error
      });
  }

  function compra(datos) {
    AgregarFav({ compra: `true`, producto: `${datos}` })
      .then((datos) => {
        console.log(datos);
        if (datos.msg === "Este articulo ya está en favoritos.") {
          Swal.fire({
            icon: "warning",
            title: `¡Oops! Este articulo ya fue agregado a favoritos o al carrito`,
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
            title: `¡${`Articulo agregado al carrito`}!`,
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          });
          location.reload();
        }
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error); // Manejar el error
      });
  }

  const cargarInfo = async (numberPagina) => {
    const respuesta = await getProductos({
      params: {
        pagina: numberPagina,
        limite: limiteArtic,
      },
    }).then((respuesta) => {
      if (respuesta.productos.page <= respuesta.productos.totalPages) {
        setPagination(respuesta.productos.totalPages);
        setArticulos(respuesta.productos.docs);
      } else {
        alert("no hay más datos");
      }
    });
  };
  //Se hace el contador para que se agreguen el numero de paginas correspondientes
  if (paginas > 1) {
    pagin=true
    for (let i = 1; i <= paginas; i++) {
      pagination.push(i);
    }
  }
  
  


  return (
    <>
      <div className="container">
        <div className=" container row   cards vw-100 cards ">
          {articulos?.map((artic) => (
            <Card key={artic._id} className="  shadow col-5 col-md-3 col-lg-2 ">
              <Card.Img className="product-image" variant="" src={artic.img} />
              <Card.Body>
                <Card.Title className="title "> {artic.nombre}</Card.Title>
                <Card.Text className="descripcion">
                  <span>
                    <strong>{artic.categoria.nombre}</strong>
                  </span>
                  <br />
                  {artic.descripcion}
                  <br />
                  <strong className="precio">${artic.precio}</strong> MXN
                </Card.Text>
                <Card.Text className="text-center ">
                  <a
                    type="button"
                    className="btn col-6"
                    onClick={() => {
                      favorito(artic._id);
                    }}
                  >
                    <FaHeart color="red" size={30} className="heart" />
                  </a>

                  <a
                    type="button"
                    className="btn col-6"
                    onClick={() => {
                      compra(artic._id);
                    }}
                  >
                    <FaCartPlus color="black" size={30} />
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
          {pagin && (
            <Pagination className="justify-content-center mt-5 mb-5">
              <Pagination.First
                onClick={() => {
                  cargarInfo(1);
                }}
              />

              {pagination?.map((pagina) => (
                <Pagination.Item
                  onClick={() => {
                    cargarInfo(pagina);
                  }}
                >
                  {pagina}
                </Pagination.Item>
              ))}

              <Pagination.Last
                onClick={() => {
                  cargarInfo(paginas);
                }}
              />
            </Pagination>
          )}
        </div>
      </div>
    </>
  );
}

export default Shop;
