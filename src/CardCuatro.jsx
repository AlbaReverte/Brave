import React from "react";
import "./Card.css";

const CardCuatro = ({ image, title, description, onClick }) => {
  return (
    <div className="servicios-container">
      <h1 className="servicios-title">Sima del pulpo</h1>
      <section className="servicios-list">
        <div class="card mb-3">
          <img src="/src/assets/cueva9.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Murcia</h5>
            <p class="card-text">
              En plena reserva natural del Cañón de Almadenes, se encuentran
              varias cuevas deportivas, y una de ellas son estas dos cuevas
              unidas en su interior. Accederemos al mundo subterráneo por una de
              ellas y saldremos por la otra. Se trata de una cueva casi
              horizontal, con diversas salas con multitud de formaciones, por
              las que recorreremos un bonito itinerario con gateras de fácil
              acceso. Especial para familias por su escasez de pasos
              complicados.
            </p>
          </div>
        </div>
        <article className="servicio"></article>
      </section>
    </div>
  );
};

export default CardCuatro;