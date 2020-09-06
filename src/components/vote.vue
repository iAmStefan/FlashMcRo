<template>
  <div class="start">
    <vue-headful title="FlashMcRo | Vot"/>
    <div class="container-fluid">
      <div class="row">
       <div class="menu">
          <ul>
            <li alt="flash-mc-ro home section" title="flash-mc-ro home section"><router-link to="/">Acasa</router-link></li>
            <li alt="flash-mc-ro forum section" title="flash-mc-ro forum section"><router-link to="/forum">Forum</router-link></li>
            <li alt="flash-mc-ro shop section" title="flash-mc-ro shop section"><router-link to="/magazin">Magazin</router-link></li>
            <li class="active" alt="flash-mc-ro vote section" title="flash-mc-ro vote section"><router-link to="/vot">Voteaza</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="announce">
        <br></br>
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <p alt="flash-mc-ro vote link" title="flash-mc-ro vote link" class="voting">Nu uita sa votezi <a href="https://minecraft-mp.com/server/232896/vote/"><span>aici</span></a> si vei primi un bonus!</p>
                </div>
            </div>
        </div>
    </div>
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

  .col-lg-12{
    text-align: center;
  }
  .announce{
    background: url("../assets/images/voteImage.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-top: 30px;
    width: 100%;
    height: 100%;
    transform: skewY(-2deg);
    transform-origin: top left;
  }
  .voting{
    color: white;
    font-family: "Roboto", sans-serif;
    font-size: 110px;
    margin-top: 130px;
    letter-spacing: 3px;
    text-shadow: 0px 6px #505050;
    transform: skewY(2deg);
    transform-origin: top left;
  }
  .voting a{
    color: #F82222;
  }
  .voting a:hover{
    text-decoration: none;
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
    border: 1px solid black;
    margin-left: 5px;
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
