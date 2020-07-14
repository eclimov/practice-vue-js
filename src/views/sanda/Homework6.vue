<template>
  <div>
    <h1>Dogs are the BEST!</h1>

    <img
      v-if="randomImageSrc"
      :src="randomImageSrc"
    >

    <hr>

    <input
      v-model="breed"
      placeholder="Breed"
      type="text"
    >

    <button
      :disabled="isSearchButtonDisabled"
      @click="search()"
    >
      Search
    </button>

    <div
      v-for="image in images"
      :key="image"
    >
      <img
        :src="image"
      >
    </div>

    <Loader v-if="isLoading" />
    <pre v-else>
      {{ result }}
    </pre>
  </div>
</template>

<script>
import axios from 'axios'
import Loader from '../../components/Loader'
export default {
  name: 'Homework6',
  components: {Loader},
  data () {
    return {
      breed: '',
      images: [],
      isLoading: false,
      randomImageSrc: null
    }
  },
  computed: {
    isSearchButtonDisabled () {
      return this.isLoading || this.breed.trim() === ''
    }
  },
  created () {
    this.fetchRandomImage()
  },
  methods: {
    async search () {
      this.isLoading = true
      try {
        const response = await axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://dog.ceo/api/breed/${this.breed}/images/`)
        this.images = response.data.message
      } catch (e) {
        this.result = 'No results'
      } finally {
        this.isLoading = false
      }
    },
    async fetchRandomImage () {
      const response = await axios.get(`https://dog.ceo/api/breeds/image/random`)
      // console.log(response.data.message)
      this.randomImageSrc = response.data.message
    }
  }
}
</script>
