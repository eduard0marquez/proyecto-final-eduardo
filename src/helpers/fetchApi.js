const url = "localhost:3000";

export const crearUsuario = async (datos) => {
    try {
        const resp = await fetch(url + "api/usuarios", {
            method: "POST",
            body: JSON.stringify(datos),
            headers: {
                "Content-Type": "application/json; charset=UTF-8", //Tipo del contenido
            },
        });
        const data = await resp.json();
        return data;
    } catch (error) {
        console.log(error);
        return { msg: "no se conecto con backend" };
    }
};