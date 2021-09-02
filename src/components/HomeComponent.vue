<template>

  <header class="cabecalho">
    <div class="logo">
      <h1 id="nomeLogo">CETEEP <p id="nomeLogo2">Centro Técnico</p></h1>
    </div>
    <div class="nav">
      <ul>
        <li>Home</li>
        <li>Escola</li>
        <li>Curso</li>
        <li>Serviços</li>
      </ul>
    </div>

    <div class="menu">
      <b-button v-b-toggle.sidebar-no-header variant="outline-light"><b-icon icon="menu-button-wide-fill" aria-hidden="true"></b-icon></b-button>
      <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
        <template #default="{ hide }">
          <div class="p-3">
            <h4 id="sidebar-no-header-title">Custom header sidebar</h4>
            <ul cla>
              <li>Home</li>
              <li>Escola</li>
              <li>Curso</li>
              <li>Serviços</li>
            </ul>
            <b-button variant="primary" block @click="hide">Close Sidebar</b-button>
          </div>
        </template>
      </b-sidebar>
    </div>


  </header>

</template>

<script>
  export default {
      name: 'HomeComponent',
    methods: {
        openMenu() {
          let menu = document.querySelector('.menuDrop');
          menu.style.display = ('block');
        },

         closeMenu() {
          let menu = document.querySelector('.menuDrop');
          menu.style.display = ('none');
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
  color: black;
  cursor: pointer;  
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
  box-shadow: 3px 3px 3px rgb(87, 86, 86);
  cursor: pointer;
}

#nomeLogo {
  font-size: 30px;
  font-weight: 700;
  color: #fff;
}

#nomeLogo2 {
  font-size: 15px;
  color: #fff;
}

.menu {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 25px;
  width: 100%;

}




@media (max-width: 720px) {
  .nav {
    display: none;
  }
  .menu {
    display: flex;
  }
  
}
</style>