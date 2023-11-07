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
function Coordinacion() {
  return (
    <>
      <div className="container pt-5">
        <center>
          <h5 className="text-primary">Coordinación</h5>
        </center>
        <br></br>
        <br></br>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div class="wow fadeIn col-sm-3" data-wow-delay=".5s">
          <div class="rounded">
            <div class="team-content">
              <div class="team-img-icon">
                <div class="team-img rounded-circle">
                  <img
                    src={travelprov1}
                    class="img-fluid w-100 rounded-circle"
                    alt=""
                  />
                </div>
                <div class="team-name text-center py-3">
                  <h5 class="">Sandra Marcela Guerrero Calvache</h5>
                  <p class="m-0">Coordinadora</p>
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
        </div>
      </div>
    </>
  );
}

export default Coordinacion;
