<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero(data-aos="fade-in")
        span
          i.fas.fa-info
      h1(data-aos="fade-in") Introducción
    
    p.mb-5(data-aos="fade-in") El concepto de internet de las cosas es bastante amplio, pero en realidad se refiere a dispositivos que son capaces de intercambiar datos con sistemas de cómputo, y estos dispositivos recopilan información sobre sistemas físicos por medio de sensores y se ejecutan acciones usando actuadores.

    p.mb-5(data-aos="fade-in") Para conocer un poco más sobre seguridad digital, es importante ver el siguiente video que dará una introducción al tema:
  

    figure.mb-5(data-aos="fade-in")
      .video      
        iframe(width="1280" height="720" src="https://www.youtube.com/embed/2Jjx92gH878" title="Fundamentos de seguridad digital" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
