<template>
  <div class="start">
    <vue-headful title="FlashMcRo | Inregistrare"/>
    <div class="container">
        <br></br><br></br>
        <div class="row">
            <div class="col-lg-12">
                <div class="registration">
                    <div class="registerForm">
                        <div class="title">Inregistrare</div>
                        <form method="post" v-on:submit.prevent="submit">
                            <div class="register-group">
                                <div v-if="$v.Nume.$error">
                                  <div v-if="!$v.Nume.required" class="invalid-feedback">Acest camp este obligatoriu.</div>
                                </div>
                                <p alt="flash-mc-ro first name input" title="flash-mc-ro first name input">Nume</p>
                                <input required type="text" v-model.trim="$v.Nume.$model" :class="{ 'is-invalid': $v.Nume.$error, 'is-valid': !$v.Nume.$invalid }" class="is-invalid">

                                <div v-if="$v.Prenume.$error">
                                  <div v-if="!$v.Prenume.required" class="invalid-feedback">Acest camp este obligatoriu.</div>
                                </div>
                                <p alt="flash-mc-ro last name input" title="flash-mc-ro last name input">Prenume</p>
                                <input required type="text" v-model.trim="$v.Prenume.$model">

                                <div v-if="$v.NumeMinecraft.$error">
                                  <div v-if="!$v.NumeMinecraft.required" class="invalid-feedback">Acest camp este obligatoriu.</div>
                                </div>
                                <p alt="flash-mc-ro username input" title="flash-mc-ro username input">Numele din Minecraft</p>
                                <input required type="text" v-model.trim="$v.NumeMinecraft.$model">

                                <div v-if="$v.Email.$error">
                                  <div v-if="!$v.Email.required" class="invalid-feedback">Acest camp este obligatoriu.</div>
                                </div>
                                <div v-if="$v.Email.$error">
                                  <div v-if="!$v.Email.isUnique" class="invalid-feedback">Aceasta adresa este deja folosita</div>
                                </div>
                                <p alt="flash-mc-ro e-mail input" title="flash-mc-ro e-mail input">Adresa de e-mail</p>
                                <input required type="email" v-model.trim="$v.Email.$model">

                                <div v-if="$v.Parola.$error">
                                  <div v-if="!$v.Parola.required" class="invalid-feedback">Acest camp este obligatoriu.</div>
                                </div>
                                <div v-if="$v.Parola.$error">
                                  <div v-if="!$v.Parola.minLength" class="invalid-feedback">Lungimea minima este de 4 caractere.</div>
                                </div>
                                <p alt="flash-mc-ro password input" title="flash-mc-ro password input">Parola</p>
                                <input required type="password" class="password" v-model.tim="$v.Parola.$model">

                                <div v-if="$v.ConfirmareParola.$error">
                                  <div v-if="!$v.ConfirmareParola.required" class="invalid-feedback">Acest camp este obligatoriu.</div>
                                </div>
                                <div v-if="$v.ConfirmareParola.$error">
                                  <div v-if="!$v.ConfirmareParola.minLength" class="invalid-feedback">Lungimea minima este de 4 caractere.</div>
                                </div>
                                <p alt="flash-mc-ro repeat password input" title="flash-mc-ro repeat password input">Confirmarea parolei</p>
                                <input required type="password" class="passwordConfirmation" v-model="$v.ConfirmareParola.$model">
                            </div>
                            <button v-on:click.prevent="post" alt="flash-mc-ro register" title="flash-mc-ro register" type="submit" class="register">Inregistrare</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { required, minLength, isUnique } from 'vuelidate/lib/validators'

export default {
  name: 'register-group',
  data: function() {
    return {
          Nume: '',
          Prenume: '',
          NumeMinecraft: '',
          Email: '',
          Parola: '',
          ConfirmareParola: ''
        }
    },
    validations: {
      Nume: {required},
      Prenume: {required},
      NumeMinecraft: {required},
      Email: {
        required
      },
      Parola: {
        required,
        minLength: minLength(4)
      },
      ConfirmareParola: {
        required,
        minLength: minLength(4)
      }
    },
    methods: {
        post:function() {
          this.$http.post('https://jsonplaceholder.typicode.com/todos/1/posts', {
              Nume: this.Nume,
              Prenume: this.Prenume,
              NumeMinecraft: this.NumeMinecraft,
              Email: this.Email,
              Parola: this.Parola
          }).then(function(data) {
            console.log(data);
          });
        },
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

.col-lg-12{
    text-align: center;
}
.registerForm{
    margin-top: 10px;
    display: inline-block;
    height: 460px;
    width: 440px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: white;
}
.registerForm .title{
    border-bottom: 1px solid black;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    letter-spacing: 1px;
}
.register{
    background-color: dodgerblue;
    border: 1px solid black;
    border-radius: 3px;
    padding: 5px 10px;
    color: black;
    margin-top: 15px;
}
.register:hover{
    background-color: dodgerblue;
    border: 1px solid black;
    border-radius: 3px;
    padding: 5px 10px;
    color: white;
    margin-top: 15px;
}
.register-group p:first-child{
    margin-top: 5px;
}
.register-group p{
    margin-top: 5px;
    font-size: 15px;
    font-family: "Roboto", sans-serif;
    float: left;
    margin-left: 5px;
}

input[type="text"], input[type="password"], input[type="email"]{
  width: 97%;
  border: 1px solid black;
  border-radius: 3px;
}

.name{
    width: 97%;
    border: 1px solid black;
    border-radius: 3px;
}
.surname{
    width: 97%;
    border: 1px solid black;
    border-radius: 3px;
}
.minecraftName{
    width: 97%;
    border: 1px solid black;
    border-radius: 3px;
}
.emailAddress{
    width: 97%;
    border: 1px solid black;
    border-radius: 3px;
}
.password{
    width: 97%;
    border: 1px solid black;
    border-radius: 3px;
}
.passwordConfirmation{
    width: 97%;
    border: 1px solid black;
    border-radius: 3px;
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
