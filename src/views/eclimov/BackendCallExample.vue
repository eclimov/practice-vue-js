<template>
  <div>
    <h1>Lyrics of a song</h1>

    <div>
      <label for="artist">Artist: </label>
      <input
        id="artist"
        v-model="artist"
        type="text"
        placeholder="artist"
        autofocus
      >
    </div>

    <div>
      <label for="song">Song: </label>
      <input
        id="song"
        v-model="song"
        type="text"
        placeholder="song"
      >
    </div>

    <button
      :disabled="isSearchButtonDisabled"
      @click="fetchLyrics"
    >
      Search
    </button>
    <hr>

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
  name: `BackendCallExample`,
  components: { Loader },
  data () {
    return {
      artist: '',
      song: '',
      isLoading: false,
      result: ''
    }
  },
  computed: {
    isSearchButtonDisabled () {
      return this.artist.length === 0 && this.song.length === 0
    }
  },
  methods: {
    async fetchLyrics () {
      this.isLoading = true
      try {
        const response = await axios.get(`https://api.lyrics.ovh/v1/${this.artist}/${this.song}`)
        this.result = response.data.lyrics
      } catch (e) {
        this.result = 'No results'
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>
