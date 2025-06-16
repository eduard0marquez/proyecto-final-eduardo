const url = "https://proyecto-final-eduardo-backend.onrender.com/api/usuarios";
const token = JSON.parse(localStorage.getItem("token"));
const limite = 6;

//Obtener Usuarios
export const getUsuarios = async (desde = 0) => {
    try {
        const resp = await fetch(url + "?limite=" + limite + "&desde=" + desde, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "x-token": token,
            },
        });
        const data = await resp.json();
        return data;
    } catch (error) {
        console.log(error);
        throw new Error("No se pudo obtener informacion");
    }
};

//Obtener Usuario por id
export const getUsuarioByID = async (id) => {
    try {
        const resp = await fetch(url + "/" + id, {
            "Content-type": "application/json;charset=UTF-8",
            "x-token": token,
        });
        const data = await resp.json();
        return data;
    } catch (error) {
        throw new Error("No se pudo obtener informacion");
    }
};

//Crear Usuario
export const crearUsuario = async (datos) => {
    try {
        const resp = await fetch(url, {
            method: "POST",
            body: JSON.stringify(datos),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "x-token": token,
            },
        });
        const sata = await resp.json();

        return data;
    } catch (error) {
        return { msg: "No se conecto con el Backend" };
    }
}

//Actualizar Usuario
export const actualizarUsuario = async (id, datos) => {
    try {
        const resp = await fetch(url + "/" + id, {
            method: "PUT",
            body: JSON.stringify(datos),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "x-token": token,
            },
        });
        const data = await resp.json();
        return data;
    } catch (error) {
        console.log(error);
        return { msg: "No se conecto con el Backend" };
    }
}

//Borrar Usuario
export const borrarUsuario = async (id) => {
    try {
        const resp = await fetch(url + "/" + id, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "x-token": token,
            },
        });
        const data = await resp.json();
        return data;
    } catch (error) {
        console.log(error);
        return { msg: "No se conecto con el Backend" };
    }
}