<template>
  <div class="start">
    <vue-headful title="FlashMcRo | Magazin"/>
    <div class="container-fluid">
      <div class="row">
       <div class="menu">
          <ul>
            <li alt="flash-mc-ro home section" title="flash-mc-ro home section"><router-link to="/">Acasa</router-link></li>
            <li alt="flash-mc-ro forum section" title="flash-mc-ro forum section"><router-link to="/forum">Forum</router-link></li>
            <li class="active" alt="flash-mc-ro shop section" title="flash-mc-ro shop section"><router-link to="/magazin">Magazin</router-link></li>
            <li alt="flash-mc-ro vote section" title="flash-mc-ro vote section"><router-link to="/vot">Voteaza</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="shopStuff">
        <br></br>
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="announce">
                        <p class="text-center">Donatiile se fac pe discord la FlashMcRo#4211.</p>
                        <p class="text-center">Daca vei cumpara un grad speram sa il folosesti corespunzator.</p>

                        <div class="title">Metode de plata</div>
                        <img src="../assets/images/paysafe.png">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="listaGrade">
        <br></br>
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="lista">
                        <div class="title">Lista cu grade</div>
                        <br></br>
                        <div class="gradePreturi">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="grade">
                                            <p alt="flash-mc-ro flyer rank" title="flash-mc-ro flyer rank" class="flyer">Flyer</p>
                                            <p alt="flash-mc-ro elite rank" title="flash-mc-ro elite rank" class="elite">Elite</p>
                                            <p alt="flash-mc-ro MVP rank" title="flash-mc-ro MVP rank" class="mvp">M.V.P</p>
                                            <p alt="flash-mc-ro MVP+ rank" title="flash-mc-ro MVP+ rank" class="mvpPlus">M.V.P+</p>
                                            <p alt="flash-mc-ro VIP rank" title="flash-mc-ro VIP rank" class="vip">V.I.P</p>
                                            <p alt="flash-mc-ro VIP+ rank" title="flash-mc-ro VIP+ rank" class="vipPlus">V.I.P+</p>
                                            <p alt="flash-mc-ro hero rank" title="flash-mc-ro hero rank" class="hero">Hero</p>
                                            <p alt="flash-mc-ro legend rank" title="flash-mc-ro legend rank" class="legend">Legend</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="preturi">
                                            <p alt="flash-mc-ro flyer rank price" title="flash-mc-ro flyer rank price">2€</p>
                                            <p alt="flash-mc-ro elite rank price" title="flash-mc-ro elite rank price">5€</p>
                                            <p alt="flash-mc-ro MVP rank price" title="flash-mc-ro MVP rank price">10€</p>
                                            <p alt="flash-mc-ro MVP+ rank price" title="flash-mc-ro MVP+ rank price">15€</p>
                                            <p alt="flash-mc-ro VIP rank price" title="flash-mc-ro VIP rank price">20€</p>
                                            <p alt="flash-mc-ro VIP+ rank price" title="flash-mc-ro VIP+ rank price">25€</p>
                                            <p alt="flash-mc-ro hero rank price" title="flash-mc-ro hero rank price">35€</p>
                                            <p alt="flash-mc-ro legend rank price" title="flash-mc-ro legend rank price" class="legend">50€</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br><br>
    <socialMedia></socialMedia>
  </div>
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

.start{
    height: 100%;
    width: 100%;
    background-color: #BFBFBF;
  }

  /* Image + discord shopping */
  .col-lg-12{
    text-align: center;
    width: 100%;
  }
  .col-lg-6{
    text-align: center;
  }
  .shopStuff{
    background: url("../assets/images/shopImage.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-top: 30px;
    width: 100%;
    height: 100%;
    transform: skewY(-2deg);
    transform-origin: top left;
  }
  .announce .title{
    text-align: center;
    color: white;
    font-family: "Roboto", sans-serif;
    font-size: 56px;
    margin-top: 160px;
    letter-spacing: 3px;
    text-shadow: 0px 4px #505050;
    transform: skewY(2deg);
    transform-origin: top left;
  }
  .announce p{
    text-align: center;
    color: white;
    font-family: "Roboto", sans-serif;
    font-size: 50px;
    margin-top: 10px;
    letter-spacing: 3px;
    text-shadow: 0px 3px #505050;
    transform: skewY(2deg);
    transform-origin: top left;
  }
  .announce img{
    margin-top: 30px;
    width: 200px;
    height: 50px;
    transform: skewY(2deg);
    transform-origin: top left;
  }
  .lista .title{
    font-family: 'Lobster', cursive;
    font-size: 50px;
    color: black;
  }
  .lista p{
    font-family: 'Lobster', cursive;
    font-size: 15px;
  }
  .preturi p{
    color: green;
  }
  .grade{
    display: inline-block;
  }
  .preturi{
    display: inline-block;
  }
  .elite{
    color: #05BE02;
  }
  .mvp{
    color: #FFEC00;
  }
  .mvpPlus{
    color: #D27F3D;
  }
  .vip{
    color: #00D1FF;
  }
  .vipPlus{
    color: #008FFF
  }
  .hero{
    color: #049502;
  }
  .legend{
    color: #049502;
  }
  /* Social */
  .fa-instagram{
    padding: 10px;
    border: 1px solid black;
    border-radius: 50%;
    color: #E252CC;
  }
  .fa-facebook-square{
    padding: 10px;
    margin-left: 5px;
    border: 1px solid black;
    border-radius: 50%;
    color: #266FB3;
  }
  .fa-instagram:hover{
    background-color: #E252CC;
    color: white;
    transition: 0.6s;
  }
  .fa-facebook-square:hover {
    background-color: #266FB3;
    color: white;
    transition: 0.6s;
  }
  .social{
    padding-top: 10px;
    height: 53px;
    background-color: #BFBFBF;
    text-align: center;
  }

</style>
