import { useState,useEffect } from "react";
import { Container, Tab, Tabs, Button, Form,Table } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { FaPlus, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "./Catalog.css";
import FormNuevaCategoria from "./FormNuevaCategoria";
import FormEditCategoria from "./FormEditCategoria";
import FormNuevoArticulo from "./FormNuevoArticulo";
import { getCategorias } from "../../helpers/categoriaApi";


function Catalog() {
  const [isNewCategoriOpen, setIsNewCategoriOpen] = useState(false);
  const [isEditCategoriOpen, setIsEditCategoriOpen] = useState(false);
  const [isNewArticuloOpen, setIsNewArticuloiOpen] = useState(false);
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
      getCategorias().then((data) => {
        setCategorias(data.categorias);
      });
  }, []);
  
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
            {/*************************************TAB CATALOGO DE CATEGORIAS DE ARTICULOS *******************************************************/}
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
                      <td>{categor.estado}</td>
                      <td>
                        <a
                          className="btn"
                          title="Editar"
                          onClick={() =>
                            setIsEditCategoriOpen(true, categor._id)
                          }
                        >
                          <FaEdit color="#fd671a" />
                        </a>
                        <a className="btn"
                        title="Eliminar Registro">
                          <MdDelete color="red"/>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Tab>
            {/**********************************************TAB CATALOGO DE ARTICULOS *************************************************************/}
            <Tab eventKey="articulos" title="Articulos" className="text-center">
              <h3 className="mt-5">Catalogo de los Articulos</h3>
              <Button
                className="nuevo mb-5"
                onClick={() => setIsNewArticuloiOpen(true)}
              >
                <FaPlus size={20} />
                <span>Nuevo Articulo</span>
              </Button>
            </Tab>
            {/**********************************************TAB CATALOGO DE USUARIOS *************************************************************/}
            <Tab eventKey="usuarios" title="Usuarios" className="text-center">
              <h3 className="mt-5">Catalogo de Usuarios</h3>
              <Button className="nuevo mb-5">
                <FaPlus size={20} />
                <span>Nuevo Usuarios</span>
              </Button>
            </Tab>
          </Tabs>
        </div>
        <FormEditCategoria
          isOpen={isEditCategoriOpen}
          closeModal={() => setIsEditCategoriOpen(false)}
        />

        <FormNuevaCategoria
          isOpen={isNewCategoriOpen}
          closeModal={() => setIsNewCategoriOpen(false)}
        />
        <FormNuevoArticulo
          isOpen={isNewArticuloOpen}
          closeModal={() => setIsNewArticuloiOpen(false)}
        />
      </Container>
    </div>
  );
}

export default Catalog;
