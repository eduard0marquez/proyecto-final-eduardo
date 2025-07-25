import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./MercadoPago.css";

const MercadoPago = (datos) => {
  initMercadoPago("APP_USR-c2ba91a8-ff5f-4335-9903-1d7b87f29a77", {
    locale: "es-MX",
  });
  console.log(datos);
  return (
    <div className="btn-mercado">
      <Wallet initialization={{ preferenceId: `${datos.datos}` }} />
    </div>
  );
};

export default MercadoPago;
