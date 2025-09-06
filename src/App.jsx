import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import HolaMundo from "./HolaMundo";
import Perfil from "./Perfil";
import Registro from "./Registro";
import Navbar from "./Navbar";
import Contacto from "./Contacto";
import Servicios from "./Servicios";
import Card from "./Card";
import CardDos from "./CardDos";
import CardTres from "./CardTres";
import CardCuatro from "./CardCuatro";
import "./App.css";

function App() {
  // Estado global del usuario
  const [usuario, setUsuario] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Navbar
        isLoggedIn={isLoggedIn}
        setUsuario={setUsuario}
        setIsLoggedIn={setIsLoggedIn}
      />

      <div style={{ padding: "1rem" }}>
        {/* Mensaje simple a la izquierda */}
        {isLoggedIn ? (
          <p
            className="logeado"
            style={{ color: "white", textAlign: "right", margin: 0 }}
          >
            ✅ Estás logueada como {usuario?.username}
          </p>
        ) : (
          <p
            className="logeado"
            style={{ color: "white", textAlign: "right", margin: 0 }}
          >
            ❌ No has iniciado sesión
          </p>
        )}

        <Routes>
          <Route
            path="/"
            element={
              <HolaMundo
                setUsuario={setUsuario}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/card" element={<Card />} />
          <Route path="/carddos" element={<CardDos />} />
          <Route path="/cardtres" element={<CardTres />} />
          <Route path="/cardcuatro" element={<CardCuatro />} />

          <Route path="/perfil" element={<Perfil usuario={usuario} />} />

          <Route
            path="/registro"
            element={
              <Registro setUsuario={setUsuario} setIsLoggedIn={setIsLoggedIn} />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
