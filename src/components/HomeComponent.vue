<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024px"
      img-height="180px"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

    <!-- imagem solda -->
      <b-carousel-slide>
          <h1>Soldagem e Corte</h1>
            <template #img>
                <img
                    class="d-block img-fluid w-100"
                    src= "../assets/imagens/Solda.jpg"
                    width="1024px"
                    height="280px"
                    alt="image slot"
                >
            </template>
      </b-carousel-slide>

    <!-- imagem inspeção -->
       <b-carousel-slide>
           <h1>inspeção</h1>
            <template #img>
                <img
                    class="d-block img-fluid w-100"
                    height="1024"
                    width="230"
                    src= "../assets/imagens/Inspecao.jpg"
                    alt="image slot"
                >
            </template>
      </b-carousel-slide>

    <!-- imagem tecnologia -->
         <b-carousel-slide>
             <h1>Tecnologia</h1>
            <template #img>
                <img
                    class="d-block img-fluid w-100"
                    src= "../assets/imagens/Tecnologia.jpg"
                    alt="image slot"
                >
            </template>
      </b-carousel-slide>

    </b-carousel>
  </div>
</template>

<script>
  export default {
      name: 'HomeComponent',
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
        return slide
      },
      onSlideEnd(slide) {
        this.sliding = false
        return slide
      }
    }
  }
</script>

<style scoped>

</style>