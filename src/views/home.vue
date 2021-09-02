<template>
    <main>

        <div class="carrossel">
        <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
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
                <h1 id="carrossel">Controle de Qualidade</h1>
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
                <h1 id="carrossel">Indústria e Tecnologia</h1>
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

        <section class="sectionLogo">
            <div class="logo">
                <h1 id="nomeLogo">CETEEP <p id="nomeLogo2">Centro Técnico Especializado Profissionalizante</p></h1>
            </div>
        </section>

        <section class="sectionCurso">
            <div>
                <p>Cursos e treinamentos presenciais e (EAD)</p>
            </div>
            <div class="paragrafo">
                <h2 id="paragrafoH2">Venha alavancar sua carreira com a CETEEP treinamentos, e saia na frente 
                    com a sua certificação no mesmo dia.
                </h2>
            </div>
            <div class="imgCurso">
                <div>
                    <img id="imgAjuste" src="../assets/imagens/Solda.jpg" alt="Solda e corte">
                    <h1 id="imgTitulo">Soldagem e Corte</h1>
                </div>
                <div>
                    <img id="imgAjuste" src="../assets/imagens/Inspetor.png" alt="Solda e corte">
                    <h1 id="imgTitulo">Controle de Qualidade</h1>
                </div>
                <div>
                    <img id="imgAjuste" src="../assets/imagens/Tecnologia.jpg" alt="Solda e corte">
                    <h1 id="imgTitulo">Indústria eTecnologia</h1>
                </div>
                <div>
                    <img id="imgAjuste" src="../assets/imagens/normas.png" alt="Solda e corte">
                    <h1 id="imgTitulo">Fomação nas Normas internacionais</h1>
                </div>
            </div>
        </section>

        <section class="sectionServico">
              <div>
                <p>CETEEP Serviços</p>
            </div>
            <div class="imgCurso">
                <div>
                    <img id="imgAjuste" src="../assets/imagens/Laboratorio.jpg" alt="Solda e corte">
                    <h1 id="imgTitulo">Laboratório</h1>
                    <ul id="imgLista">
                        <li>Laboratório de ensaios Mecânico     </li>
                        <li>Laboratório de ensaio de Soldagem   </li>
                        <li>Laboratório de ensaios de END       </li>
                        <li>Laboratório de ensaio de Macrografia</li>
                    </ul>
                </div>
                <div>
                    <img id="imgAjuste" src="../assets/imagens/Documentos.jpg" alt="Solda e corte">
                    <h1 id="imgTitulo">Documentos</h1>
                     <ul id="imgLista">
                        <li>Laudos e Documentos técnicos</li>
                        <li>Desenvolvimentos de Procedimentos</li>
                        <li>Qualificação de Soldadores EPS/RQPS/RQS/IEIS</li>
                    </ul>
                </div>
                <div>
                    <img id="imgAjuste" src="../assets/imagens/Auditoria.jpg" alt="Solda e corte">
                    <h1 id="imgTitulo">Auditoria</h1>
                     <ul id="imgLista">
                        <li>Laboratório de ensaios Mecânico</li>
                        <li>Laboratório de ensaio de Soldagem</li>
                        <li>Laboratório de ensaios de END</li>
                        <li>Laboratório de ensaio de Macrografia</li>
                    </ul>
                </div>
            </div>
        </section>

    </main>
</template>

<script>
export default {
    name: 'home',
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
  font-size: 4em;
  font-weight: 700;
}

section {
    display: flex;
    flex-direction: column;
}

.sectionLogo {
    display: flex;
    justify-items: center;   
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 70px;

}

#nomeLogo {
    display: flex;
    flex-direction: column;
    align-items: initial;
    padding: 0px 0px 0px 15px;
    font-size: 60px;
    font-weight: 700;
    color: #fff;
    margin: 10px;
    width: 500px;
    height: 130px;
    border: 3px solid #fff;
    background-color: rgb(33, 33, 242);
    box-shadow:  1px 1px  0.5em rgb(87, 86, 86);
}

#nomeLogo2 {
  font-size: 20px;
  color: #fff;
}

.paragrafo {
    display: flex;
    justify-content: center;
    color: #000;
    width: 100%;
    margin-top: 20px;
}

.sectionCurso {
    display: flex;
    width: 100%;
    height: 500px;
    margin-top: 70px;
}

.sectionCurso p {
    display: flex;
    justify-content: center;
    font-size: 3em;
    font-weight: 700;
}

#paragrafoH2 {
    display: flex;
    justify-content: center;
    width: 800px;
    font-weight: 300;
}

.imgCurso {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

#imgAjuste {
    display: flex;
    width: 250px;
    height: 250px;
    margin: 100px 50px 20px 40px;
    box-shadow:  3px 3px  1em rgb(87, 86, 86);
}

#imgTitulo {
    display: flex;
    justify-content: center;
    font-size: 1em;
    font-weight: 700;
}

#imgLista {
    display: flex;
    flex-direction: column;
    align-items: initial;
    font-size: 0.7em;
    margin: 5px 60px;
}

.sectionServico {
    display: flex;
    width: 100%;
    height: 600px;
    margin-top: 100px;
}

.sectionServico p {
    display: flex;
    justify-content: center;
    font-size: 3em;
    font-weight: 500;
    
}
</style>