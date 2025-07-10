const url = "https://proyecto-final-eduardo-backend.onrender.com/api/usuarios";

export const crearPago = async (datos) => {
    try {
        const resp = await fetch(url , {
            method: "POST",
            body: JSON.stringify(datos),
        });
        const data = await resp.json();
        return data;
    } catch (error) {
        return { msg: "no se conecto con backend" };
    }
};