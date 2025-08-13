const url = "https://proyecto-final-eduardo-backend.onrender.com/api/categorias";
const token = JSON.parse(localStorage.getItem("token"));
const param = 1;
//Obtener categorias
export const getCategorias = async () => {
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
        const resp = await fetch(url + '/' + id, {
            method: "GET",
            headers:{
            "Content-type": "application/json;charset=UTF-8",
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