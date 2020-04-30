<template>
  <div>
    <div id="header">
      <b>One of '/eclimov' routes</b>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'EclimovView'
}
</script>

<style scoped>
  #header {
    margin-bottom: 15px;
  }
</style>
