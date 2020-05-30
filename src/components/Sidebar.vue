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
import AboutMe from './AboutMe'
import Search from './Search'
import Quote from './Quote'
import Facebook from './Facebook'
import Instagram from './Instagram'
import Contact from './Contact'
import Newsletter from './Newsletter'
export default {
  components: { Newsletter, Instagram, Facebook, AboutMe, Search, Quote, Contact }
}
</script>

<style scoped>
</style>
