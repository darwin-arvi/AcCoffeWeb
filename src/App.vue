<template>
  <div class="az-header" v-if="$store.state.user">
    <div class="container">
      <div class="az-header-left">
        <router-link to="/"><img class="az-header az-logo" src="./assets/fup_logo.png"/></router-link>
      </div><!-- az-header-left -->
        <ul class="nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link"><i class="typcn typcn-home"></i> Dashboard
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/estate/create" class="nav-link"><i class="typcn typcn-printer"></i>Create Estate
            </router-link>
          </li>
        </ul><!-- az-header-menu -->
      <div class="az-header-right">
        <div class="az-header-message">
          <a class="nav-link btn btn-light" @click="$store.dispatch('logout')">
            <h6>
              Sing Out
            </h6>
          </a>
        </div>
      </div><!-- az-header-right -->
    </div><!-- container -->
  </div><!-- az-header -->
  <router-view />
</template>

<script>
import { onBeforeMount } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })

  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
