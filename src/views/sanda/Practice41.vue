<template>
  <div>Practice 4.1</div>
</template>

<script>
export default {
  name: 'Practice41',
  data () {
    return {}
  },

  methods: {
    currentDate () {
      return new Date().toLocaleDateString()
    },

    getPowFive (numb) {
      return Math.pow(numb, 5)
    },

    getSumAndDivide (a, b) {
      return (a + b) / b
    },

    finalCalculations (c, d, e, f) {
      this.getPowFive(c)
      this.getSumAndDivide(d, e)
      return Math.sqrt(f)
    }
  }
}
</script>

<style scoped>
</style>
