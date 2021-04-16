<template>
  <div id="app">
    <div class = "row upper-nav">
        <div class = "col-sm-5">
            <h2 class = "nav-header">WELCOME TO OUR STOREFRONT</h2>
        </div>
    </div>
    <router-view/>
    <div id = "footer">
      <div class ="row">
          <div class = "col-sm-5">
            <h3 class = "footer-c">STOREFRONT 2021 ALL RIGHTS RESERVED</h3>
          </div>
          <div class = "col-sm-7">
            <h3 class = "footer-l-c">FOLLOW US AT</h3>
          </div>
              <div class = "col-sm-12">
                <img class = "smlogo" src="./assets/fblogo.png" alt = "sosmed"/>
                <img class = "smlogo" src="./assets/iglogo.png" alt = "sosmed"/>
                <img class = "smlogo" src="./assets/twitterlogo.png" alt = "sosmed"/>
              </div>
              <div class = "col-sm-3"></div>
              <div class = "col-sm-3"></div>

          
      </div>
      
    </div>
  </div>
</template>

<style scoped>
.smlogo{
  width: 50px;
  height: 50px;
  float: right;
  margin-right: 2%
}
.footer-c{
  padding-top: 3%;
  font-size: 1em;
  font-weight: 600;
  color: white
}
.footer-l-c{
  float:right;
  margin-right: 5%;
  padding-top: 1%;
  font-size: 1em;
  font-weight: 600;
  color: white
}
#footer{
  background-color: #30ac60;
  height: 20vh;
}
.prod-img{
  max-width: 100%;
  
}
.upper-nav{
    background-color: #30ac60;

    padding-top: 2%;
    padding-bottom: 2%;
}
.nav-header{
    font-weight: 600;
    font-size: 1.5em;
    margin-left: 5%;
    color: white
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

#nav {
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
