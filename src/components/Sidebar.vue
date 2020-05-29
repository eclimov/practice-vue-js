<template>
  <div>
    <AboutMe />
    <Search />
    <Quote />
    <Facebook />
  </div>
</template>

<script>
import AboutMe from './AboutMe'
import Search from './Search'
import Quote from './Quote'
import Facebook from './Facebook'
export default {
  components: { Facebook, AboutMe, Search, Quote }
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
