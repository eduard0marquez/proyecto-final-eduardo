import { Routes, Route } from "react-router-dom";
import { Catalogos } from "../pages";

function RoutesApp() {
  return (
    <Routes>
      <Route path="/catalog" element={<Catalogos />} />
    </Routes>
  );
}

export default RoutesApp;
