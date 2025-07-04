import { Logueado } from "../../helpers/controlLogin";
import { Button, Card, Pagination } from "react-bootstrap";
import {  FaCartPlus, FaTrashAlt } from "react-icons/fa";
import { getFavs } from "../../helpers/fav-com";
import { useEffect, useState } from "react";
const id = JSON.parse(localStorage.getItem("id")) || null;

function LovedSection() {
  const [articulos, setArticulos] = useState([]);
    useEffect(() => {
      getFavs(id).then((data) => {
        console.log("valor", data.favoritos);
        setArticulos(data.favoritos);
      });
    }, []);
  //Se obtiene el valor de logueado
  const sesion = Logueado();
  return (
    <div>
      {sesion ? (
        <div className="text-center justify-content-center align-content-center align-items-center ">
          {" "}
          <h2 className="mb-3">Esta es tu lista de Deseos </h2>
          <div className="container">
            <div className=" container row   cards vw-100  ">
              {articulos.map((artic) => (
                <Card className="  shadow col-5 col-md-3 col-lg-2 ">
                  <Card.Img
                    className="product-image"
                    variant=""
                    src={artic.producto.img}
                  />
                  <Card.Body>
                    <Card.Title className="title "> {artic.producto.nombre}</Card.Title>
                    <Card.Text className="descripcion">
                      <span>
                        <strong>{artic.destacado}</strong>{" "}
                      </span>
                      <br />
                      {artic.producto.descripcion}
                      <br />
                      <strong className="precio">${artic.producto.precio}</strong> MXN
                    </Card.Text>
                    <Card.Text className="text-center ">
                      <a type="button" className="btn col-6">
                        <FaTrashAlt color="red" size={30} className="heart" />
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
        </div>
      ) : (
        <div className="text-center justify-content-center align-content-center align-items-center ">
          {" "}
          <h2 className="mb-3">Opps! </h2>
          <p>Es necesario iniciar sesion para poder ver tu lista de deceos</p>
        </div>
      )}
    </div>
  );
}

export default LovedSection;
