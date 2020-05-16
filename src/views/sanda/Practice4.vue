<template />

<script>
export default {
  name: 'Practice4',
  data() {
    return {}
    }

    methods:{
      currentDate()
      return new Date().toLocaleDateString()
    }
  },

  getPowFive(numb) {
    return Math.pow(numb, 5)
  },

 getSumAndDivide (a, b) {
    return (a + b) / b
  },

 finalCalculations (c, d, e, f) {
  return getPowFive(c)
  return getSumAndDivide(d, e)
  return Math.sqrt(f)
  },

 bads = prompt('Please gimme your money: ')
 price = Math.floor(Math.random() * 10 + 1)
alert(`You must buy ${bads} with following price: ${price} lei`)
}
</script>

<style scoped>
</style>
