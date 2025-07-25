const url = "https://proyecto-final-eduardo-backend.onrender.com/api/mercado/create_preference";
const token = JSON.parse(localStorage.getItem("token"));

//Crear Producto
export const agregarArticulo = async (title,quantity,price) => {
    const datos = {
       'title':title,
        'quantity':quantity,
        'price':price
    }
    console.log(datos)

    try {
    const resp = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(datos),
       
    });
    const data = await resp.json();

        return data;
        
    } catch (error) {
        
        console.log(error)
        console.log(datos)
    return { msg: "No se conecto con el Backend" };
}
}