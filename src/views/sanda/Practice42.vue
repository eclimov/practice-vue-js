<template>
  <div>Practice 4.2</div>
</template>

<script>
export default {
  name: 'Practice42',
  data () {
    return {
      favoriteDisciplines: [
        'Anorganic Chemistry',
        'Organic Chemistry',
        'Chemistry Practical',
        'Informatics'
      ],

      fictionCharacter: {
        'name': 'Pantdorra',
        'age': 20,
        'sex': 'Female',
        'isFictional': true,
        'languages': ['English', 'Russian', 'French', 'German', 'Spanish'],
        'isBookCharacter': true,
        'isMovieCharacter': false,
        'hasMagicalPowers': false,
        'hasWeapons': true,
        'phone-number': '67386566639304030505094595',
        'hatesPeople': true
      }
    }
  },
  created () {
    this.favoriteDisciplines.push('Physics')
    console.log(this.favoriteDisciplines)

    this.fictionCharacter['isStudent'] = true
    console.log(this.fictionCharacter)
  }
}
</script>

<style scoped>
</style>
