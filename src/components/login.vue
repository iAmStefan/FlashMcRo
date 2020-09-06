<template>
  <div class="start">
    <vue-headful title="FlashMcRo | Logare"/>
    <div class="container">
        <br></br><br></br><br></br><br></br><br></br>
        <div class="row">
            <div class="col-lg-12">
                <div class="loginForm">
                    <div class="title">Autentificare</div>
                    <form method="POST">
                        <div class="login-group">
                            <div v-if="$v.Email.$error">
                              <div v-if="!$v.Email.required" class="invalid-feedback">Acest camp este obligatoriu.</div>
                            </div>
                            <p alt="flash-mc-ro email input" title="flash-mc-ro email input">E-mail</p>
                            <input type="email" required v-model.trim="$v.Email.$model" :class="{ 'is-invalid': $v.Email.$error, 'is-valid': !$v.Email.$invalid }" class="is-invalid">

                            <div v-if="$v.Parola.$error">
                              <div v-if="!$v.Parola.required" class="invalid-feedback">Acest camp este obligatoriu.</div>
                            </div>
                            <div v-if="$v.Parola.$error">
                              <div v-if="!$v.Parola.minLength" class="invalid-feedback">Lungimea minima este de 4 caractere.</div>
                            </div>
                            <p alt="flash-mc-ro password input" title="flash-mc-ro password input">Parola</p>
                            <input type="password" required v-model.tim="$v.Parola.$model">
                        </div>
                        <button alt="flash-mc-ro authenticate" title="flash-mc-ro authenticate" type="submit" class="login">Autentificare</button>
                        <p alt="flash-mc-ro forgot your password" title="flash-mc-ro forgot your password" class="passwordReset"><a href="">Ti-ai uitat parola ?</a></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
export default {
name: 'login-group',
data() {
  return {
        Email: '',
        Parola: ''
      }
  },
  validations: {
    Email: {
      required
    },
    Parola: {
      required,
      minLength: minLength(4)
    }
  },
  methods: {
    submit: function(e) {
      this.$v.$touch();
      if (this.$v.pendding || this.$v.error) return;
    },
    validationStatus: function(validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    }
  }
}
</script>

<style>
.start{
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom left, #ffcc00 11%, #ff3300 100%);
}

/* Log in form */
.col-lg-12{
    text-align: center;
}
.loginForm{
    display: inline-block;
    height: 240px;
    width: 400px;
    background-color: white;
    border: 1px solid black;
    border-radius: 3px;
}
.loginForm .title{
    border-bottom: 1px solid black;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    letter-spacing: 1px;
    color: black;
}
.login-group p:first-child{
    margin-top: 5px;
}
.login-group p{
    margin-top: 5px;
    font-size: 15px;
    font-family: "Roboto", sans-serif;
    float: left;
    margin-left: 5px;
    color: black;
}

input[type="email"], input[type="password"]{
    width: 97%;
    border: 1px solid black;
    border-radius: 3px;
}

.login{
    background-color: dodgerblue;
    border: 1px solid black;
    border-radius: 3px;
    padding: 5px 10px;
    color: black;
    margin-top: 20px;
    margin-left: 100px;
}
.passwordReset{
    margin-top: 60px;
    color: dodgerblue;
    float: right;
    margin-right: 10px;
}
.passwordReset a{
    color: dodgerblue;
}
.passwordReset a:hover{
    color: dodgerblue;
    text-decoration: none;
}
.invalid-feedback{
  color: red;
  float: right;
  margin-right: 5px;
  margin-top: 5px;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
}
</style>
