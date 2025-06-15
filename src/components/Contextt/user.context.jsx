import { createContext } from "react";

const UserContext = createContext();

function UserProvider(props) {
    
    const login = localStorage.getItem("login");
    const rol = localStorage.getItem("rol");
  return (
    <UserContext.Provider value={{login,rol}}>{props.clildren}</UserContext.Provider>
  );
}
export { UserContext, UserProvider };
