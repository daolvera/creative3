<template>
<div id="app">
  <div id="menu">
    <div id="brand">
      <router-link to="/">
        <div class='logo'>
          <img src="/images/logo.png"> 
          <h1> ue Teams </h1>
        </div>
      </router-link>
    </div>
    <div id="side">
      <router-link to="/individual">
        <div class="menu-item individual">
          <p>Individual Tasks</p>
        </div>
      </router-link>
    </div>
  </div>
  <router-view />
  <div class='footer'>
    <a href='https://github.com/daolvera/creative3'> GitHub Repository</a>
  </div>
</div>
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;

}
.wrapper{
  width: 100%;
}

#menu {
  display: flex;
  margin-bottom: 50px;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}

#menu a {
  color: #B84901;
  text-decoration: none;
}
.logo{
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}

#brand {
  display: flex;
  justify-content: center;
}

#brand img {
  height: 40px;
}

#side {
  display: flex;
  justify-content: center;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.individual{
  margin-right: 0px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.footer{
	display: flex;
	justify-content: center;
	align-items: center;
	height: 70px;
	margin: auto;
	width: 100%;
	background-color:#f2591d;
}
.footer a{
	text-decoration: none;
	font-size: 20px;
	color: #fbf8fd;
	opacity: .8;
}
</style>
