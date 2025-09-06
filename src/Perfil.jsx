import { useNavigate } from "react-router-dom";
import "./index.css";

function Perfil({ usuario }) {
  const navigate = useNavigate();

  if (!usuario) {
    return (
      <div className="perfil-container fade-in">
        <img
          className="perfil-foto"
          src="/src/assets/logo-avatar.jpg"
          alt="Logo"
        />
        <p>No hay usuario registrado.</p>
        <button
          type="button"
          className="my-btn"
          onClick={() => navigate("/registro")}
        >
          Ir a registro
        </button>
      </div>
    );
  }

  return (
    <div className="perfil-container fade-in">
      {/* Foto de perfil */}
      <img
        className="perfil-foto"
        src={usuario.avatar || "/src/assets/logo-avatar.jpg"}
        alt={usuario.username}
        onError={(e) => {
          // Si la URL no carga, mostramos el avatar por defecto
          e.target.onerror = null;
          e.target.src = "/src/assets/logo-avatar.jpg";
        }}
      />

      {/* Datos personales */}
      <div className="perfil-datos">
        <h2>{usuario.username}</h2>
        <div className="perfil-datos-personales">
          <p>Email: {usuario.email}</p>
        </div>

        {/* Botón para volver */}
        <button
          type="button"
          className="volver-btn"
          onClick={() => navigate("/")}
        >
          Volver
        </button>
      </div>
    </div>
  );
}

export default Perfil;
