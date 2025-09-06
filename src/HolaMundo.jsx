import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

function HolaMundo({ setUsuario, setIsLoggedIn }) {
  const navigate = useNavigate();

  // Estados para inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }), // enviamos email y password del estado
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.message);
        setUsuario(data.user); // guardamos datos del usuario en el estado global
        setIsLoggedIn(true); // marcamos al usuario como logueado
        navigate("/perfil"); // redirigimos al perfil
      } else {
        alert(data.error || "Error al iniciar sesión");
      }
    } catch (error) {
      console.error(error);
      alert("Error de conexión con el servidor");
    }
  };

  return (
    <div className="form-container fade-in">
      <img className="perfil-foto" src="/src/assets/leon1.jpg" alt="Logo" />
      <h2 className="titulo-bienvenido">¡Bienvenido a Brave!</h2>
      <h6 className="titulo-bienvenido2">
        Si estás registrado puedes iniciar sesión
      </h6>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          className="input-field"
          placeholder="Email"
          value={email} // conectado al estado
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="input-field"
          placeholder="Contraseña"
          value={password} // conectado al estado
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="botones-inicio">
          <button type="submit" className="my-btn">
            Iniciar Sesión
          </button>
        </div>
      </form>

      {/* Botón de registro fuera del formulario */}
      <p className="mi-parrafo">
        ¿No tienes una cuenta?{" "}
        <span onClick={() => navigate("/registro")} className="link">
          Regístrate
        </span>
      </p>
    </div>
  );
}

export default HolaMundo;
