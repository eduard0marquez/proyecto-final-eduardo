const rol = JSON.parse(localStorage.getItem("rol"))||null;

export const Rol =  () => {
    let admin;
    if (rol === "Administrador") {
        admin = true;
    } else {
        admin = null;
    }
 
    return admin
    
}