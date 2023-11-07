import React from "react";
import { Link } from "react-router-dom";
import "../../../../lib/animate/animate.min.css";
import "../../../../lib/owlcarousel/assets/owl.carousel.min.css";

import "jquery";

import "../../../../lib/wow/wow.js";
import "../../../../lib/wow/wow.min.js";

import "../../../../lib/easing/easing.min.js";
import "../../../../lib/waypoints/waypoints.min.js";

import "../../../../lib/owlcarousel/owl.carousel.min.js";

//imagenes carousel
import Grupo from "../../../../img/integrantes/integrantes2023.jpg";
import Steammaker from "../../../../img/proyectos/imgcarousel/steammaker.jpg";
import Travelprov from "../../../../img/proyectos/imgcarousel/travelprov.jpg";
import Segujaz from "../../../../img/proyectos/imgcarousel/segujaz.jpg";
import Plantsgpt from "../../../../img/proyectos/imgcarousel/plantsgpt.jpg";

import WOW from "wow.js";
import "../../../../js/main.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../../css/style.css";
import Encurso from "../proyectos/Encurso.js";
function Generalproyectosencurso() {
  return (
    <>
      <div className="container-fluid px-0">
        <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img src={Grupo} className="img-fluid" alt="Second slide" />
              <div className="carousel-caption">
                <div
                  className="container carousel-content"
                  style={{ position: "absolute", bottom: 0 }}>
                  <div class="container text-center py-5">
                    <h6 class="display-2 text-white mb-4 animated slideInDown">
                      Proyectos en Curso
                    </h6>
                    <nav aria-label="breadcrumb animated fadeInRight">
                      <ol class="breadcrumb justify-content-center mb-0 animated fadeInRight">
                        <li class="breadcrumb-item">
                          <Link to="/" className="text-white">
                            Home
                          </Link>
                        </li>
                        <li class="breadcrumb-item">
                          <Link to="/proyectos" className="text-white">
                            Proyectos
                          </Link>
                        </li>
                        <li class="breadcrumb-item" aria-current="page">
                          Proyectos - encurso
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Steammaker} className="img-fluid" alt="Second slide" />
              <div className="carousel-caption">
                <div
                  className="container carousel-content"
                  style={{ position: "absolute", bottom: 0 }}>
                  <div class="container text-center py-5">
                    <h6 class="display-2 text-white mb-4 animated slideInDown">
                      Proyectos en Curso
                    </h6>
                    <nav aria-label="breadcrumb animated fadeInRight">
                      <ol class="breadcrumb justify-content-center mb-0 animated fadeInRight">
                        <li class="breadcrumb-item">
                          <Link to="/" className="text-white">
                            Home
                          </Link>
                        </li>
                        <li class="breadcrumb-item">
                          <Link to="/proyectos" className="text-white">
                            Proyectos
                          </Link>
                        </li>
                        <li class="breadcrumb-item" aria-current="page">
                          Proyectos - encurso
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img src={Plantsgpt} className="img-fluid" alt="Second slide" />
              <div className="carousel-caption">
                <div
                  className="container carousel-content"
                  style={{ position: "absolute", bottom: 0 }}>
                  <div class="container text-center py-5">
                    <h6 class="display-2 text-white mb-4 animated slideInDown">
                      Proyectos en Curso
                    </h6>
                    <nav aria-label="breadcrumb animated fadeInRight">
                      <ol class="breadcrumb justify-content-center mb-0 animated fadeInRight">
                        <li class="breadcrumb-item">
                          <Link to="/" className="text-white">
                            Home
                          </Link>
                        </li>
                        <li class="breadcrumb-item">
                          <Link to="/proyectos" className="text-white">
                            Proyectos
                          </Link>
                        </li>
                        <li class="breadcrumb-item" aria-current="page">
                          Proyectos - encurso
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img src={Segujaz} className="img-fluid" alt="Second slide" />
              <div className="carousel-caption">
                <div
                  className="container carousel-content"
                  style={{ position: "absolute", bottom: 0 }}>
                  <div class="container text-center py-5">
                    <h6 class="display-2 text-white mb-4 animated slideInDown">
                      Proyectos en Curso
                    </h6>
                    <nav aria-label="breadcrumb animated fadeInRight">
                      <ol class="breadcrumb justify-content-center mb-0 animated fadeInRight">
                        <li class="breadcrumb-item">
                          <Link to="/" className="text-white">
                            Home
                          </Link>
                        </li>
                        <li class="breadcrumb-item">
                          <Link to="/proyectos" className="text-white">
                            Proyectos
                          </Link>
                        </li>
                        <li class="breadcrumb-item" aria-current="page">
                          Proyectos - encurso
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img src={Travelprov} className="img-fluid" alt="Second slide" />
              <div className="carousel-caption">
                <div
                  className="container carousel-content"
                  style={{ position: "absolute", bottom: 0 }}>
                  <div class="container text-center py-5">
                    <h6 class="display-2 text-white mb-4 animated slideInDown">
                      Proyectos en Curso
                    </h6>
                    <nav aria-label="breadcrumb animated fadeInRight">
                      <ol class="breadcrumb justify-content-center mb-0 animated fadeInRight">
                        <li class="breadcrumb-item">
                          <Link to="/" className="text-white">
                            Home
                          </Link>
                        </li>
                        <li class="breadcrumb-item">
                          <Link to="/proyectos" className="text-white">
                            Proyectos
                          </Link>
                        </li>
                        <li class="breadcrumb-item" aria-current="page">
                          Proyectos - encurso
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            style={{
              background: "blue",
              opacity: "1",
              top: "50%",
              position: "absolute",
            }}
            className="carousel-control-prev bg-success"
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide="prev">
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next bg-success"
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide="next"
            style={{
              background: "blue",
              opacity: "1",
              top: "50%",
              position: "absolute",
            }}>
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <Encurso></Encurso>
      <br></br>
      <br></br>
    </>
  );
}

export default Generalproyectosencurso;
