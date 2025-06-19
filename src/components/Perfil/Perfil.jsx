import { useContext, useState, useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { TbBackground } from "react-icons/tb";
import "./Perfil.css";
import { getUsuarioByID } from "../../helpers/usuariosApi";
const id = JSON.parse(localStorage.getItem("id")) || null;

function Perfil() {
  const [users, setUsuarios] = useState([]);
  //Perfil
  useEffect(() => {
    getUsuarioByID(id).then((data) => {
      setUsuarios(data.usuario);
    });
  }, []);

  return (
    <Container style={{ marginTop: 100 }} className="vh-100">
      <div className=" text-center m-2 ">
        <Image className="foto" src={users.img} roundedCircle />
        <h3 className=" whit-des text-center mb-3 mt-1">
          Nombre : {users.nombre + " " + users.apellido}
        </h3>
        <p className="text-center">
          <h4 className="mb-3">Email: {users.email}</h4>
          <h4 className="mb-3">Fecha de Nacimiento: {users.fechaNacimiento}</h4>
          <h4 className="mb-3">Direccion: {users.direccion}</h4>
                  <h4 className="mb-3">Tipo de Usuario: { users.rol}</h4>
        </p>

        <p className=" text-center ">
          <strong></strong>
        </p>
        <br />
      </div>
    </Container>
  );
}

export default Perfil;
