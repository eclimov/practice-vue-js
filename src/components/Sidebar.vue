<template>
  <div>
    <AboutMe />
    <Search />
  </div>
</template>

<script>
import AboutMe from './AboutMe'
import Search from './Search'
export default {
  components: { Search, AboutMe }
}
</script>

<style scoped>
  .sidebar {
    float: left;
    padding-left: 20px;
    font-family: Laila, serif;
    font-size: 22px;
    background-color: #f0d7e9;
  }
</style>
