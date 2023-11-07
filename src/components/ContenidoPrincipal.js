import React from "react";
import Carousel from "./carousel/Carousel";
import Propuesta from "./navegacion/menus/proyectos/Propuesta";
import Encurso from "./navegacion/menus/proyectos/Encurso";
import Finalizado from "./navegacion/menus/proyectos/Finalizado";
import Publicaciones from "./navegacion/menus/participaciones/Publicaciones";
import Coordinacion from "./navegacion/menus/equipo/Coordinacion";
import Participantes from "./navegacion/menus/equipo/Participantes";
import Presentacion from "./navegacion/menus/nosotros/Presentacion";
import Lineasinvestigacion from "./navegacion/menus/nosotros/Lineasinvestigacion";
import Eventos from "./navegacion/menus/participaciones/Eventos";
function ContenidoPrincipal() {
  return (
    <>
      <Carousel></Carousel>
      <div
        class="text-center mx-auto wow fadeIn"
        data-wow-delay=".3s"
        style={{ maxWidth: "600px" }}>
        <h5 class="text-primary">Presentación</h5>
      </div>
      <Presentacion></Presentacion>
      <div
        class="text-center mx-auto wow fadeIn"
        data-wow-delay=".3s"
        style={{ maxWidth: "600px" }}>
        <h5 class="text-primary">Lineas de Investigación</h5>
      </div>
      <Lineasinvestigacion></Lineasinvestigacion>

      <div
        class="text-center mx-auto wow fadeIn"
        data-wow-delay=".3s"
        style={{ maxWidth: "600px" }}>
        <h5 class="text-primary">Proyectos</h5>
      </div>
      <Propuesta></Propuesta>
      <Encurso></Encurso>
      <Finalizado></Finalizado>
      <Eventos></Eventos>
      <Publicaciones></Publicaciones>
      <Coordinacion></Coordinacion>
      <Participantes></Participantes>
    </>
  );
}

export default ContenidoPrincipal;
