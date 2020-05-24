<template>
  <div>Practice 4.3</div>
</template>

<script>
export default {
  name: 'Practice43',
  created () {
    this.sayHello('Tanya')
    this.generateRandomInt()
    this.generateRandomIntInRange(56, 72)

    let m = this.generateRandomInt()
    if (this.isEven(m)) {
      console.log(`${m} is even`)
    } else {
      console.log(`${m} is odd`)
    }

    let thebestDistrict = this.getTheBestDistrict()
    console.log(thebestDistrict)

    switch (thebestDistrict) {
      case 'Ciocana':
        this.sayHello('Sanda')
        break
      case 'Rascani':
        this.sayHello('Tanya')
        break
      default:
        console.log('Who the hell are you?')
    }
  },

  methods: {
    sayHello (name) {
      console.log(`Hello, ${name}!`)
    },

    generateRandomInt () {
      let n = Math.floor(Math.random() * Math.floor(20))
      console.log(`Random integer: ${n}`)
      return n
    },

    generateRandomIntInRange: function (min, max) {
      let n = Math.floor(Math.random() * (max - min) + min)
      console.log(`Random integer in range ${min} and ${max}: ${n}`)
      return n
    },

    isEven (value) {
      if (value % 2 === 0) {
        return true
      } else {
        return false
      }
    },

    getTheBestDistrict () {
      let districts = [
        'Ciocana',
        'Rascani',
        'Centru',
        'Buiucani',
        'Botanica'
      ]

      let myVar = districts.length
      return districts[this.generateRandomIntInRange(0, myVar)]
    }
  }
}
</script>

<style scoped>
</style>
