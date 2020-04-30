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
      <router-link :to="{ name: 'watchers-example' }">
        WatchersExample
      </router-link> |
      <router-link :to="{ name: 'phantom' }">
        Phantom
      </router-link> /
      <router-link :to="{ name: 'sanda-example1' }">
        Menu-Sanda
      </router-link>
    </div>

    <hr>
    <transition
      name="fade"
      mode="out-in"
      @beforeLeave="beforeLeave"
      @enter="enter"
      @afterEnter="afterEnter"
    >
      <router-view :style="{ 'background-color': bgColor }" />
    </transition>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      possibleBgColors: [
        '#BF0449',
        '#89C2D9',
        '#04D960',
        '#D97218',
        '#BF4D0B',
        '#04ADBF',
        '#04BFBF',
        '#025959',
        '#A0A603',
        '#F2E0C9'
      ],
      bgColor: null,
      prevHeight: 0
    }
  },
  watch: {
    '$route' (to, from) {
      document.title = to.meta.title || 'Default page title'
    }
  },
  created () {
    this.setBgColor()
  },
  methods: {
    setBgColor () {
      this.bgColor = this.possibleBgColors[Math.floor(Math.random() * this.possibleBgColors.length)]
    },
    beforeLeave (element) {
      this.prevHeight = getComputedStyle(element).height
    },
    enter (element) {
      this.setBgColor()

      const { height } = getComputedStyle(element)

      element.style.height = this.prevHeight

      setTimeout(() => {
        element.style.height = height
      })
    },
    afterEnter (element) {
      element.style.height = 'auto'
    }
  }
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

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
