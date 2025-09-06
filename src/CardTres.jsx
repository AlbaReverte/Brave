import React from "react";
import "./Card.css";

const CardTres = ({ image, title, description, onClick }) => {
  return (
    <div className="servicios-container">
      <h1 className="servicios-title">Sima de la plata</h1>
      <section className="servicios-list">
        <div class="card mb-3">
          <img src="/src/assets/cueva8.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Murcia</h5>
            <p class="card-text">
              Ejemplo de aproximación desde Cartagena, el final de ruta es la boca de la sima. Se observa perfectamente dónde poder dejar el coche.

Sima no muy grande pero extremadamente bella, nada más comenzar nos encontramos con una gatera que da acceso a una rampa inclinada bastante larga. Finalmente se instala pasamanos para acceder a la cabecera del P15 que desemboca en la sala principal.
            </p>
          </div>
        </div>
        <article className="servicio"></article>
      </section>
    </div>
  );
};

export default CardTres;