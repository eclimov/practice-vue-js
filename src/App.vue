<template>
  <div class="grid-container">
    <Header class="header">
      1<Header />
      <div class="page-content">
        2<div />
        <div class="sidebar">
          3<div />
          <div class="footer">
            4<Footer />
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: { Header, Footer }
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
    min-height: 100%;
    grid-template-columns: auto 25%;
    grid-template-rows: 100px auto 100px;
    grid-gap: 20px;
  }

  .header {
    grid-column-start: 1;
    grid-column-end: 3;
    background-color: #af7ca0;
  }

  .page-content {
    background-color: #523f8f;
  }

  .sidebar {
    background-color: #c34397;
  }

  .footer {
    background-color: #af7ca0;
  }
</style>
