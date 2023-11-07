import React from "react";
import "../../../../lib/animate/animate.min.css";
import "../../../../lib/owlcarousel/assets/owl.carousel.min.css";

import "jquery";

import "../../../../lib/wow/wow.js";
import "../../../../lib/wow/wow.min.js";

import "../../../../lib/easing/easing.min.js";
import "../../../../lib/waypoints/waypoints.min.js";

import "../../../../lib/owlcarousel/owl.carousel.min.js";

//imagenes steamaker
import steamaker1 from "../../../../img/proyectos/STEAM MAKER/foto1.jpg";
import steamaker2 from "../../../../img/proyectos/STEAM MAKER/foto2.jpeg";

//imagenes plants-gpt
import plantsgpt1 from "../../../../img/proyectos/PLANTS GPT/foto1.jpg";
import plantsgpt2 from "../../../../img/proyectos/PLANTS GPT/foto2.jpg";

//imagenes segujaz
import segujaz1 from "../../../../img/proyectos/SEGUJAZ/foto1.jpg";
import segujaz2 from "../../../../img/proyectos/SEGUJAZ/foto2.jpg";

//imagenes travelprov
import travelprov1 from "../../../../img/proyectos/TRAVELPROV/foto1.jpg";
import travelprov2 from "../../../../img/proyectos/TRAVELPROV/foto2.jpg";

import WOW from "wow.js";
import "../../../../js/main.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../../css/style.css";
function Encurso() {
  return (
    <>
      {/*Primer proyecto Encurso */}

      <div className="container pt-5">
        <center>
          <h5 className="text-primary">En Curso</h5>
        </center>
        <br></br>
        <br></br>
        <div className="row g-5">
          <div
            className="col-lg-5 col-md-6 col-sm-12 wow fadeIn"
            data-wow-delay=".3s">
            <div className="h-100 position-relative">
              <img
                src={steamaker2}
                className="img-fluid rounded"
                alt=""
                style={{ marginBottom: "25%", height: "300px", width: "300px" }}
              />
              <div
                className="position-absolute"
                style={{ top: "30%", left: "35%" }}>
                <img
                  src={steamaker1}
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
              STEAM MAKER - Aula científica para el aprendizaje en tecnología,
              ciencia e innovación en estudiantes de grado decimo de la
              Institución Educativa Francisco de Paula Santander del municipio
              de Ospina.
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

      {/*fin Primer proyecto Encurso */}
      <br></br>
      <br></br>
      <br></br>
      {/*segundo proyecto Encurso */}

      <div className="container pt-5">
        <div className="row g-5">
          <div
            className="col-lg-5 col-md-6 col-sm-12 wow fadeIn"
            data-wow-delay=".3s">
            <div className="h-100 position-relative">
              <img
                src={plantsgpt1}
                className="img-fluid rounded"
                alt=""
                style={{ marginBottom: "25%", height: "300px", width: "300px" }}
              />
              <div
                className="position-absolute"
                style={{ top: "30%", left: "35%" }}>
                <img
                  src={plantsgpt2}
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
              PLANTS GPT - Prototipo de aplicación con inteligencia artificial
              para la preservación de la identidad cultural de las comunidades
              Indígenas de Nariño en torno a la medicina naturista.
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

      {/*fin segundo proyecto Encurso */}
      <br></br>
      <br></br>
      <br></br>
      {/*tercer proyecto Encurso */}

      <div className="container pt-5">
        <div className="row g-5">
          <div
            className="col-lg-5 col-md-6 col-sm-12 wow fadeIn"
            data-wow-delay=".3s">
            <div className="h-100 position-relative">
              <img
                src={segujaz1}
                className="img-fluid rounded"
                alt=""
                style={{ marginBottom: "25%" }}
              />
              <div
                className="position-absolute "
                style={{ top: "30%", left: "35%" }}>
                <img
                  src={segujaz2}
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
              SEGUJAZ: Propuesta TIC enfocada a los problemas de seguridad
              física presentados en la Universidad de Nariño sede Ipiales
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

      {/*fin tercer proyecto Encurso */}
      <br></br>
      <br></br>
      <br></br>
      {/*cuarto proyecto Encurso */}

      <div className="container pt-5">
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
            <p style={{ textAlign: "justify" }}>
              El marketing digital y la implantación de una plataforma web son
              las herramientas esenciales las cuales se utilizará para la
              promoción turística y el cuidado ambiental en el municipio de
              Providencia. Es una idea capaz de causar cambios significativos
              para la región tanto a nivel ambiental como económico dado que el
              turismo es bastante escaso debido al poco reconocimiento del
              municipio, lo que implica en cierto modo bajos ingresos por parte
              del sector urbano afectando principalmente a personas locales
              dueñas de negocios y establecimientos comerciales. El fin
              principal de llevar a cabo este proyecto es lograr contrarrestar
              la problemática planteada y a la vez sugerir practicas amables con
              el medio ambiente potenciando el turismo en la región. Es poco
              común hablar de marketing digital y plataformas web que funcionen
              a favor del municipio de Providencia, esto significa que el método
              de trabajo y búsqueda de información será la investigación
              cuantitativa y descriptiva. Esta idea es de carácter innovador por
              tal razón habrá muchas cosas por descubrir utilizando y sacando el
              mayor provecho de lo que actualmente ofrece la tecnología, pero
              siempre basándose en el marketing hacia el turismo tradicional con
              el fin principal de implantar todo lo obtenido en la plataforma
              web a realizar. Con el desarrollo de esta idea, el municipio de
              Providencia podría llegar a convertirse en un centro bien conocido
              de recreación y atracción para visitantes ofreciendo sitios
              adecuados para vivir una gran aventura y compartir un rato
              agradable con la familia o pareja, además de que todo esto sería
              de gran beneficio para la población local ayudando a mejorar la
              economía del municipio basada en el turismo.
            </p>
            <a
              href=""
              className="btn btn-success rounded-pill px-5 py-3 text-white">
              Ver Mas
            </a>
          </div>
        </div>
      </div>

      {/*fin cuarto proyecto Encurso */}
    </>
  );
}

export default Encurso;
