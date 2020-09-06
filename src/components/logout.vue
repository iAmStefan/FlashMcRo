<template>
  <div class="start">
    <vue-headful title="FlashMcRo | Delogare"/>
    <div class="container">
        <br></br><br></br><br></br><br></br>
        <div class="row">
            <div class="col-lg-12">
                <div class="loggedOut">
                    <p alt="flash-mc-ro logged out" title="flash-mc-ro logged out">Ai fost delogat!</p>
                    <p alt="flash-mc-ro authenticate again" title="flash-mc-ro authenticate again">Poti sa te autentifici din nou <span class="loggingIn"><router-link to="/log-in">aici</router-link></span>.</p>
                    <p alt="flash-mc-ro main page redirect" title="flash-mc-ro main page redirect">Sau poti sa mergi la <span class="mainPage"><router-link to="/">pagina principala</router-link></span>.</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
.start{
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom left, #ffcc00 11%, #ff3300 100%);
}

/* Log out messages*/
.col-lg-12{
    text-align: center;
}
.loggedOut p{
    color: white;
    font-family: "Roboto", sans-serif;
    font-size: 60px;
    margin-top: 10px;
    letter-spacing: 3px;
    text-shadow: 0px 4px #505050;
}
.loggedOut .loggingIn a{
    color: red;
}
.loggedOut .loggingIn a:hover{
    text-decoration: none;
}

.loggedOut .mainPage a{
    color: dodgerblue;
}
.loggedOut .mainPage a:hover{
    text-decoration: none;
}
</style>
