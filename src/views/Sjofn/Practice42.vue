<template>
  <div>
    Practice 4-2
  </div>
</template>

<script>
export default {
  name: 'Practice42',
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
      fictionCharacter: {
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
    }
  },

  created () {
    this.genres.push('Humour')
    this.disciplines.push('Drawing')
    console.log(`${this.genres.join(', ')}, ${this.disciplines.join(', ')}`)
    this.fictionCharacter['discipline'] = 'physical education'
    console.log(this.fictionCharacter)
  }
}
</script>

<style scoped>

</style>
