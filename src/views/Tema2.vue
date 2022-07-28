<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="zoom-in")
        span 2
      h1(data-aos="zoom-in") Estándares de la seguridad IoT
  
    .row.mb-5(data-aos="zoom-in")
      .col-md-3
        figure
          img(src="@/assets/curso/temas/tema2/img1.png" data-aos="zoom-in-up")
      .col-md-9
        p(data-aos="fade-in").mt-3.mt-lg-0 Si bien es cierto que el avance tecnológico en el internet de las cosas es tendencia de crecimiento a nivel mundial, aportando de forma importante al entorno empresarial, no se ha priorizado la seguridad de la información que viaja por los dispositivos,
        p.mt-2 Por ello, la Organización Internacional de Normalización presenta la arquitectura ISO/IEC 30141: 2018, la cual proporciona una arquitectura de referencia que se complementa con otros estándares internacionales para garantizar la seguridad y protección de los datos.
        p.mt-2 El estándar ISO / IEC 30141 es la primera arquitectura de referencia que tiene como objetivo hacer que el IoT sea eficiente, interrumpible, seguro y resistente a ataques.
    .row.mb-4
        .col-12
          p(data-aos="fade-in") Este estándar cuenta con un modelo conceptual y una arquitectura de referencia que permite utilizar un lenguaje común en todo el mundo para poder diseñar y desarrollar aplicaciones de IoT.
    .row(data-aos="zoom-in").mb-5.d-flex.justify-content-center
      .col-9
        figure.mb-4
          img(src="@/assets/curso/temas/tema2/img2.svg", alt="alt")
    .row.mb-4
        .col-12
          p(data-aos="fade-in") Para finalizar, se presentan algunas leyes colombianas aplicadas a seguridad y protección de datos:
    .row.d-flex.justify-content-center.border-radius-10.bg-color-sistema-g
      .col-7.p-5
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img3.svg', alt='Texto que describa la imagen')
              figcaption 

          .tarjeta.color-acento-botones.p-3(x="31%" y="8%" numero="3")
            .h5.mb-2 Ley 1273 de 2009
            p Reglamenta el castigo de todo aquel que atente contra la disponibilidad, integridad y confidencialidad de la información, que en IoT se puede aplicar a todo ataque a dispositivos usados en el sector salud como ejemplo.

          .tarjeta.color-acento-botones.p-3(x="10%" y="30%" numero="2")
            .h5.mb-2 Ley 1266 de 2008
            p En la cual se dictan disposiciones generales del hábeas data y regula el manejo de la información que está en bases de datos personales. 

          .tarjeta.color-acento-botones.p-3(x="10%" y="60%" numero="1")
            .h5.mb-2 Ley 1581 de 2012
            p La cual se centra en la protección de datos personales y reglamenta el derecho que tienen las personas  a conocer, actualizar y rectificar información que se haya recogido sobre ellas.

          .tarjeta.color-acento-botones.p-3(x="86%" y="30%" numero="5")
            .h5.mb-2 ISO/IEC 27000
            p Hacen parte de un sistema de administración de seguridad de la información (Information Security Management System ISMS), el cual va dirigido a la seguridad de la información bajo un detallado control administrativo de la misma, está el grupo de estándares NIST en el cual encontramos el marco para la mejora de la seguridad cibernética en infraestructuras críticas.

          .tarjeta.color-acento-botones.p-3(x="63.5%" y="7%" numero="4")
            .h5.mb-2 ISO 15408
            p Permite que diferentes aplicaciones de software puedan ser integradas y probadas de forma o manera segura.

          .tarjeta.color-acento-botones.p-3(x="84.5%" y="59%" numero="6")
            .h5.mb-2 ISO 27002
            p Establece un parámetro para las buenas prácticas, que determinan una serie de objetivos y controles que se integran con la ISO 27001 en relación con el tratamiento de los riesgos.



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
