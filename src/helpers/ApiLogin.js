const url = "https://proyecto-final-eduardo-backend.onrender.com/api/auth/login";

export const authLogin = async (datos) => {
    try {
        //cuando es correcto
        const resp = await fetch(url, {
            method: "POST",
            body: JSON.stringify(datos),
            headers: {
                "Content-Type":"application/json; charset=UTF-8" //Tipo del contenido
            }
        })
        console.log(resp)
        const data = await resp.json()
        return data;
    } catch (error) {
        //Errores
        console.log(error)
        return{msg:"No se conecto con Backend"}
    }
}