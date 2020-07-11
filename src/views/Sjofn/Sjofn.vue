<template>
  <div id="menu">
    <div id="nav">
      <router-link :to="{ name: 'sjofn-hw1' }">
        Homework 1
      </router-link> <hr>
      <router-link :to="{ name: 'sjofn-hw3' }">
        Homework 3
      </router-link> <hr>
      <router-link :to="{ name: 'sjofn-hw4' }">
        Homework 4
      </router-link> <hr>
      <router-link :to="{ name: 'sjofn-pr41' }">
        Practice 4-1
      </router-link> <hr>
      <router-link :to="{ name: 'sjofn-pr42' }">
        Practice 4-2
      </router-link> <hr>
      <router-link :to="{ name: 'sjofn-pr43' }">
        Practice 4-3
      </router-link> <hr>
      <router-link :to="{ name: 'sjofn-hw6' }">
        Homework 6
      </router-link> <hr>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Sjofn'
}
</script>

<style scoped>

</style>
