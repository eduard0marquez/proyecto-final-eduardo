import React from "react";
import { buscarProductos } from "../../helpers/buscar";
import { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { FaHeart, FaCartPlus } from "react-icons/fa";

function Search(value) {
  const [buscar, setbusqueda] = useState([]);
  //PRODUCTOS

  useEffect(() => {
    buscarProductos("tabla")
      .then((data) => {
        console.log(data.results);
        setbusqueda(data.results);
      })
      .catch((error) => {
        alert("No se encontraronresultados");
      });
  }, []);

  return (
    <div className="container">
            <div className=" container row   cards vw-100 ">
              {buscar.map((artic) => (
                <Card className="  shadow col-5 col-md-3 col-lg-2 ">
                  <Card.Img className="product-image" variant="" src={artic.img} />
                  <Card.Body>
                    <Card.Title className="title "> {artic.nombre}</Card.Title>
                    <Card.Text className="descripcion">
                      <span>
                                  <strong>{artic.categoria.nombre
                                  }</strong>{" "}
                      </span>
                      <br />
                      {artic.descripcion}
                      <br />
                      <strong className="precio">${artic.precio}</strong> MXN
                    </Card.Text>
                    <Card.Text className="text-center ">
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
            </div>
          </div>
  );
}

export default Search;
