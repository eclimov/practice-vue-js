<template>
  <div>
    <h1>Dogs are the BEST!</h1>

    <label for="dog">Dog: </label>
    <input
      id="dog"
      v-model="dogs"
      type="image"
      placeholder="dog"
      autofocus
    >

    <button
      :disabled="isSearchButtonDisabled"
      @click="search"
    >
      Search
    </button>

    <div>
      id="results"
      >
      <Loader v-if="isLoading" />
      <pre
        v-else
        {{
        result
        }}
        <pre
      />
    </div>
  </div>
  <template />

  <script>
    import axios from 'axios'
    import Pacman from "../../components/Pacman";
    export default {
    name: 'Dogs',
      components: {Pacman},
    data() {
    return {
    breed: '',
    isLoading: false,
      result: ''
    }
    },
    computed: {
    isSearchButtonDisabled () {
    return isDisabled = this.breed === ''
    }
    },
    methods: {
    async search() {
    this.isLoading = true
    try {
    const response = await axios.get(`https://dog.ceo/dog-api/documentation/$(this.breed)`)
    this.breed = response.data.breed
    } catch (e) {
      this.result = 'No results'
    } finally {
    this.isLoading = false
    }
    }
    }
    }
  </script>
