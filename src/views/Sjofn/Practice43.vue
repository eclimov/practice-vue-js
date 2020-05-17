<template>
  <div>
    Practice 4-3
  </div>
</template>

<script>
export default {
  name: 'Practice3',
  data () {
    return {
      name: '',
      min: '',
      max: '',
      a: ''
    }
  },
  created () {
    this.sayHello('Eduard')
    this.generateRandomInt()
    this.generateRandomIntInRange(1, 1000) // эта функция содержит загадочную ошибку( сама выбирает range, а если ввести значения в кавычках, то напишет правильно, а посчитает неверно
    this.isEven(48)
    this.getTheBestDistrict()

    let randomNum = this.generateRandomInt()
    console.log(`${randomNum} is ${this.isEven(randomNum) ? 'Even' : 'Odd'}`)

    switch (this.getTheBestDistrict()) {
      case 'Ciocana':
        this.sayHello('Sanda')
        break
      case 'Rascani':
        this.sayHello('Tanya')
        break
      default:
        console.log('Who are you?')
    }
  },
  methods: {
    sayHello (name) {
      console.log(`Hello ${name}!`)
    },

    generateRandomInt () {
      let randomNum = Math.floor(Math.random() * 10)
      console.log(`Random integer: ${randomNum}`)
      return randomNum
    },

    generateRandomIntInRange (min, max) {
      let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
      console.log(`Random integer in range ${min} and ${max}: ${randomNum}`)
      return randomNum
    },

    isEven (a) {
      return a % 2 === 0
    },

    getTheBestDistrict () {
      let districts = [
        'Ciocana',
        'Rascani',
        'Botanica'
      ]
      console.log(districts[this.generateRandomIntInRange(0, districts.length - 1)])
    }
  }
}
</script>

<style scoped>

</style>
