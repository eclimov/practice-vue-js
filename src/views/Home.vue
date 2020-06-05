<template>
  <div>
    <Welcome />
    <Description />
    <SlideShow />
    <Services />
    <CurrentProject />
    <BlogCategories />
  </div>
</template>

<script>

import Welcome from '../components/home/Welcome'
import Description from '../components/Description'
import Services from '../components/Service'
import CurrentProject from '../components/CurrentProject'
import BlogCategories from '../components/BlogCategories'
import SlideShow from '../components/SlideShow'
export default {
  name: 'Home',
  components: { SlideShow, BlogCategories, CurrentProject, Services, Description, Welcome }
}
</script>

<style scoped>
</style>
