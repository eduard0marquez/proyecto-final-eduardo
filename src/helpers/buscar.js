const url = "https://proyecto-final-eduardo-backend.onrender.com/api/buscar/productos/";

//Obtener categorias
export const buscarProductos = async (valor) => {
    try {
        const resp = await fetch(url + valor,{
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=UTF-8", //Tipo del contenido
            },
        });
        const data = await resp.json();
        return data;
    } catch (error) {
        console.log(error);
        throw new Error("No se pudo obtener informacion");
    }
};