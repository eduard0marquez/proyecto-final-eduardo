const url = "http://localhost:3000/api/categorias";
const token = JSON.parse(localStorage.getItem("token"));
const limite = 6;
//Obtener categorias
export const getCategorias = async (desde = 0) => {
    try {
        const resp = await fetch(url , {
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

//Obtener categoria por id
export const getCategoriaByID = async (id) => {
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

//Crear categoria

export const crearCategoria = async (datos) => {
    try {
        const resp = await fetch(url, {
            method: "POST",
            body: JSON.stringify(datos),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "x-token": token,
            },
        });
        const data = await resp.json();

        return data;
    } catch (error) {
        console.log(error)
        console.log(error)
        return { msg: "No se conecto con el Backend" };
    }
}

//Actualizar Categoria
export const actualizarCategoria = async (id, datos) => {
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

//Borrar categoria
export const borrarCategoria = async (id) => {
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