<template>
  <div class="about">
    <h1>This is an about page</h1>

    <Contacts
      :title="'My Contacts'"
      :contacts="['contact1', 'contact2']"
    />
    <Gallery />
  </div>
</template>

<script>
import Contacts from '../components/Contacts'
import Gallery from '../components/Gallery'

export default {
  name: 'About',
  components: {
    Gallery,
    Contacts
  }
}
</script>

<style scoped>
  /**/
</style>
