<template>
  <div id="app">
    <nav class="navbar">
      <div class="navbar-left">
        <ul>
          <li id="logo">DMLA THEATRE</li>
          <li><router-link to="/" id="playingNow">Playing Now</router-link></li>
        </ul>
      </div>
      <div class="navbar-right">
        <ul>
          <li>Login</li>
          <li>=</li>
        </ul>
      </div>
    </nav>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>

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

#playingNow :hover {
  color: rgb(206, 18, 18);
}

* {
  margin: 0;
  padding: 0;
}
</style>
