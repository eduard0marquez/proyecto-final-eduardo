import { TbBackground } from "react-icons/tb";
import { Col, Container, Image, Row } from "react-bootstrap";
import { HeaderHome, Search } from "../../components";

function Loved() {
  return (
    <>
      <HeaderHome />
      <div className="  m-2 ">
        <h3 className=" text-center mb-5 text-uppercase fw-bold fs-1 mt-2 rounded px-3 py-2">
          Resultados de Busqueda
        </h3>
      </div>
      <Search />
    </>
  );
}

export default Loved;
