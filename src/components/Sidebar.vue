<template>
  <div>
    <AboutMe />
    <Search />
    <Quote />
    <Facebook />
    <Instagram />
    <Contact />
    <Newsletter />
  </div>
</template>

<script>
import AboutMe from './sidebar/AboutMe'
import Search from './sidebar/Search'
import Quote from './sidebar/Quote'
import Facebook from './sidebar/Facebook'
import Instagram from './sidebar/Instagram'
import Contact from './sidebar/Contact'
import Newsletter from './sidebar/Newsletter'
export default {
  components: { Newsletter, Instagram, Facebook, AboutMe, Search, Quote, Contact }
}
</script>

<style scoped>
</style>
