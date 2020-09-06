<template>
  <body>
    <vue-headful title="FlashMcRo | Acasa"/>
    <div class="container-fluid">
      <div class="row">
       <div class="menu">
          <ul>
            <li class="active" alt="flash-mc-ro home section" title="flash-mc-ro home section"><router-link to="/">Acasa</router-link></li>
            <li alt="flash-mc-ro forum section" title="flash-mc-ro forum section"><router-link to="/forum">Forum</router-link></li>
            <li alt="flash-mc-ro shop section" title="flash-mc-ro shop section"><router-link to="/magazin">Magazin</router-link></li>
            <li alt="flash-mc-ro vote section" title="flash-mc-ro vote section"><router-link to="/vot">Voteaza</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="imageIP">
      <br></br>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="imagineServer">
                <p alt="flash-mc-ro ip" title="flash-mc-ro ip" class="ip text-center">FlashMcRo.myserver.gs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <socialMedia></socialMedia>
  </body>
</template>

<script>

</script>

<style scoped>
.menu {
  padding: 5px 0;
  position: fixed;
  width: 100%;
  background-color: white;
  z-index: 100;
  border-bottom: 1px solid black;
}
.menu ul{
  float: right;
}
.menu ul li{
  list-style-type: none;
  display: inline-block;
  margin-top: 10px;
  margin-right: 50px;
  text-align: center;
  position: relative;
}
.menu ul li a{
  letter-spacing: 2px;
  text-decoration: none;
  color: black;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  text-transform: uppercase;
}
.menu ul li a::after{
  content: '';
  display: block;
  width: 0;
  height: 2px;
  background: #FB1401;
  transition: width .5s;
}
.menu li.active a {
  color: #646166;
}
.menu ul li a:hover::after{
  width: 100%;
}
.menu ul li.active a {
  color: #0189FB;
}

.menu ul li.active a::after {
  content: '';
  display: block;
  width: 100%;
  height: 2px;
  background: #FB1401;
}

.col-lg-12{
  width: 100%;
}
.imageIP{
  background: url("../assets/images/indexImage.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-top: 30px;
  width: 100%;
  height: 100%;
  transform: skewY(-2deg);
  transform-origin: top left;
}
.ip{
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 110px;
  margin-top: 270px;
  letter-spacing: 3px;
  text-shadow: 0px 6px #505050;
  transform: skewY( 2deg);
  transform-origin: top left;
}
</style>
