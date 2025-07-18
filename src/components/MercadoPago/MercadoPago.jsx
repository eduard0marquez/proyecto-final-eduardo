import { initMercadoPago } from '@mercadopago/sdk-react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


const MercadoPago = () => {
    const [preferenceId, serPreferenceId] = useState(null)
    const publickey = "APP_USR-c2ba91a8-ff5f-4335-9903-1d7b87f29a77";
    const createPreferenceIdEndpoint = ""
    useEffect(() => {
        if (!window.MercadoPago) {
            initMercadoPago(
                publickey, { locale: "es-MX" }
            );
        }
        else {
            console.log("Mecado Pago se inicializo correctamente");
        }
    }, []);
    const createPreferenceIdFromAPI = async() => {
        const response = await axios.post(createPreferenceIdEndpoint, {
            title: "test",
            unit_price: 1000,
            quantity:1,
        })
    }
    return (
        <div>
            MercadoPago
        </div>
    )
    
}

export default MercadoPago

