import React from "react";
import { useNavigate } from "react-router-dom";
import "./Servicios.css";

const Servicios = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/card");
  };

  const handleClickDos = () => {
    navigate("/carddos");
  };

  const handleClickTres = () => {
    navigate("/cardtres");
  };

  const handleClickCuatro = () => {
    navigate("/cardcuatro");
  };

  return (
    <div className="servicios-container fade-in">
      <h1 className="servicios-title-head">ESPELEOLOGÍA EN EL SURESTE</h1>

      <section className="servicios-list">
        <article className="servicio">
          <div className="container-fluid px-5">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
              <div className="col d-flex">
                <div className="borde h-100 border-0 shadow-sm rounded-4 overflow-hidden position-relative card-hover d-flex flex-column">
                  <img
                    src="/src/assets/cueva2.jpg"
                    className="card-img-top img-hover"
                    alt="Imagen 1"
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Cueva del río niño</h5>
                    <p className="card-text flex-grow-1">
                      En plena reserva natural del Cañón de Almadenes, se
                      encuentran varias cuevas deportivas, y una de ellas son
                      estas dos cuevas unidas en su interior. Accederemos al
                      mundo subterráneo por una de ellas y saldremos por la
                      otra.
                    </p>
                    <button
                      className="my-btn btn-primary mt-2"
                      onClick={handleClick}
                    >
                      Ver más
                    </button>
                  </div>
                </div>
              </div>

              <div className="col d-flex">
                <div className="borde h-100 border-0 shadow-sm rounded-4 overflow-hidden position-relative card-hover d-flex flex-column">
                  <img
                    src="/src/assets/cueva.jpg"
                    className="card-img-top img-hover"
                    alt="Imagen 1"
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Cueva del tesoro</h5>
                    <p className="card-text flex-grow-1">
                      Rincón de la Victoria cuenta con un valor único en toda
                      Europa, la Cueva del Tesoro. Es una de las tres únicas
                      cuevas de origen marino que se conocen en el mundo. Las
                      otras dos están en Asia y América Central.
                    </p>
                    <button
                      className="my-btn btn-primary mt-2"
                      onClick={handleClickDos}
                    >
                      Ver más
                    </button>
                  </div>
                </div>
              </div>

              <div className="col d-flex">
                <div className="borde h-100 border-0 shadow-sm rounded-4 overflow-hidden position-relative card-hover d-flex flex-column">
                  <img
                    src="/src/assets/cueva3.jpg"
                    className="card-img-top img-hover"
                    alt="Imagen 1"
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Sima de la plata</h5>
                    <p className="card-text flex-grow-1">
                      Sima no muy grande pero extremadamente bella, nada más
                      comenzar nos encontramos con una gatera que da acceso a
                      una rampa inclinada bastante larga.
                    </p>
                    <button
                      className="my-btn btn-primary mt-2"
                      onClick={handleClickTres}
                    >
                      Ver más
                    </button>
                  </div>
                </div>
              </div>

              <div className="col d-flex">
                <div className="borde h-100 border-0 shadow-sm rounded-4 overflow-hidden position-relative card-hover d-flex flex-column">
                  <img
                    src="/src/assets/cueva4.jpg"
                    className="card-img-top img-hover"
                    alt="Imagen 1"
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Sima del pulpo</h5>
                    <p className="card-text flex-grow-1">
                      La Sima del Pulpo, situada en la zona kárstica de los
                      Losares. De Cieza salimos por la carretera en dirección a
                      Mula. A 4 km. Nos desviamos a la derecha por una carretera
                      en dirección a Almadenes y los Losares. Cuando llegamos al
                      salto de Almadenes acaba el asfalto y seguimos por el
                      camino.
                    </p>
                    <button
                      className="my-btn btn-primary mt-2"
                      onClick={handleClickCuatro}
                    >
                      Ver más
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <h5 className="servicios-title">
              <p>SOBRE NOSOTROS</p>
              En Brave, vivimos para la aventura y para descubrir lo que pocos
              se atreven a explorar. Nos especializamos en actividades de
              montaña y espeleología, ofreciendo experiencias únicas que
              combinan emoción, seguridad y contacto directo con la naturaleza
              más pura. Nuestros guías expertos te acompañarán en cada paso,
              llevándote a explorar cuevas, desfiladeros y paisajes subterráneos
              que pocos han tenido la oportunidad de conocer. Ya seas un
              principiante con ganas de descubrir el mundo subterráneo o un
              aventurero experimentado en busca de nuevos desafíos, en Brave
              encontrarás la aventura perfecta para ti. Atrévete a descubrir lo
              que se esconde bajo la superficie. Con Brave, cada expedición es
              una experiencia inolvidable.
            </h5>
            <h4 className="servicios-title">
              <section className="datos-contacto">
                <h2>Datos de contacto</h2>
                <ul>
                  <li>
                    <strong>Dirección:</strong> Calle Ejemplo, 123, Ciudad, País
                  </li>
                  <li>
                    <strong>Teléfono:</strong> +34 600 123 456
                  </li>
                  <li>
                    <strong>Email:</strong> contacto@empresa.com
                  </li>
                  <li>
                    <strong>Horario:</strong> Lunes a Viernes, 9:00 - 18:00
                  </li>
                </ul>
              </section>
            </h4>

            <div className="redes-sociales">
              {/* <h2>Síguenos en redes sociales</h2> */}
              <div className="iconos-redes">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            <div className="footer">
              <p>
                © 2025 Brave España · Aviso legal | Política de Privacidad |
                Política de Cookies | Configuración de cookies
              </p>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Servicios;
