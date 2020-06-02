<template>
  <div class="grid-container">
    <Header class="header" />
    <router-view />
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
    padding: 20px;
    background-color: #f0d7e9;
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
  /* Style for all titles */
  h1 {
    margin: 0;
    font-family: Laila, serif;
    font-size: 34px;
    font-style: normal;
    font-variant: normal;
    font-weight: bold;
    text-align: center;
  }
  h2 {
    margin: 0;
    font-family: Laila, serif;
    font-size: 30px;
    font-variant: normal;
    font-weight: normal;
    text-align: left;
  }
  h3 {
    margin: 0;
    font-family: Laila, serif;
    font-size: 28px;
    font-variant: normal;
    font-weight: normal;
    text-align: left;
    color: #000000;
  }
  h4 {
    margin: 0;
    line-height: initial;
    font-family: Laila, serif;
    font-size: 20px;
    font-variant: normal;
    font-weight: normal;
    text-align: left;
  }
  h4:hover {
    margin: 0;
    line-height: initial;
    font-family: Laila, serif;
    font-size: 20px;
    font-weight: bold;
    text-align: left;
  }
  /* Remove of underline from links - sections of social networks */
  a {
    color: #FFFFFF;
  }
  a:link {
    font-style: normal;
    text-decoration: none;
    color: #FFFFFF;
  }

  a:hover {
    font-style: normal;
    color: #FFFFFF;
    background-color: #af7ca0;
  }
</style>
