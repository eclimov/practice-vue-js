<template>
  <div>
    Practice 4-1
  </div>
</template>

<script>
export default {
  name: 'Practice41',
  created () {
    this.getDatetime()
    this.getPowFive(5)
    this.getSumAndDivide(36, 2)
    this.finalCalculations(1, 2, 3, 4)
  },
  methods: {
    getDatetime () {
      let currentDate = new Date()
      console.log(`${currentDate.getDate()}/${(currentDate.getMonth() + 1)}/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`)
    },

    getPowFive (number) {
      console.log(Math.pow(number, 5))
    },

    getSumAndDivide (one, two) {
      console.log((one + two) / two)
    },

    finalCalculations (one, two, three, four) {
      this.getPowFive(one)
      this.getSumAndDivide(two, three)
      console.log(Math.sqrt(four))
    }
  }
}
</script>

<style scoped>

</style>
