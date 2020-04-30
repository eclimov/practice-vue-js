<template>
  <div>
    Parameter from URL: {{ userId }}
  </div>
</template>

<script>
export default {
  name: 'RouteParamExample',
  props: {
    userId: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
  /*Put CSS styles here*/
</style>
