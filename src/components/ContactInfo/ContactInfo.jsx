import React from "react";

function ContactInfo() {
  return (
    <div className="bg-dark text-light py-5 shadow">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0">
            <div className="d-flex flex-column align-items-center">
              <h2 className="fx-1 mb-3 text-uppercase fw-bold">
                Dónde Encontrarnos
              </h2>
              <p className="mb-5">
                Gral. José María Paz 576, T4000 San Miguel de Tucumán, Tucumán,
                Argentina
              </p>
              <h3>Email</h3>
              <p className="m-0">academy@rollingcodeschool.com</p>
              <h3>Telefono</h3>
              <p className="m-0">+543815783030</p>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <iframe
              className="img-fluid"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1234.680236268505!2d-65.20770446870755!3d-26.836964720141996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2smx!4v1749597870462!5m2!1ses-419!2smx"
              alt="Contact-info"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
