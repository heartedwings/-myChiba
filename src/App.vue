<template>
  <div>

    <div class ="home"> 
      <div class ="home-title">
        <router-link to="/home">Home</router-link> | 
        <router-link to="/contact">Contact</router-link> |
        <router-link to="/contactForm">ContactForm</router-link>
      </div>
    </div>

    <router-view/>

  </div>
</template>

<style lang="scss">
.home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.home-title {
  padding: 30px;

  a {
    font-weight: bold;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
/* .home {
  color: rgb(134, 155, 177);
  width: 100%;
  text-align: center;
  padding-top: 20px;

} */
</style>