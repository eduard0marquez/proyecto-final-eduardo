const url = "https://proyecto-final-eduardo-backend.onrender.com/api/usuarios";

export const crearUsuario = async (datos) => {
    try {
        const resp = await fetch(url , {
            method: "POST",
            body: JSON.stringify(datos),
            headers: {
                "Content-Type": "application/json; charset=UTF-8", //Tipo del contenido
            },
        });
        const data = await resp.json();
        return data;
    } catch (error) {
        return { msg: "no se conecto con backend" };
    }
};