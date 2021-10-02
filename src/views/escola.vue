<template>
    <section>
         <div>
        <Carrossel/>
        </div>

        <div class="sobre">
            <p id="descricao"> 
                A CETEEP atua no mercado desde 2014 com o, Compromisso em aumentar a satisfação dos nossos clientes, 
                incentivar a pesquisa em desenvolvimento tecnológico. Desenvolver programas permanentes de educação continua,
                 atendimento aos requisitos aplicáveis aos nossos serviços, promover melhoria contínua no sistema de gestão da qualidade
            </p>
        </div>

    </section>
   
</template>

<script>

import Carrossel from "../components/CarouselComponent.vue"
export default {
    name:'escola',
    components:{
        Carrossel
    }
}
</script>

<style scoped>

.carrosel{
    height: 580px;
}

.sobre {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 400px;
    margin: 30px;
    font-size: 1.5em;
}

</style>