import { useState, useEffect } from "react";
import { Container, Tab, Tabs, Button, Form, Table } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { FaPlus, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "./Catalog.css";
import FormNuevaCategoria from "./FormNuevaCategoria";
import FormEditCategoria from "./FormEditCategoria";
import FormNuevoArticulo from "./FormNuevoArticulo";
import FormEditArticulo from "./FormEditArticulo";
import FormEditUser from "./FormEditUser";
import { borrarCategoria, getCategorias } from "../../helpers/categoriaApi";
import { getProductos, borrarProducto } from "../../helpers/productosApi";
import Register from "../Login/Register";
import { getUsuarios, borrarUsuario } from "../../helpers/usuariosApi";
import Swal from "sweetalert2";

function Catalog() {
  const [isNewCategoriOpen, setIsNewCategoriOpen] = useState(false);
  const [isEditCategoriOpen, setIsEditCategoriOpen] = useState(false);
  const [isNewArticuloOpen, setIsNewArticuloiOpen] = useState(false);
  const [isEditArticuloiOpen, setIsEditArticuloiOpen] = useState(false);
  const [isRegistrerOpen, setIsRegistrerOpen] = useState(false);
  const [isEditUserOpen, setIsEditUseriOpen] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const [productos, setProductos] = useState([]);
  const [users, setUsuarios] = useState([]);

  //PRODUCTOS
  useEffect(() => {
    getProductos().then((data) => {
      setProductos(data.productos);
    });
  }, []);
  //CATEGORIAS
  useEffect(() => {
    getCategorias().then((data) => {
      setCategorias(data.categorias);
    });
  }, []);
  //USUARIOS
  useEffect(() => {
    getUsuarios().then((data) => {
      setUsuarios(data.usuarios);
    });
  }, []);

  //  **********************************************   ELIMINAR CATEGORIA **********************************************************
  function eliminarArtic(tipo, value) {
    Swal.fire({
      title: `¿Segur@ que deseas borrar ?`,
      showCancelButton: true,
      confirmButtonText: "Si",
    }).then((result) => {
      /* En caso que confirme que si se quiere eliminar */
      if (result.isConfirmed) {
        if (tipo === "categoria") {
          borrarCategoria(value)
            .then((data) => {
              Swal.fire("Categoria correctamente!", "", "success");
              location.reload();
            })
            .catch((error) => {
              Swal.fire(
                "Los datos no se pudieron eliminar , contacte al administador!",
                "",
                "danger"
              );
            });
        } else if (tipo === "articulo") {
          borrarProducto(value)
            .then((data) => {
              Swal.fire("Articulo eliminado correctamente!", "", "success");
              location.reload();
            })
            .catch((error) => {
              Swal.fire(
                "Los datos no se pudieron eliminar , contacte al administador!",
                "",
                "danger"
              );
            });
        } else if (tipo === "usuario") {
          borrarUsuario(value)
            .then((data) => {
              Swal.fire("Usuario eliminado correctamente!", "", "success");
              location.reload();
            })
            .catch((error) => {
              Swal.fire(
                "Los datos no se pudieron eliminar , contacte al administador!",
                "",
                "danger"
              );
            });
        }
      }
    });
  }

  const [key, setKey] = useState("home");
  return (
    <div>
      <Container style={{ marginTop: 100 }}>
        <div className="  m-2 ">
          <h3 className=" text-center mb-3 text-uppercase fw-bold fs-1  rounded px-3 py-2  ">
            Catálogos
          </h3>
          <p className="text-center">
            Selecciona cualquier area para poder interactuar con la información
          </p>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3 shadow justify-content-center"
          >
            {/*************************************TAB CATALOGO DE CATEGORIAS  *******************************************************/}
            <Tab
              eventKey="categorias"
              title="Categorias-Articulos"
              className="text-center align-items-center justify-content-center "
            >
              <h3 className="mt-5">Catalogo de Categorias de Articulos</h3>
              <Button
                className="nuevo mb-5"
                onClick={() => setIsNewCategoriOpen(true)}
              >
                <FaPlus size={20} />
                <span>Nueva Categoria</span>
              </Button>

              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Categoria</th>
                    <th>Descripcion</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {categorias.map((categor) => (
                    <tr>
                      <td>{categor.nombre}</td>
                      <td>{categor.descripcion}</td>
                      <td>
                        <input
                          type="checkbox"
                          checked={categor.estado}
                          desabled
                        ></input>
                      </td>
                      <td>
                        <a
                          className="btn"
                          title="Editar"
                          onClick={() =>
                            setIsEditCategoriOpen(true, categor, categor._id)
                          }
                        >
                          <FaEdit color="#fd671a" />
                        </a>
                        <a
                          className="btn"
                          title="Eliminar Registro"
                          onClick={() => {
                            eliminarArtic("categoria", categor._id);
                          }}
                        >
                          <MdDelete color="red" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Tab>
            {/********************************************** TAB CATALOGO DE ARTICULOS *************************************************************/}
            <Tab eventKey="articulos" title="Articulos" className="text-center">
              <h3 className="mt-5">Catalogo de los Articulos</h3>
              <Button
                className="nuevo mb-5"
                onClick={() => setIsNewArticuloiOpen(true)}
              >
                <FaPlus size={20} />
                <span>Nuevo Articulo</span>
              </Button>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Articulo</th>
                    <th>Descripcion</th>
                    <th>Categoria</th>
                    <th>Disponible</th>
                    <th>Cantidad Disponible</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {productos.map((producto) => (
                    <tr>
                      <td>{producto.nombre}</td>
                      <td>{producto.descripcion}</td>
                      <td>{producto.categoria.nombre}</td>
                      <td>
                        <input
                          type="checkbox"
                          checked={producto.estado}
                          desabled
                        ></input>
                      </td>
                      <td>{producto.stock}</td>

                      <td>
                        <a
                          className="btn"
                          title="Editar"
                          onClick={() =>
                            setIsEditArticuloiOpen(true, producto._id)
                          }
                          
                        >
                          <FaEdit color="#fd671a" />
                        </a>
                        <a
                          className="btn"
                          title="Eliminar Registro"
                          onClick={() => {
                            eliminarArtic("articulo", producto._id);
                          }}
                        >
                          <MdDelete color="red" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Tab>
            {/**********************************************TAB CATALOGO DE USUARIOS *************************************************************/}
            <Tab eventKey="usuarios" title="Usuarios" className="text-center">
              <h3 className="mt-5">Catalogo de Usuarios</h3>
              <Button
                className="nuevo mb-5"
                onClick={() => setIsRegistrerOpen(true)}
              >
                <FaPlus size={20} />
                <span>Nuevo Usuario</span>
              </Button>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Apellido's</th>
                    <th>Email</th>
                    <th>Rol</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((usuari) => (
                    <tr>
                      <td>{usuari.nombre}</td>
                      <td>{usuari.apellido}</td>
                      <td>{usuari.email}</td>
                      <td>{usuari.rol}</td>

                      <th>
                        <input
                          type="checkbox"
                          checked={usuari.estado}
                          desabled
                        ></input>
                      </th>

                      <td>
                        <a
                          className="btn"
                          title="Editar"
                          onClick={() => setIsEditUseriOpen(true)}
                        >
                          <FaEdit color="#fd671a" />
                        </a>
                        <a
                          className="btn"
                          title="Eliminar Registro"
                          onClick={() => {
                            eliminarArtic("usuario", usuari._id);
                          }}
                        >
                          <MdDelete color="red" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Tab>
          </Tabs>
        </div>

        {/** ///////////////////////////////////////////////////////////////////         Modales     //////////////////////////////////////////// */}

        {/** **************************         Nueva Categoria    *************** */}

        <FormNuevaCategoria
          isOpen={isNewCategoriOpen}
          closeModal={() => setIsNewCategoriOpen(false)}
        />
        {/** **************************         Editar Categoria    *************** */}

        <FormEditCategoria
          isOpen={isEditCategoriOpen}
          closeModal={() => setIsEditCategoriOpen(false)}
        />
        {/** **************************         Nuevo Articulo    *************** */}
        <FormNuevoArticulo
          isOpen={isNewArticuloOpen}
          closeModal={() => setIsNewArticuloiOpen(false)}
        />
        {/** **************************         Editar Articulo    *************** */}
        <FormEditArticulo
          isOpen={isEditArticuloiOpen}
          closeModal={() => setIsEditArticuloiOpen(false)}
        />

        {/** **************************         Nuevo Usuario    *************** */}
        <Register
          isOpen={isRegistrerOpen}
          closeModal={() => setIsRegistrerOpen(false)}
        />
      </Container>
      {/** **************************         Editar Usuario    *************** */}
      <FormEditUser
        isOpen={isEditUserOpen}
        closeModal={() => setIsEditUseriOpen(false)}
      />
    </div>
  );
}

export default Catalog;
