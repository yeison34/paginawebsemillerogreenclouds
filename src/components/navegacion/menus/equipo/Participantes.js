import React, { useEffect } from "react";
import "../../../../lib/animate/animate.min.css";
import "../../../../lib/owlcarousel/assets/owl.carousel.min.css";
import "../../../../css/bootstrap.min.css";

import "jquery";
import "bootstrap/dist/js/bootstrap.bundle";
import "owl.carousel";
import "../../../../lib/wow/wow.js";
import "../../../../lib/wow/wow.min.js";

import "../../../../lib/easing/easing.min.js";
import "../../../../lib/waypoints/waypoints.min.js";

import "../../../../lib/owlcarousel/owl.carousel.min.js";

//semilleristas
import Edgar from "../../../../img/semilleristas/edgareduardo.jpg";
import Mariaalejandra from "../../../../img/semilleristas/mariaalejandra.jpg";
import Jhon from "../../../../img/semilleristas/jhonjairo.jpg";
import Daniela from "../../../../img/semilleristas/danielajazmin.jpg";
import Luis from "../../../../img/semilleristas/jhonjairo.jpg";
import Yasson from "../../../../img/semilleristas/yasson.jpg";
import Meliza from "../../../../img/semilleristas/meliza.jpg";
import Silvia from "../../../../img/semilleristas/silvia.jpg";

import WOW from "wow.js";
import "../../../../js/main.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../../css/style.css";

function Participantes() {
  useEffect(() => {
    // Inicializar WOW.js aquí
    new WOW().init();
    $(".team-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      center: false,
      dots: false,
      loop: true,
      margin: 50,
      nav: true,
      navText: [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>',
      ],
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        992: {
          items: 3,
        },
      },
    });
  }, []);
  return (
    <>
      <div class="container-fluid py-5 mb-5 team">
        <div class="container">
          <div
            class="text-center mx-auto pb-5 wow fadeIn"
            data-wow-delay=".3s"
            style={{ maxWidth: "600px" }}>
            <h5 class="text-primary">Semilleristas</h5>
          </div>
          <div
            class="owl-carousel team-carousel wow fadeIn"
            data-wow-delay=".5s"
            style={{ transition: "all 0.5s" }}>
            {/*semileristas 2023*/}
            <div class="rounded team-item">
              <div class="team-content">
                <div class="team-img-icon">
                  <div class="team-img rounded-circle">
                    <img
                      src={Edgar}
                      class="img-fluid w-100 rounded-circle"
                      alt=""
                    />
                  </div>
                  <div class="team-name text-center py-3">
                    <h6 class=""> Edgar Eduardo Chaux Flóres</h6>
                    <p class="m-0">Estudiante - Ingenieria de Sistemas</p>
                    <p class="m-0">Semestre 4</p>
                  </div>
                  <div class="team-icon d-flex justify-content-center pb-4">
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="rounded team-item">
              <div class="team-content">
                <div class="team-img-icon">
                  <div class="team-img rounded-circle">
                    <img
                      src={Mariaalejandra}
                      class="img-fluid w-100 rounded-circle"
                      alt=""
                    />
                  </div>
                  <div class="team-name text-center py-3">
                    <h6 class="">Maria Alejandra Ipiales Narvaez</h6>
                    <p class="m-0">Estudiante - Ingenieria de Sistemas</p>
                    <p class="m-0">Semestre 8</p>
                  </div>
                  <div class="team-icon d-flex justify-content-center pb-4">
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="rounded team-item">
              <div class="team-content">
                <div class="team-img-icon">
                  <div class="team-img rounded-circle">
                    <img
                      src={Jhon}
                      class="img-fluid w-100 rounded-circle"
                      alt=""
                    />
                  </div>
                  <div class="team-name text-center py-3">
                    <h6 class="">Jhon Jairo Zambrano Yela</h6>
                    <p class="m-0">Estudiante - Ingenieria de Sistemas</p>
                    <p class="m-0">Semestre 10</p>
                  </div>
                  <div class="team-icon d-flex justify-content-center pb-4">
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="rounded team-item">
              <div class="team-content">
                <div class="team-img-icon">
                  <div class="team-img rounded-circle">
                    <img
                      src={Daniela}
                      class="img-fluid w-100 rounded-circle"
                      alt=""
                    />
                  </div>
                  <div class="team-name text-center py-3">
                    <h6 class="">Daniela Jasmin Toro Dominguez</h6>
                    <p class="m-0">Estudiante - Ingenieria de Sistemas</p>
                    <p class="m-0">Semestre 10</p>
                  </div>
                  <div class="team-icon d-flex justify-content-center pb-4">
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*fin semileristas 2023*/}

            {/*semillersitas 2020*/}
            <div class="rounded team-item">
              <div class="team-content">
                <div class="team-img-icon">
                  <div class="team-img rounded-circle">
                    <img
                      src={Luis}
                      class="img-fluid w-100 rounded-circle"
                      alt=""
                    />
                  </div>
                  <div class="team-name text-center py-3">
                    <h6 class="">Luis Carlos Rosero Taimbud</h6>
                    <p class="m-0">Estudiante - Ingenieria de Sistemas</p>
                    <p class="m-0">Semestre 10</p>
                  </div>
                  <div class="team-icon d-flex justify-content-center pb-4">
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="rounded team-item">
              <div class="team-content">
                <div class="team-img-icon">
                  <div class="team-img rounded-circle">
                    <img
                      src={Yasson}
                      class="img-fluid w-100 rounded-circle"
                      alt=""
                    />
                  </div>
                  <div class="team-name text-center py-3">
                    <h6 class="">Yasson Brayan Perenguez Paz</h6>
                    <p class="m-0">Estudiante - Ingenieria de Sistemas</p>
                    <p class="m-0">Semestre 10</p>
                  </div>
                  <div class="team-icon d-flex justify-content-center pb-4">
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="rounded team-item">
              <div class="team-content">
                <div class="team-img-icon">
                  <div class="team-img rounded-circle">
                    <img
                      src={Meliza}
                      class="img-fluid w-100 rounded-circle"
                      alt=""
                    />
                  </div>
                  <div class="team-name text-center py-3">
                    <h6 class="">Shirley Meliza Gómez</h6>
                    <p class="m-0">Egresada</p>
                    <p class="m-0">Ingeniera de Sistemas</p>
                  </div>
                  <div class="team-icon d-flex justify-content-center pb-4">
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="rounded team-item">
              <div class="team-content">
                <div class="team-img-icon">
                  <div class="team-img rounded-circle">
                    <img
                      src={Edgar}
                      class="img-fluid w-100 rounded-circle"
                      alt=""
                    />
                  </div>
                  <div class="team-name text-center py-3">
                    <h6 class="">Nancy Milena Cuastumal Quenguan</h6>
                    <p class="m-0">Egresada</p>
                    <p class="m-0">Ingeniera de Sistemas</p>
                  </div>
                  <div class="team-icon d-flex justify-content-center pb-4">
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="rounded team-item">
              <div class="team-content">
                <div class="team-img-icon">
                  <div class="team-img rounded-circle">
                    <img
                      src={Edgar}
                      class="img-fluid w-100 rounded-circle"
                      alt=""
                    />
                  </div>
                  <div class="team-name text-center py-3">
                    <h6 class="">Ingrid Catheryn Cabrera</h6>
                    <p class="m-0">Egresada</p>
                    <p class="m-0">Ingeniera de Sistemas</p>
                  </div>
                  <div class="team-icon d-flex justify-content-center pb-4">
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="rounded team-item">
              <div class="team-content">
                <div class="team-img-icon">
                  <div class="team-img rounded-circle">
                    <img
                      src={Silvia}
                      class="img-fluid w-100 rounded-circle"
                      alt=""
                    />
                  </div>
                  <div class="team-name text-center py-3">
                    <h6 class="">Silvia Rocío Fuertes Paspur</h6>
                    <p class="m-0">Egresada</p>
                    <p class="m-0">Ingeniera de Sistemas</p>
                  </div>
                  <div class="team-icon d-flex justify-content-center pb-4">
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="rounded team-item">
              <div class="team-content">
                <div class="team-img-icon">
                  <div class="team-img rounded-circle">
                    <img
                      src={Edgar}
                      class="img-fluid w-100 rounded-circle"
                      alt=""
                    />
                  </div>
                  <div class="team-name text-center py-3">
                    <h6 class="">Yuli Esmeralda Sinza Díaz</h6>
                    <p class="m-0">Egresada</p>
                    <p class="m-0">Ingeniera de Sistemas</p>
                  </div>
                  <div class="team-icon d-flex justify-content-center pb-4">
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="rounded team-item">
              <div class="team-content">
                <div class="team-img-icon">
                  <div class="team-img rounded-circle">
                    <img
                      src={Edgar}
                      class="img-fluid w-100 rounded-circle"
                      alt=""
                    />
                  </div>
                  <div class="team-name text-center py-3">
                    <h6 class="">Jennyfer Estefanía Oliva Caipe</h6>
                    <p class="m-0">Egresada</p>
                    <p class="m-0">Ingeniera de Sistemas</p>
                  </div>
                  <div class="team-icon d-flex justify-content-center pb-4">
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a
                      class="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href="">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/*fin semilleristas 2020 */}
          </div>
        </div>
      </div>
    </>
  );
}
export default Participantes;
