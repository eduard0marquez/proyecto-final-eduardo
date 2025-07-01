const url = "https://proyecto-final-eduardo-backend.onrender.com/api/favorite";
const token = JSON.parse(localStorage.getItem("token"));

//Obtener Productos
export const getFavs = async (id) => {
    try {
        const resp = await fetch(url ,+"/"+id, {
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



//Crear Producto
export const AgregarFav = async (datos) => {
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
  console.log(datos)
    return { msg: "No se conecto con el Backend" };
}
}

//Actualizar Producto
export const actualizarfav = async (id, datos) => {
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
export const borrarFav = async (id) => {
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