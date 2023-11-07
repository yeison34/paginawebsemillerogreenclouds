import React from "react";
import "../../../../lib/animate/animate.min.css";
import "../../../../lib/owlcarousel/assets/owl.carousel.min.css";

import "jquery";

import "../../../../lib/wow/wow.js";
import "../../../../lib/wow/wow.min.js";

import "../../../../lib/easing/easing.min.js";
import "../../../../lib/waypoints/waypoints.min.js";

import "../../../../lib/owlcarousel/owl.carousel.min.js";

//imagenes analisiweb2.0
import analisiweb1 from "../../../../img/proyectos/ANALISISWEB2.0/foto1.jpg";
import analisiweb2 from "../../../../img/proyectos/ANALISISWEB2.0/foto2.jpg";

//imagenes analisisprogramacion
import analisisprogramacion1 from "../../../../img/proyectos/ANALISISPROGRAMACION/foto1.jpg";
import analisisprogramacion2 from "../../../../img/proyectos/ANALISISPROGRAMACION/foto2.jpg";

//imagenes estrategiadidactica
import estrategiadidactica1 from "../../../../img/proyectos/ESTRATEGIADIDACTICA/foto1.jpg";
import estrategiadidactica2 from "../../../../img/proyectos/ESTRATEGIADIDACTICA/foto2.jpg";

//imagenes travelprov
//import travelprov1 from "../../../../img/proyectos/TRAVELPROV/foto1.jpg";
//import travelprov2 from "../../../../img/proyectos/TRAVELPROV/foto2.jpg";

import WOW from "wow.js";
import "../../../../js/main.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../../css/style.css";
function Finalizado() {
  return (
    <>
      {/*Primer proyecto Finalizado */}

      <div className="container pt-5">
        <center>
          <h5 className="text-primary">Finalizados</h5>
        </center>
        <br></br>
        <br></br>
        <div className="row g-5">
          <div
            className="col-lg-5 col-md-6 col-sm-12 wow fadeIn"
            data-wow-delay=".3s">
            <div className="h-100 position-relative">
              <img
                src={analisiweb1}
                className="img-fluid rounded"
                alt=""
                style={{ marginBottom: "25%", height: "300px", width: "300px" }}
              />
              <div
                className="position-absolute"
                style={{ top: "30%", left: "35%" }}>
                <img
                  src={analisiweb2}
                  style={{
                    marginBottom: "25%",
                    height: "300px",
                    width: "300px",
                  }}
                  className="img-fluid w-100 rounded"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            className="col-lg-7 col-md-6 col-sm-12 wow fadeIn"
            data-wow-delay=".5s">
            <h4
              className="mb-4"
              style={{ textAlign: "justify", fontWeight: "bold" }}>
              Análisis del uso y aplicación de las herramientas de la Web 2.0
              tanto en docentes como en estudiantes del programa de Ingeniería
              de Sistemas de la Universidad de Nariño, Sede Ipiales durante el
              periodo de contingencia generado por el Covid19.
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur quis purus ut interdum. Pellentesque aliquam dolor eget
              urna ultricies tincidunt. Nam volutpat libero sit amet leo cursus,
              ac viverra eros tristique. Morbi quis quam mi. Cras vel gravida
              eros. Proin scelerisque quam nec elementum viverra. Suspendisse
              viverra hendrerit diam in tempus. Etiam gravida justo nec erat
              vestibulum, et malesuada augue laoreet.
            </p>
            <p className="mb-4">
              Pellentesque aliquam dolor eget urna ultricies tincidunt. Nam
              volutpat libero sit amet leo cursus, ac viverra eros tristique.
              Morbi quis quam mi. Cras vel gravida eros. Proin scelerisque quam
              nec elementum viverra. Suspendisse viverra hendrerit diam in
              tempus.
            </p>
            <a
              href=""
              className="btn btn-success rounded-pill px-5 py-3 text-white">
              Ver Mas
            </a>
          </div>
        </div>
      </div>

      {/*fin Primer proyecto Finalizado */}
      <br></br>
      <br></br>
      <br></br>
      {/*segundo proyecto Finalizado */}

      <div className="container pt-5">
        <div className="row g-5">
          <div
            className="col-lg-5 col-md-6 col-sm-12 wow fadeIn"
            data-wow-delay=".3s">
            <div className="h-100 position-relative">
              <img
                src={analisisprogramacion1}
                className="img-fluid rounded"
                alt=""
                style={{ marginBottom: "25%", height: "300px", width: "300px" }}
              />
              <div
                className="position-absolute"
                style={{ top: "30%", left: "35%" }}>
                <img
                  src={analisisprogramacion2}
                  style={{
                    marginBottom: "25%",
                    height: "300px",
                    width: "300px",
                  }}
                  className="img-fluid w-100 rounded"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div
            className="col-lg-7 col-md-6 col-sm-12 wow fadeIn"
            data-wow-delay=".5s">
            <h4
              className="mb-4"
              style={{ textAlign: "justify", fontWeight: "bold" }}>
              Análisis del aporte de las asignaturas de programación de
              Ingeniería de Sistemas de la Universidad de Nariño en programación
              competitiva
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur quis purus ut interdum. Pellentesque aliquam dolor eget
              urna ultricies tincidunt. Nam volutpat libero sit amet leo cursus,
              ac viverra eros tristique. Morbi quis quam mi. Cras vel gravida
              eros. Proin scelerisque quam nec elementum viverra. Suspendisse
              viverra hendrerit diam in tempus. Etiam gravida justo nec erat
              vestibulum, et malesuada augue laoreet.
            </p>
            <p className="mb-4">
              Pellentesque aliquam dolor eget urna ultricies tincidunt. Nam
              volutpat libero sit amet leo cursus, ac viverra eros tristique.
              Morbi quis quam mi. Cras vel gravida eros. Proin scelerisque quam
              nec elementum viverra. Suspendisse viverra hendrerit diam in
              tempus.
            </p>
            <a
              href=""
              className="btn btn-success rounded-pill px-5 py-3 text-white">
              Ver Mas
            </a>
          </div>
        </div>
      </div>

      {/*fin segundo proyecto Finalizado */}
      <br></br>
      <br></br>
      <br></br>
      {/*tercer proyecto Finalizado */}

      <div className="container pt-5">
        <div className="row g-5">
          <div
            className="col-lg-5 col-md-6 col-sm-12 wow fadeIn"
            data-wow-delay=".3s">
            <div className="h-100 position-relative">
              <img
                src={estrategiadidactica1}
                className="img-fluid rounded"
                alt=""
                style={{ marginBottom: "25%" }}
              />
              <div
                className="position-absolute "
                style={{ top: "30%", left: "35%" }}>
                <img
                  src={estrategiadidactica2}
                  className="img-fluid w-100 rounded"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            className="col-lg-7 col-md-6 col-sm-12 wow fadeIn"
            data-wow-delay=".5s">
            <h4
              className="mb-4"
              style={{ textAlign: "justify", fontWeight: "bold" }}>
              Estrategia didáctica mediada con TIC para incentivar los procesos
              de lectura en la biblioteca pública rural “Juan Lorenzo Quenguan"
              del municipio de Ipiales.
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur quis purus ut interdum. Pellentesque aliquam dolor eget
              urna ultricies tincidunt. Nam volutpat libero sit amet leo cursus,
              ac viverra eros tristique. Morbi quis quam mi. Cras vel gravida
              eros. Proin scelerisque quam nec elementum viverra. Suspendisse
              viverra hendrerit diam in tempus. Etiam gravida justo nec erat
              vestibulum, et malesuada augue laoreet.
            </p>
            <p className="mb-4">
              Pellentesque aliquam dolor eget urna ultricies tincidunt. Nam
              volutpat libero sit amet leo cursus, ac viverra eros tristique.
              Morbi quis quam mi. Cras vel gravida eros. Proin scelerisque quam
              nec elementum viverra. Suspendisse viverra hendrerit diam in
              tempus.
            </p>
            <a
              href=""
              className="btn btn-success rounded-pill px-5 py-3 text-white">
              Ver Mas
            </a>
          </div>
        </div>
      </div>

      {/*fin tercer proyecto Finalizado */}
      <br></br>
      <br></br>
      <br></br>
      {/*cuarto proyecto Finalizado */}

      {/*<div className="container pt-5">
        <div className="row g-5">
          <div
            className="col-lg-5 col-md-6 col-sm-12 wow fadeIn"
            data-wow-delay=".3s">
            <div className="h-100 position-relative">
              <img
                src={travelprov1}
                className="img-fluid rounded"
                alt=""
                style={{ marginBottom: "25%" }}
              />
              <div
                className="position-absolute"
                style={{ top: "30%", left: "35%" }}>
                <img
                  src={travelprov2}
                  className="img-fluid w-100 rounded"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            className="col-lg-7 col-md-6 col-sm-12 wow fadeIn"
            data-wow-delay=".5s">
            <h4
              className="mb-4"
              style={{ textAlign: "justify", fontWeight: "bold" }}>
              TRAVELPROV: Plataforma web para la difusión turística del
              municipio de Providencia, Nariño mediante herramientas y
              estrategias de marketing digital
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur quis purus ut interdum. Pellentesque aliquam dolor eget
              urna ultricies tincidunt. Nam volutpat libero sit amet leo cursus,
              ac viverra eros tristique. Morbi quis quam mi. Cras vel gravida
              eros. Proin scelerisque quam nec elementum viverra. Suspendisse
              viverra hendrerit diam in tempus. Etiam gravida justo nec erat
              vestibulum, et malesuada augue laoreet.
            </p>
            <p className="mb-4">
              Pellentesque aliquam dolor eget urna ultricies tincidunt. Nam
              volutpat libero sit amet leo cursus, ac viverra eros tristique.
              Morbi quis quam mi. Cras vel gravida eros. Proin scelerisque quam
              nec elementum viverra. Suspendisse viverra hendrerit diam in
              tempus.
            </p>
            <a
              href=""
              className="btn btn-success rounded-pill px-5 py-3 text-white">
              Ver Mas
            </a>
          </div>
        </div>
      </div>
                */}
      {/*fin cuarto proyecto Finalizado */}
    </>
  );
}

export default Finalizado;
