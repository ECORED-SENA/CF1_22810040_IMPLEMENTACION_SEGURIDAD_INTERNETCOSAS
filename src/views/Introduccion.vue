<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5 El concepto de internet de las cosas es bastante amplio, pero en realidad se refiere a dispositivos que son capaces de intercambiar datos con sistemas de cómputo, y estos dispositivos recopilan información sobre sistemas físicos por medio de sensores y se ejecutan acciones usando actuadores.

    p.mb-5 Para conocer un poco más sobre seguridad digital, es importante ver el siguiente video que dará una introducción al tema:
  

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
