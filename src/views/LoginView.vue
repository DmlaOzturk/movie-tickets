<template>
  <div id="page" v-show="value">
    <div v-if="section == 'login'" class="login-frame">
      <div class="login-frame-section">
        <button @click="close" class="login-frame-close">x</button>
        <h1>Login</h1>
        <form class="login-frame-section-form">
          <div class="login-frame-section-input">
            <h4>E-mail</h4>
            <input type="text" v-model="email" placeholder="e-mail" />
          </div>
          <div class="login-frame-section-input">
            <h4>Passwords</h4>
            <input type="password" v-model="password" placeholder="password" />
          </div>
        </form>
        <button @click="login" class="login-frame-button">Login</button>
        <p>
          If you don't have an account please
          <button @click="openSignUpModal">Sign up</button>
        </p>
      </div>
    </div>
    <div v-else-if="section == 'signup'" class="login-frame">
      <div class="login-frame-section">
        <button @click="close" class="login-frame-close">x</button>
        <h1>SignUp</h1>
        <form class="login-frame-section-form">
          <div class="login-frame-section-input">
            <h4>E-mail</h4>
            <input type="text" v-model="email" placeholder="e-mail" />
          </div>
          <div class="login-frame-section-input">
            <h4>Passwords</h4>
            <input type="password" v-model="password" placeholder="password" />
          </div>
        </form>
        <button @click="signUp" class="login-frame-button">Sign up</button>
        <p>
          If you already have an account please
          <button @click="openLoginModal">Login</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginModal",
  props: {
    value: {
      required: true,
    },
  },
  data() {
    return {
      email: "",
      password: "",
      section: "login",
    };
  },
  methods: {
    close() {
      this.$emit("input", !this.value);
    },
    login() {
      console.log(this.email, "+", this.password);
    },
    openSignUpModal() {
      this.section = "signup";
      this.$route.params.modal = "/signup";
    },
    openLoginModal() {
      this.section = "login";
      this.$route.params.modal = "/login";
    },
  },
};
</script>

<style scoped>
#page {
  font-family: "Times New Roman", Times, serif;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 30px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.6); /* Black w/ opacity */
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
  width: 30%;
  height: 45vh;
  border-style: double;
  background-color: white;
}
.login-frame-close {
  margin-left: 16rem;
  border-style: none;
  width: 8%;
  height: 8%;
}
.login-frame-close:hover {
  background-color: rgb(187, 184, 181);
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
