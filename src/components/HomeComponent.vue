<template>
<div>

  <header class="cabecalho">
    <div class="logo">
      <h1 id="nomeLogo">CETEEP <p id="nomeLogo2">Treinamentos</p></h1>
    </div>
    <div class="nav">
      <ul>
        <li>Home</li>
        <li>Escola</li>
        <li>Curso</li>
        <li>Serviços</li>
      </ul>
    </div>
  </header>

  <div class="carrossel">
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
          <h1 id="carrossel">Soldagem e Corte</h1>
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
           <h1 id="carrossel">Inspeção de Qualidade</h1>
            <template #img>
                <img
                    class="d-block img-fluid w-100"
                    height="1024"
                    width="230"
                    src= "../assets/imagens/Inspetor.png"
                    alt="image slot"
                >
            </template>
      </b-carousel-slide>

    <!-- imagem tecnologia -->
         <b-carousel-slide>
             <h1 id="carrossel">Tecnologia</h1>
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
* {
  text-decoration: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

img {
  width: 100%;
  height: 480px;
}

#carrossel {
  color: #fff;
  font-size: 80px;
  font-weight: 700;
}
.cabecalho {
  display: flex;
  width: 100%;
  height: 80px;
  background-color: rgb(33, 33, 242);
}

.nav {
  display: flex;
  justify-content: flex-end;
  width: 90%;
  margin: 15px;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  position: absolute;
}

.nav ul, li{
  display: flex;
  margin: 5px 25px;
}

li:hover {
  color: rgb(13, 30, 153);
  cursor: pointer;
  font-size: 25px;
  
}

.logo {
  display: flex;
  align-items: center;
  padding: 5px;
  margin: 5px 20px;
  width: 150px;
  height: 70px;
  border: 3px solid #fff;
  background-color: rgb(33, 33, 242);
  box-shadow:  5px 5px  1em rgb(87, 86, 86);
  cursor: pointer;
  position: absolute;
}

#nomeLogo {
  font-size: 30px;
  font-weight: 700;
  color: #fff;
}

#nomeLogo2 {
  font-size: 20px;
  color: #fff;
}
</style>