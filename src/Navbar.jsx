import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar({ isLoggedIn, setUsuario, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUsuario(null); // limpia datos del usuario
    setIsLoggedIn(false); // marca como no logueado
    navigate("/"); // redirige a la página de login o home
  };

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-navbar">
        <div className="bloque-logo">
          <p className="navbar-brand">
            {/* <Link to="/">
              <img
                className="logo"
                src="/assets/leon1.jpg"
                style={{ width: "60px", height: "auto" }}
                alt="Logo"
              />
            </Link> */}
          </p>
          <Link to="/" className="brave">
            Brave
          </Link>
        </div>
        <div className="iconos">
          <Link className="navbar-btn" to="/servicios">
            <i className="fa-regular fa-eye"></i>
          </Link>

          <Link className="navbar-btn" to="/registro">
            <i className="fa-regular fa-clipboard"></i>
          </Link>

          <Link className="navbar-btn" to="/perfil">
            <i className="fa-regular fa-circle-user"></i>
          </Link>

          <Link className="navbar-btn" to="/contacto">
            <i className="fa-regular fa-message"></i>
          </Link>

          {/* Botón de cerrar sesión, solo visible si el usuario está logueado */}
          {isLoggedIn && (
            <button
              className="navbar-btn logout-btn"
              onClick={handleLogout}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: "white",
                fontSize: "16px",
              }}
            >
              Cerrar Sesión
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
