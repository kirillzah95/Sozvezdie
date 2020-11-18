<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">Тестовое задание</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <router-link class="nav-link" exact-active-class="active" to="/">
              <li class="nav-item">Каталог</li>
            </router-link>
            <router-link class="nav-link" exact-active-class="active" to="/about">
              <li class="nav-item">Об тестовом задание</li>
            </router-link>
          </ul>
        </div>
      </div>
    </nav>
    <router-view class="body"/>
  </div>
</template>

<style scope>
  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  }

  .body {
  padding-top: 56px;
  }
</style>
