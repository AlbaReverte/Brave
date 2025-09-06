import React from "react";
import "./Card.css";

const CardDos = ({ image, title, description, onClick }) => {
  return (
    <div className="servicios-container">
      <h1 className="servicios-title">Cueva del tesoro</h1>
      <section className="servicios-list">
        <div class="card mb-3">
          <img src="/src/assets/cueva7.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Málaga</h5>
            <p class="card-text">
              Rincón de la Victoria cuenta con un valor único en toda Europa, la Cueva del Tesoro. Es una de las tres únicas cuevas de origen marino que se conocen en el mundo. Las otras dos están en Asia y América Central.
Para todos los vecinos, visitantes y turistas de Málaga debe ser una visita obligada.La historia, la arqueología y la leyenda se unen en la Cueva del Tesoro, conocida también como la Cueva del Higuerón.
En sus galerías se encontraron restos del Paleolítico y de la Edad de Bronce, así como muestras de Arte Rupestre. En un cómodo paseo por sus cavidades, puedes disfrutar de las curiosas formas que el agua ha dejado a través de milenios. Quizás, con un poco de suerte, encuentres el famoso tesoro que, según dicen, aún permanece en la cueva.
            </p>
          </div>
        </div>
        <article className="servicio"></article>
      </section>
    </div>
  );
};

export default CardDos;