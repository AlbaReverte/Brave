import React from "react";
import "./Contacto.css";

const Contacto = () => {
  return (
    <div className="contacto-container fade-in">
      <h2 className="contacto-title">Contacto</h2>
      <p className="contacto-text">
        Para ponerte en contacto con nosotros, envíanos un correo electrónico o
        rellena el siguiente formulario y te responderemos lo antes posible.
      </p>

      <form className="contacto-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Tu nombre"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="tuemail@ejemplo.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            placeholder="Escribe aquí tu mensaje..."
          ></textarea>
        </div>

        <button type="submit" className="btn-enviar">
          Enviar mensaje
        </button>
      </form>
    </div>
  );
};

export default Contacto;
