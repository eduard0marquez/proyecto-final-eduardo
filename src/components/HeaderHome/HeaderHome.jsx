import Logo from "../../../public/assets/logo.png";
import Plomeria from "../../../public/assets/banner/1.png";
import Construccion from "../../../public/assets/banner/2.png";
import Servicios from "../../../public/assets/banner/3.png";
import LogO from "../../../public/assets/40Oj.gif";
import "./HeaderHome.css";
import { Carousel } from "react-bootstrap";

function HeaderHome() {
  return (
    <div
      className=" slide"
      style={{ marginTop: 95, marginBottom: 20 }}
    >
      
        <Carousel className="container">
          <Carousel.Item>
            <img className="carrusel" src={Plomeria} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carrusel" src={Construccion} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carrusel" src={Servicios} alt="" />
          </Carousel.Item>
        </Carousel>
      
    </div>
  );
}

export default HeaderHome;
