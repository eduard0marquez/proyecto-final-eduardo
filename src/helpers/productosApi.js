const url = "https://proyecto-final-eduardo-backend.onrender.com/api/productos";
const token = JSON.parse(localStorage.getItem("token"));


//Obtener Productos
export const getProductos = async (param) => {
    try {
        
        const resp = await fetch(`${url}?pagina=${param.params.pagina}&limite=${param.params.limite}`, {
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

//Obtener producto por ID
export const getProductoByID = async (id) => {
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

//Crear Producto
export const crearProducto = async (datos) => {
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
        console.log(token)
        console.log(error)
        return { msg: "No se conecto con el Backend" };
    }
}

//Actualizar Producto
export const actualizarProducto = async (id, datos) => {
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

//Borrar Producto
export const borrarProducto = async (id) => {
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