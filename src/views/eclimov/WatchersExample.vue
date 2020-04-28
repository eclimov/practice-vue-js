<template>
  <div>
    <label for="search-text">Search: </label>
    <input
      id="search-text"
      v-model="textForSearching"
      type="text"
      placeholder="Start typing to search"
    >
    <div><b>Status:</b> {{ status }}</div>
  </div>
</template>

<script>
export default {
  name: 'WatchersExample',
  data () {
    return {
      textForSearching: '',
      status: 'Waiting for user input'
    }
  },
  watch: {
    textForSearching (newVal, oldVal) {
      console.log(`Old Value: ${oldVal}`)
      console.log(`New Value: ${newVal}`)
      console.log(`--------------------`)
      this.searchByText()
    }
  },
  methods: {
    searchByText () {
      this.status = 'Searching...'
      setTimeout(() => { // Using arrow function to allow accessing 'this' scope
        this.status = 'Search Completed!'
      }, 2000)
    }
  }
}
</script>

<style scoped>
  /*Add styles here*/
</style>
