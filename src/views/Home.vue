<template>
  <div>
    <Welcome />
    <Description />
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
export default {
  name: 'Home',
  components: { BlogCategories, CurrentProject, Services, Description, Welcome }
}
</script>

<style scoped>
</style>
