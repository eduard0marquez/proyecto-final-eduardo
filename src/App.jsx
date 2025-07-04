import "bootstrap/dist/css/bootstrap.min.css";
import {
  About,
  Blog,
  Cart,
  Catalogos,
  Contact,
  Home,
  Loved,
  Myperfil,
  NotFoundPage,
  Questions,
  Search,
} from "./pages";
import { Routes, Route } from "react-router-dom";
import { Footer, NavBar, ProtectedRoute } from "./components";
import { UserProvider } from "./components/Contextt/user.context";
import RoutesApp from "./Routes/RoutesApp";

function App() {
  return (
    <>
      <NavBar />

      {/*Publicas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/loved" element={<Loved />} />
        <Route path="/questions" element={<Questions />} />

        <Route path="/search" element={<Search />} />

        <Route path="*" element={<NotFoundPage />} />

        {/*Privadas */}

        <Route
          path="/catalog"
          element={
            <ProtectedRoute>
              <Catalogos />
            </ProtectedRoute>
          }
        />
        <Route
          path="/perfil"
          element={
            <ProtectedRoute>
              <Myperfil />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
