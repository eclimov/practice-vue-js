<template>
  <div>Homework 4</div>
</template>

<script>
export default {
  name: 'Homework4',
  data () {
    return {
      flowers:
        [
          {
            name: 'Castor oil plant Palm of Christ',
            number_order: 1,
            description: 'Castor seed is the source of castor oil, which has a wide variety of uses. The seeds contain between 40% and 60% oil that is rich in triglycerides, mainly ricinolein',
            image: 'assets/castor.jfif'
          },
          {
            name: 'The poison queen',
            number_order: 2,
            description: 'Charles Darwin performed much of the early research into Drosera, engaging in a long series of experiments with Drosera rotundifolia which were the first to confirm carnivory.',
            image: 'assets/drosera.jpg'
          },
          {
            name: 'Sweetly scented killer',
            number_order: 3,
            description: 'The dark green leaves of Aconitum species lack stipules. They are palmate or deeply palmately lobed with five to seven segments',
            image: 'assets/poisonqueen.jfif'
          },
          {
            name: 'Voodoo lily',
            number_order: 4,
            description: 'The species anti-diabetic qualities yielded the name Sakayau and Kashe Zaki meaning "sweet killer" or "destroying sweetness" in the Hausa language used in Northern Nigeria',
            image: 'assets/sweetlykiller.jfif'
          },
          {
            name: 'Drosera rotundifolia',
            number_order: 5,
            description: 'Charles Darwin performed much of the early research into Drosera, engaging in a long series of experiments with Drosera rotundifolia',
            image: 'assets/voodoolilly.jpg'
          }
        ]
    }
  },

  methods: {
    negate (isStayingIsolatedDuringQuarantine) {
      return !isStayingIsolatedDuringQuarantine
    },
    printTitle (adjective, characterName) {
      console.log(`${adjective} adventures of ${characterName}`)
    },
    buildUserModel (name, age, gender, eyeColor, hobbies) {
      return {
        'name': name,
        'age': age,
        'gender': gender,
        'eyeColor': eyeColor,
        'hobbies': hobbies
      }
    },
    compare (a, b) {
      if (a > b) {
        console.log(`${a} > ${b}`)
      }
      if (a < b) {
        console.log(`${a} < ${b}`)
      }

      if (a === b) {
        console.log(`${a} = ${b}`)
      }
    },
    compare1 (a, b) {
      if (a < b) {
        console.log(`${a} < ${b}`)
      } else if (a === b) {
        console.log(`${a} = ${b}`)
      } else {
        console.log(`${a} > ${b}`)
      }
    }
  }
}
</script>

<style scoped>

</style>
