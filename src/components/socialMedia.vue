<template>
  <footer>
    <div class="social">
      <a alt="flash-mc-ro instagram" title="flash-mc-ro instagram" href="https://www.instagram.com/hardalex_yt/?hl=ro"><i class="fa fa-instagram"></i></a>
      <a alt="flash-mc-ro facebook" title="flash-mc-ro facebook" href="https://www.facebook.com/alex.covrig.9889"><i class="fa fa-facebook-square"></i></a>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped>

body, html{
  width: 100%;
  height: 100%;
  background-color: #BFBFBF;
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
  border-radius: 50%;
  color: #266FB3;
  margin-left: 5px;
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
