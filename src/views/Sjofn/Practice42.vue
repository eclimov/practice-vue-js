<template>
  <div>
    Practice 4-2
  </div>
</template>

<script>
export default {
  name: 'Practice1',
  data () {
    return {
      genres: [
        'Horror', 'Detective', 'Adventure', 'Romance'
      ],
      disciplines: [
        'Chemistry', 'Mathematics', 'Literature', 'English'
      ],
      livingRoomDesign: {
        style: 'Minimalism',
        shape: 'Square',
        area: 20,
        mainColor: 'beige',
        accentColors: ['dark green', 'dark orange'],
        windows: 3,
        hasPanoramicView: true,
        isParquet: true,
        isFireplace: true,
        ceilingsMinHeight: 5
      },
      fictionCharacter: [
        {
          gender: 'male',
          age: 25,
          firstName: 'Martin',
          lastName: 'Corrigan',
          author: 'James Hadley Chase',
          country: 'United States',
          language: 'English',
          specialties: ['special agent', 'detective'],
          isGood: true,
          isSuccessful: true
        }
      ],
      z: '',
      a: '',
      b: '',
      m: '',
      n: '',
      l: '',
      p: '',
      min: '',
      max: ''
    }
  },

  created () {
    this.genres.push('Humour')
    this.disciplines.push('Drawing')
    console.log(this.genres.join(', ') + ', ' + this.disciplines.join(', '))
    this.fictionCharacter['discipline'] = 'physical education' // мне кажется, здесь что-то не так. Не нравится, как отображается в консоли(
    console.log(this.fictionCharacter)
    console.log(this.randomizePrice(100, 2000))
  },

  methods: {
    getDatetime () {
      console.log(new Date())
    },

    getPowFive (z) {
      console.log(Math.pow(z, 5))
    },

    getSumAndDivide (a, b) {
      console.log((a + b) / b)
    },

    finalCalculations (m, n, l, p) {
      this.getPowFive(m)
      this.getSumAndDivide(n, l)
      console.log(Math.sqrt(p))
    },

    randomizePrice (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
  }
}

</script>

<style scoped>

</style>
