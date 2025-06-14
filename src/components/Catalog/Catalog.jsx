import { useState } from "react";
import { Container, Tab, Tabs, Button, Form } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { FaPlus } from "react-icons/fa";
import "./Catalog.css";
import FormNuevaCategoria from "./FormNuevaCategoria";



function Catalog() {
    const [isNewCategoriOpen, setIsNewCategoriOpen] = useState(false);
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

              <Form className="d-flex  align-items-center">
                <Form.Control
                  type="search"
                  placeholder="Buscar Cateogria..."
                  className="busca"
                  aria-label="Search"
                />
                <Button className="buscar">Buscar </Button>
              </Form>
            </Tab>
            {/**********************************************TAB CATALOGO DE ARTICULOS *************************************************************/}
            <Tab eventKey="articulos" title="Articulos" className="text-center">
              <h3 className="mt-5">Catalogo de los articulos</h3>
              <Button className="nuevo mb-5">
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
        <FormNuevaCategoria
          isOpen={isNewCategoriOpen}
          closeModal={() => setIsNewCategoriOpen(false)}
        />
      </Container>
    </div>
  );
}

export default Catalog;
