<template>
  <div id="app">
    <nav class="navbar">
      <div class="navbar-left">
        <ul>
          <li id="logo">DMLA THEATRE</li>
          <li>
            <router-link to="/:modal" id="playingNow"> on theatre</router-link>
          </li>
          <li>
            <router-link to="/search/movie" id="searchView">search</router-link>
          </li>
        </ul>
      </div>
      <div class="navbar-right">
        <ul>
          <li id="loginView" @click="openLoginModal">Login</li>
          <li>=</li>
        </ul>
      </div>
    </nav>
    <div>
      <router-view />
      <login-view v-model="loginModalOpen"></login-view>
    </div>
  </div>
</template>

<script>
import LoginView from ".//views/LoginView.vue";

export default {
  components: {
    LoginView,
  },
  data() {
    return {
      loginModalOpen: false,
    };
  },
  methods: {
    openLoginModal() {
      this.loginModalOpen = !this.loginModalOpen;
    },
  },
};
</script>

<style>
.navbar {
  height: 80px;
  background: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 32px;
  padding-left: 32px;
  color: white;
}
.navbar ul {
  display: flex;
  align-items: center;
  list-style: none;
}

.navbar li {
  padding: 1rem;
}
#logo {
  color: rgb(222, 214, 232);
  font-size: 2rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

#playingNow {
  text-decoration: none;
  color: white;
  text-transform: uppercase;
}
#searchView {
  text-decoration: none;
  color: white;
  text-transform: uppercase;
}
#playingNow :hover {
  color: rgb(206, 18, 18);
}
#loginView {
  text-decoration: none;
  color: white;
  text-transform: uppercase;
}

* {
  margin: 0;
  padding: 0;
}
</style>
