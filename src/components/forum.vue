<template>
  <div class="start">
    <vue-headful title="FlashMcRo | Forum"/>
    <div class="container-fluid">
      <div class="row">
       <div class="menu">
          <ul>
            <li alt="flash-mc-ro home section" title="flash-mc-ro home section"><router-link to="/">Acasa</router-link></li>
            <li class="active" alt="flash-mc-ro forum section" title="flash-mc-ro forum section"><router-link to="/forum">Forum</router-link></li>
            <li alt="flash-mc-ro shop section" title="flash-mc-ro shop section"><router-link to="/magazin">Magazin</router-link></li>
            <li alt="flash-mc-ro vote section" title="flash-mc-ro vote section"><router-link to="/vot">Voteaza</router-link></li>
          </ul>
          <div class="signup_in">
              <p alt="flash-mc-ro logout" title="flash-mc-ro logout" class="delogare"><router-link to="/log-out">Delogare</router-link></p>
              <p alt="flash-mc-ro registration" title="flash-mc-ro registration" class="inregistrare"><router-link to="/register">Inregistrare</router-link></p>
              <p alt="flash-mc-ro authentication" title="flash-mc-ro authentication" class="autentificare"><router-link to="log-in">Autentificare</router-link></p>
          </div>
        </div>
      </div>
    </div>
    <div class="overlay">
      <div class="topicCreation">
        <div class="creation-form">
          <div class="title">Creaza un subtopic nou <span class="closeWindow">X</span></div>
          <p>Topicuri</p>
          <select class="list">
              <option>Lista topicurilor</option>
              <option>Discord</option>
              <option>Propuneri server</option>
              <option>Cereri pentru grade</option>
          </select>
          <p>Titlu subtopic</p>
          <input type="text" id="topicTitle" />
          <span id="error" style="color: red; display: none;">Introduceti numele subtopicului</span>
          <button class="createSubTopic" v-on:click="addItem">Creaza subtopicul</button>
        </div>
      </div>
    </div>
    <div class="topicList">
        <br></br>
        <div class="container">
            <div class="row">
                <div class="col-lg-10">
                    <div class="topics">
                      <div class="title">Topicuri</div>
                      <button alt="flash-mc-ro create new topics" title="flash-mc-ro create new topics" class="newTopic">Creaza un nou topic</button>
                    </div>
                    <div class="topicList">
                        <div class="discordTopic">
                            <div class="title">Discord</div>
                            <div class="subTopics" v-for="subtopic in discordTopic">
                                <p>{{ subtopic.name }}</p>
                            </div>
                        </div>
                        <div class="serverTopic">
                            <div class="title">Propuneri server</div>
                            <div class="subTopics">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="first">
                                                <p alt="flash-mc-ro new sections topic" title="flash-mc-ro new sections topic" class="sectionTopic"><a href="{% url 'subTopic' 'sectiuni-noi' %}">Sectiuni noi</a></p>
                                                <p alt="flash-mc-ro bugs topic" title="flash-mc-ro bugs topic" class="bugTopic"><a href="{% url 'subTopic' 'bug-uri' %}">Bug-uri</a></p>
                                                <p alt="flash-mc-ro suggestions topic" title="flash-mc-ro suggestions topic" class="sugestionTopic"><a href="{% url 'subTopic' 'sugestii' %}">Sugestiii</a></p>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="second">
                                                <p alt="flash-mc-ro warnings topic" title="flash-mc-ro warnings topic" class="reclamationTopic"><a href="{% url 'subTopic' 'reclamatii' %}">Reclamatii</a></p>
                                                <p alt="flash-mc-ro events topic" title="flash-mc-ro events topic" class="eventTopic"><a href="{% url 'subTopic' 'evenimente' %}">Evenimente</a></p>
                                                <p alt="flash-mc-ro announcements topic" title="flash-mc-ro announcements topic" class="announcementTopic"><a href="{% url 'subTopic' 'anunturi' %}">Anunturi</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="requestTopic">
                            <div class="title">Cereri pentru grade</div>
                            <div class="subTopics">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="first">
                                                <p alt="flash-mc-ro builder topic" title="flash-mc-ro builder topic" class="builderTopic"><a href="{% url 'subTopic' 'builder' %}"></a></p>
                                                <p alt="flash-mc-ro scripter topic" title="flash-mc-ro scripter topic" class="scripterT1opic"><a href="{% url 'subTopic' 'scripter' %}"></a></p>
                                                <p alt="flash-mc-ro admin topic" title="flash-mc-ro admin topic" class="adminTopic"><a href="{% url 'subTopic' 'administrator' %}"></a></p>
                                            </div>

                                        </div>
                                        <div class="col-lg-6">
                                            <div class="second">
                                                <p alt="flash-mc-ro moderator topic" title="flash-mc-ro moderator topic"class="modTopic"><a href="{% url 'subTopic' 'moderator' %}"></a></p>
                                                <p alt="flash-mc-ro flyer topic" title="flash-mc-ro flyer topic" class="flyerTopic"><a href="{% url 'subTopic' 'flyer' %}"></a></p>
                                                <p alt="flash-mc-ro vip topic" title="flash-mc-ro vip topic" class="vipTopic"><a href="{% url 'subTopic' 'vip' %}"></a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="discord">
                        <iframe src="https://discordapp.com/widget?id=616206076412690433&theme=dark" width="259" height="400" allowtransparency="true" frameborder="0" alt="flash-mc-ro discord" title="flash-mc-ro discord"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <socialMedia></socialMedia>
  </div>
</template>

<script>
export default {
  name: 'subTopics',
  data: function() {
    return {
      discordTopic: [
        { name: 'Canale de voce' },
        { name: 'Canale de text' },
        { name: 'Canale de muzica' }
      ]
    }
  },
    methods: {
      addItem: function(){
        let item = document.getElementById("topicTitle").value;
        let error = document.getElementById("error");
              if (item == "") {
                error.style.display = "block";
              } else {
                this.discordTopic.push({ name: item });
                error.style.display = "none";
              }
      }
   }
}
</script>

<style scoped>
.start{
    height: 100%;
    width: 100%;
    background: linear-gradient(to bottom left, #ffcc00 11%, #ff3300 100%);
}

  /*Meniu */
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

  /* Registration + Authentication + Username*/
  .inregistrare{
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    float:left;
    margin-top: 10px;
    margin-left: 20px;
    text-transform: uppercase;
  }
  .inregistrare a{
     color: black;
  }
  .inregistrare a:hover{
     text-decoration: none;
  }

  .autentificare{
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    float:left;
    margin-top: 10px;
    margin-left: 20px;
    text-transform: uppercase;
  }
  .autentificare a{
     color: black;
  }
  .autentificare a:hover{
     text-decoration: none;
  }

  .delogare{
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    float:left;
    margin-top: 10px;
    margin-left: 20px;
    text-transform: uppercase;
  }
  .delogare a{
     color: black;
  }
  .delogare a:hover{
     text-decoration: none;
  }
  .username{
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    float:left;
    margin-top: 10px;
    margin-left: 20px;
    text-transform: uppercase;
  }

  /* Topics */
  .topicList{
      width: 100%;
      height: 100%;
  }
  .col-lg-12{
    text-align: center;
  }
  .overlay{
    display: inline-block;
    text-align: center;
    margin: auto;
    position: fixed;
    background-color: rgba(0,0,0,0.7);
    width: 100%;
    height: 100%;
    z-index: 2;
    display: none;
  }
  .overlay .title{
    border-bottom: 1px solid black;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    letter-spacing: 1px;
    color: black;
  }
  .list{
    width: 97%;
  }
  #topicTitle{
    width: 97%;
    height: 20px;
  }
  .topicCreation .title{
    border-bottom: 1px solid black;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    letter-spacing: 1px;
    color: black;
  }
  .topicCreation p{
    font-family: "Roboto", sans-serif;
    margin-top: 10px;
    float: left;
    margin-left: 5px;
  }
  .topicCreation{
    margin: auto;
    text-align: center;
    width: 300px;
    height: 220px;
    background-color: white;
    border: 1px solid black;
    border-radius: 3px;
  }
  .creation-form{
    width: 100%;
    height: 100%;
  }
  .createSubTopic{
    display: inline-block;
    font-family: "Roboto", sans-serif;
    border: 1px solid black;
    border-radius: 3px;
    background-color: dodgerblue;
    margin-top: 10px;
  }
  .col-lg-10{
    text-align: center;
  }
  .col-lg-2{
    text-align: center;
  }
  .discord{
    margin-top: 25px;
    border: 1px solid black;
    width: 261px;
    height: 401px;
    border-radius: 6px;
  }
  .topics{
    margin-top: 25px;
    border: 1px solid black;
    border-radius: 3px;
    height: 45px;
    background-color: white;
  }
  .topics .title{
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    letter-spacing: 2px;
    margin-top: 10px;
    margin-left: 10px;
    float: left;
  }
  .newTopic{
    border: 1px solid black;
    border-radius: 3px;
    background-color: dodgerblue;
    margin-top: 10px;
    margin-right: 10px;
    float: right;
  }
  .discordTopic{
    margin-top: 25px;
    border: 1px solid black;
    border-radius: 3px;
    height: 100%;
    background-color: white;
  }
  .discordTopic .title{
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    letter-spacing: 2px;
    width: 100%;
    border-bottom: 1px solid black;
  }
  .serverTopic{
    margin-top: 25px;
    border: 1px solid black;
    border-radius: 3px;
    height: 100%;
    background-color: white;
  }
  .serverTopic .title{
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    letter-spacing: 2px;
    width: 100%;
    border-bottom: 1px solid black;
  }
  .requestTopic{
    margin-top: 25px;
    border: 1px solid black;
    border-radius: 3px;
    height: 100%;
    background-color: white;
  }
  .requestTopic .title{
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    letter-spacing: 2px;
    width: 100%;
    border-bottom: 1px solid black;
  }
  .col-lg-6{
    text-align: center;
  }
  .first{
    display: inline-block;
    margin-top: 10px;
  }
  .second{
    display: inline-block;
    margin-top: 10px;
  }
  .subTopics p{
    color: dodgerblue;
  }
  .subTopics a{
      color: dodgerblue;
      text-decoration: none;
  }
  .discordTopic .subTopics{
      margin-top: 10px;
  }
  .createTopic-form{
    width: 100%;
    float: left;
    background-color: white;
  }
  .title .closeWindow{
    cursor: grab;
    float: right;
    margin-right: 2px;
  }

  /* Social */
  .fa-instagram{
    padding: 8px;
    border: 1px solid black;
    border-radius: 50%;
    color: #E252CC;
  }
  .fa-facebook-square{
    padding: 8px;
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
    border-top: 1px solid black;
    padding-top: 10px;
    height: 53px;
    background-color: #BFBFBF;
    text-align: center;
  }
  @media only screen and (max-height: 1080px) {
  /* For mobile phones: */
  .topicCreation {
      margin-top: 300px;
    }
  }
</style>
