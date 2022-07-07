<template>
  <div id="page">
    <div class="login-frame">
      <div class="login-frame-section">
        <h1>Sign Up</h1>
        <form class="login-frame-section-form">
          <div class="login-frame-section-input">
            <h4>E-mail</h4>
            <input type="text" v-model="email" placeholder="e-mail" />
          </div>
          <div class="login-frame-section-input">
            <h4>Password</h4>
            <input type="password" v-model="password" placeholder="password" />
          </div>
        </form>
        <button class="login-frame-button">Sign Up</button>
        <p>
          If did sign in before please
          <router-link to="/login">Login</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#page {
  font-family: "Times New Roman", Times, serif;
  background-color: rgb(42, 40, 40);
}
.login-frame {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 93vh;
}
.login-frame-section {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 25%;
  height: 40vh;
  border-style: double;
  background-color: white;
}
.login-frame-section-form {
  padding-top: 1rem;
}
.login-frame-section-input h4 {
  padding: 0.5rem;
}
.login-frame-section-input input {
  padding: 0.5rem;
}
.login-frame-button {
  width: 25%;
  height: 8%;
  border-style: none;
}
.login-frame-button:hover {
  background-color: rgb(187, 184, 181);
}
</style>
