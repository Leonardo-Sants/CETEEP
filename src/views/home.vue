<template>
    <main>
        <div class="logo">
            <h1 id="nomeLogo">CETEEP <p id="nomeLogo2">Treinamentos</p></h1>
        </div>
        <div class="paragrafo">
            <h2>Treinamentos e Consultoria in Company</h2>
        </div>
    </main>
</template>

<script>
export default {
    name: 'home'
}
</script>

<style scoped>

main {
    display: flex;
    justify-content: center;
}

.logo {
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 20px ;
  width: 300px;
  height: 130px;
  border: 3px solid #fff;
  background-color: rgb(33, 33, 242);
  box-shadow:  5px 5px  1em rgb(87, 86, 86);
  position: absolute;
}

#nomeLogo {
  font-size: 60px;
  font-weight: 700;
  color: #fff;
}

#nomeLogo2 {
  font-size: 40px;
  color: #fff;
}

.paragrafo {
    margin-top: 170px;
}
</style>