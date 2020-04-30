<template>
  <div>
    <div>
      <b>{{ $route.path }}</b>
    </div>
    <span>You may replace '*' with anything in URL, - the pattern will still match this route</span>

  </div>
</template>

<script>
export default {
  name: 'RouteWildcardExample'
}
</script>

<style scoped>
  /*Put CSS styles here*/
</style>
