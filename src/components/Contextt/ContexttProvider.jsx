import { useState } from "react";
import { Contextt } from "./Contextt";

const ContexttProvider = ({ children }) => {
  const getStoredloguer = () => {
    const storedLoguer = localStorage.getItem("login");
    return storedLoguer ? JSON.parse(storedLoguer) : "";
  };

  const [loguer, setLoguer] = useState(getStoredloguer());

  const [email, setEmail] = useState("");
  

  return (
    <Contextt.Provider
      value={{ email, setUser , setLoguer }}
    >
      {children}
    </Contextt.Provider>
  );
};

export default ContexttProvider;
