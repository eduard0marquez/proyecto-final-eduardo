import { Logueado } from "../../helpers/controlLogin";
import { Button, Card, Pagination, Table } from "react-bootstrap";
import { FaCartPlus, FaTrashAlt } from "react-icons/fa";
import { getComp, borrarFav } from "../../helpers/fav-com";
import { useEffect, useState } from "react";
import React from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import Swal from "sweetalert2";
import MercadoPago from "../MercadoPago/MercadoPago";
import { agregarArticulo } from "../../helpers/mercadoPago";

// Inicializa Mercado Pago con tu public key

const id = JSON.parse(localStorage.getItem("id")) || null;

function Cartt() {
  const [articulos, setArticuloss] = useState([]);

  useEffect(() => {
    getComp(id).then((data) => {
      setArticuloss(data.favoritos);
    });
  }, []);
  //Se obtiene el valor de logueado
  const sesion = Logueado();

  function eliminarComp(datos) {
    console.log(datos);
    Swal.fire({
      title: `¿Segur@ que deseas quitar el articulo de Favoritos ?`,
      showCancelButton: true,
      confirmButtonText: "Si",
    }).then((result) => {
      if (result.isConfirmed) {
        borrarFav(datos).then((datos) => {
          console.log(datos);
          Swal.fire({
            icon: "success",
            title: `Articulo eliminado correctamente`,
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          });
          location.reload();
        });
      }
    });
  }

  function pagar() {
    agregarArticulo().then((data) => {
      console.log(data);
    });
  }

  return (
    <div>
      {sesion ? (
        <div className="text-center justify-content-center align-content-center align-items-center ">
          {" "}
          <h2 className="mb-3">Tus artículos </h2>
          <div className="container">
            <div className=" container row   cards vw-100  ">
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Articulo</th>
                    <th>Descripcion</th>
                    <th>Precio Unitario</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                {articulos.map((artic) => (
                  <tbody>
                    <tr>
                      <td>{artic.producto.nombre}</td>
                      <td>{artic.producto.descripcion}</td>
                      <td>${artic.producto.precio}</td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id="numero"
                          placeholder="1"
                          required
                          min={1}
                        />
                      </td>
                      <td></td>
                      <td>
                        <a
                          onClick={() => {
                            eliminarComp(artic._id);
                          }}
                        >
                          <FaTrashAlt color="red" size={18} className="trash" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                ))}
                <tfoot>
                  <tr>
                    <th>Total</th>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tfoot>
              </Table>
              <div>
                <div>
                  <MercadoPago />
                </div>
                <button
                  type="button"
                  className="btn buscar "
                  onClick={() => {
                    pagar();
                  }}
                >
                  Proceder al Pago
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center justify-content-center align-content-center align-items-center ">
          {" "}
          <h2 className="mb-3">Opps! </h2>
          <p>Es necesario iniciar sesion para poder ver tu carrito</p>
        </div>
      )}
    </div>
  );
}

export default Cartt;
