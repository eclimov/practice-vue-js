<template>
  <div>
    <div>
      Homework 4
    </div>
    <br>
    <div>
      Hi visitor! First of all please open the console. <br>
      Now <button type="button">
        click
      </button> to see the data of all flowers from previous homework as combination of data types (array, object, etc).
    </div>
    <hr>
    <div>
      Enter a <input
        v-model="bool"
        placeholder="boolean argument"
      > to <button @click="negate(bool)">
        negate
      </button>
    </div>
    <hr>
    <div>
      Enter an <input
        id="adjective"
        v-model="adjective"
        placeholder="adjective"
      > & <input
        id="characterName"
        v-model="characterName"
        placeholder="character name"
      > to <button @click="printTitle(adjective, characterName)">
        see
      </button> how a book could be named.
    </div>
    <hr>
    <div>
      Enter <input
        v-model="userName"
        placeholder="name"
      >,
      <input
        v-model="age"
        placeholder="age"
      >,
      <input
        v-model="gender"
        placeholder="gender"
      >,
      <input
        v-model="eyeColor"
        placeholder="eyeColor"
      >,
      <input
        v-model="hobbies"
        placeholder="hobbies"
      > to <button @click="buildUserModel(userName, age, gender, eyeColor, hobbies)">
        build
      </button> a User Model.
    </div>
    <hr>
    <div>
      Enter 2 <input
        v-model="number1"
        placeholder="numeric"
      > <input
        v-model="number2"
        placeholder="values"
      > & <button @click="compare(number1, number2)">
        compare
      </button> them.
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'Homework4',
  data () {
    return {
      flowers: [
        {
          'nr': 1,
          'name': 'Opium poppy',
          'image': 'basicpoppy.jpg',
          'description': 'Papaver somniferum, commonly known as the opium poppy or breadseed poppy, is a species of flowering plant in the family Papaveraceae. It is the species of plant from which opium and poppy seeds are derived and is a valuable ornamental plant, grown in gardens. Its native range is probably the eastern Mediterranean, but is now obscured by ancient introductions and cultivation, being naturalized across much of Europe and Asia.'
        },
        {
          'nr': 2,
          'name': 'Deadly nightshade',
          'image': 'beladonna.jpg',
          'description': 'Atropa belladonna, commonly known as belladonna or deadly nightshade, is a perennial herbaceous plant in the nightshade family Solanaceae, which includes tomatoes, potatoes, and eggplant (aubergine). It is native to Europe, North Africa, and Western Asia. Its distribution extends from Great Britain in the west to western Ukraine and the Iranian province of Gilan in the east. It is also naturalised or introduced in some parts of Canada and the United States. The foliage and berries are extremely toxic when ingested, containing tropane alkaloids. These toxins include atropine, scopolamine and hyoscyamine, which cause delirium and hallucinations, and are also used as pharmaceutical anticholinergics. These tropane alkaloids appear to be common in the family Solanaceae, as they are also present in plants of the genera Brugmansia, Datura and Hyoscyamus, of the same family but in different subfamilies and tribes than the nightshade. Atropa belladonna has unpredictable effects. The antidote for belladonna poisoning is physostigmine or pilocarpine, the same as for atropine'
        },
        {
          'nr': 3,
          'name': 'Lily of the valley',
          'image': 'lilyofthevalley.jpg',
          'description': 'Convallaria majalis /ˌkɒnvəˈleɪriə məˈdʒeɪlɪs/), sometimes written lily-of-the-valley, is a highly poisonous woodland flowering plant with sweetly scented, pendent, bell-shaped white flowers borne in sprays in spring. It is native throughout the cool temperate Northern Hemisphere in Asia and Europe. It is possibly the only species in the genus Convallaria in the asparagus family. Other names include May bells, Our Lady\'s tears, and Mary\'s tears. Its French name, muguet, sometimes appears in the names of perfumes imitating the flower\'s scent. In pre-modern England, the plant was known as glovewort (as it was a wort used to create a salve for sore hands), or Apollinaris (according to a legend that it was discovered by Apollo)'
        },
        {
          'nr': 4,
          'name': 'Sweet pea',
          'image': 'sweetpea.jpg',
          'description': 'Lathyrus odoratus is a flowering plant in the genus Lathyrus in the family Fabaceae (legumes), native to Sicily, Cyprus, southern Italy and the Aegean Islands. It is an annual climbing plant, growing to a height of 1–2 metres (3 ft 3 in–6 ft 7 in), where suitable support is available. The leaves are pinnate with two leaflets and a terminal tendril, which twines around supporting plants and structures, helping the sweet pea to climb. In the wild plant the flowers are purple, 2–3.5 centimetres (0.79–1.38 in) broad; they are larger and very variable in color in the many cultivars.'
        },
        {
          'nr': 5,
          'name': 'Crownvetch',
          'image': 'crownvetch.jpg',
          'description': 'Securigera varia (synonym Coronilla varia), commonly known as crownvetch[2] or purple crown vetch, is a low-growing legume vine. It is native to Africa, Asia and Europe and is commonly used throughout the United States and Canada for erosion control, roadside planting and soil rehabilitation. It has become an invasive species in many states of the US. Crownvetch grows 1 to 2 feet tall and bears small clusters of 1/2-inch pink and white flowers from early summer to late fall. The variety Penngift produces mounds of pink flowers. Crownvetch is a tough, aggressive spreading plant that will crowd out its neighbors in a show garden but is well suited to a sunny bank, where it will grow for decades with little to no fertilizing, mowing, or weeding since the thick foliage prevents weeds from growing amongst it. Its deep, tenacious, complex root system  and thick, fern-like leaves provide excellent erosion control where it is used as a ground cover. However, this legume has a very long germination period of about 6 months and does not create full coverage until two or three years later. Crownvetch is toxic to horses and other non-ruminants because of the presence of nitroglycosides. If consumed in large amounts, it can cause slow growth, paralysis, or even death. However, this is not true for ruminant animals such as cattle, goats, and sheep. These aliphatic nitro compounds are degraded in ruminant digestion and do not affect the animals.'
        }
      ],
      bool: '',
      adjective: '',
      characterName: '',
      userName: '',
      age: '',
      gender: '',
      eyeColor: '',
      hobbies: '',
      number1: '',
      number2: ''
    }
  },
  methods: {
    negate (bool) {
      console.log(!(bool === 'true'))
    },

    printTitle (adjective, characterName) {
      console.log(`${adjective} adventures of ${characterName}`)
    },

    buildUserModel (userName, age, gender, eyeColor, hobbies) {
      let user = {
        'userName': userName,
        'age': age,
        'gender': gender,
        'eyeColor': eyeColor,
        'hobbies': hobbies
      }
      console.log(user)
      return user
    },

    compare (a, b) {
      if (a < b) {
        console.log(`${a} < ${b}`)
      } else if (a === b) {
        console.log(`${a} = ${b}`)
      } else console.log(`${a} > ${b}`)
    }
  }
}
</script>

<style scoped>

</style>
