<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        Home
      </router-link> |
      <router-link to="/about">
        About
      </router-link> |
      <router-link :to="{ name: 'smartphone-price-quantity-example' }">
        Example
      </router-link> |
      <router-link :to="{ name: 'event-handling-example' }">
        LinksEventsExample
      </router-link> |
      <router-link :to="{ name: 'phantom' }">
        Phantom
      </router-link> /
      <router-link :to="{ name: 'sanda-example1' }">
        Menu-Sanda
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #232ab9;
    }
  }
}
</style>
