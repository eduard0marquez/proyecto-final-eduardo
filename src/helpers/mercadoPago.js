const url = "https://proyecto-final-eduardo-backend.onrender.com/api/mercado/create_preference";
const token = JSON.parse(localStorage.getItem("token"));

//Crear Producto
export const agregarArticulo = async () => {
    try {
    const resp = await fetch(url, {
        method: "POST",
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