<template>

</template>

<script>
  name: 'Practice4.4',
    methods: {

      currentDate()
      {
        return new Date().toLocaleDateString();
      }
    }

     getPowFive(numb) {
        return new (Math.pow(numb, 5);
      }
    }

     getSumAndDivide(a, b) {
      return (a + b) / b);
    }

     finalCalculations(c, d, e, f) {
      return getPowFive(c);
      return getSumAndDivide(d, e);
      return (Math.sqrt(f);
    }

  data () {
    return {
      favoriteDisciplines =
        [
        'Anorganic Chemistry',
        'Organic Chemistry',
        'Chemistry Practical',
        'Informatics'
      ];
  }

    favoriteDisciplines.push('Physics');
    return favoriteDisciplines);
    return favoriteDisciplines.join(', ');

  return {
    fictionCharacter = [
      {
      "name": "Pantdorra",
      "age": 20,
      "sex": "Female",
      "isFictional": true,
      "languages": ["English", "Russian", "French", "German", "Spanish"],
      "isBookCharacter": true,
      "isMovieCharacter": false,
      "hasMagicalPowers": false,
      "hasWeapons": true,
      "phone-number": "67386566639304030505094595",
      "hatesPeople": true
    }
    ];

    fictionCharacter["isStudent"] = true;
    return fictionCharacter;
</script>

<style scoped>

</style>
