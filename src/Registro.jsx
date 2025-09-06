
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

function Registro({ setUsuario, setIsLoggedIn }) {
  const navigate = useNavigate();

  // Estados para inputs
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [perfilFoto, setPerfilFoto] = useState(null); // archivo de la foto
  const [preview, setPreview] = useState("/src/assets/logo-avatar.jpg"); // preview en el formulario

  // Manejar cambio de foto de perfil
  const handleFotoChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      setPerfilFoto(file);
      setPreview(URL.createObjectURL(file)); // preview en el navegador
    }
  };

  const handleRegistro = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      if (perfilFoto) {
        formData.append("avatar", perfilFoto);
      }

      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        body: formData, // enviamos FormData en lugar de JSON
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.message);
        setUsuario(data.user); // incluye la ruta de avatar y guardamos los datos del usuario
        setIsLoggedIn(true);           // marcamos al usuario como logueado
        navigate("/servicios");
      } else {
        alert(data.error || "Error al registrarse");
      }
    } catch (error) {
      console.error(error);
      alert("Error de conexión con el servidor");
    }
  };

  return (
    <div className="form-container fade-in">
      <div className="perfil-foto-container">
        <label htmlFor="perfil-input">
          <img
            className="perfil-foto"
            src={preview}
            alt="Foto de perfil"
          />
          <div className="foto-overlay">
            {/* <i className="fa-brands fa-searchengin"></i> */}
            <i class="fa-regular fa-pen-to-square"></i>
          </div>
        </label>
        <input
          type="file"
          id="perfil-input"
          accept="image/*"
          onChange={handleFotoChange}
          style={{ display: "none" }}
        />
      </div>

      <h2 className="title-pro">¡Rellena el formulario!</h2>

      <form onSubmit={handleRegistro}>
        <input
          type="text"
          className="input-field"
          placeholder="Nombre completo"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          className="input-field"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="input-field"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="boton-registrarme">
          <button type="submit" className="my-btn">
            Registrarme
          </button>
        </div>
      </form>
    </div>
  );
}

export default Registro;

