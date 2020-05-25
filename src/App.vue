<template>
  <div class="grid-container">
    <Header class="header" />
    <router-view class="page-content" />
    <Sidebar class="sidebar" />
    <Footer class="footer" />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
export default {
  name: 'App',
  components: { Sidebar, Footer, Header }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

  .grid-container {
    display: grid;
    min-height: 100vh;
    grid-template-columns: auto 25%;
    grid-template-rows: 100px auto 100px;
    grid-gap: 20px;
  }

  .header {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  .page-content {
    background-color: #523f8f;
  }

  .sidebar {
  }

  .footer {
    grid-column-start: 1;
    grid-column-end: 3;
  }
</style>
