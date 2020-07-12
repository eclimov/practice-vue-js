<template>
  <div>
    <h1>Homework 6</h1>

    <div>
      <label for="ingredients">Ingredients: </label>
      <input
        id="ingredients"
        v-model="ingredients"
        type="text"
        placeholder="Ingredients"
        autofocus
      >
    </div>

    <div>
      <label for="dish">Dish: </label>
      <input
        id="dish"
        v-model="dish"
        type="text"
        placeholder="Dish"
      >
    </div>

    <button
      :disabled="isSearchButtonDisabled"
<!--      :disabled="isLoading"-->
      @click="fetchRecipe"
    >
      Search
    </button>
    <hr>
    <table
      v-if="results.length"
      style="width:100%"
    >
      <tr>
        <th>
          Title
        </th>
        <th>
          Link
        </th>
        <th>
          Ingredients
        </th>
        <th>
          Image
        </th>
      </tr>
      <tr
        v-for="result in results"
        :key="result.href"
      >
        <td>
          {{ result.title }}
        </td>
        <td>
          {{ result.href }}
        </td>
        <td>
          {{ result.ingredients }}
        </td>
        <td>
          <img
            v-if="result.thumbnail.length"
            :src="result.thumbnail"
          >
        </td>
      </tr>
    </table>
    <div
      id="results"
    >
      <Loader v-if="isLoading" />
      <pre v-else>{{ result }}</pre>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Loader from '../../components/Loader'
export default {
  name: `Homework6`,
  components: { Loader },
  data () {
    return {
      ingredients: '',
      dish: '',
      isLoading: false,
      results: []
    }
  },
  computed: {
    isSearchButtonDisabled () {
      return this.ingredients.length === 0 && this.dish.length === 0
    }
  },
  methods: {
    async fetchRecipe () {
      this.isLoading = true
      try {
        const response = await axios.get(`${'https://cors-anywhere.herokuapp.com/'}http://www.recipepuppy.com/api/?i=${this.ingredients}&q=${this.dish}`)
        this.results = response.data.results
      } catch (e) {
        alert('Unknown error')
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>

<style scoped>

</style>
