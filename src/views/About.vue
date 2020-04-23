<template>
  <div class="about">
    <h1>This is an about page</h1>

    <Contacts
      :title="'My Contacts'"
      :contacts="['contact1', 'contact2']"
      @my-custom-event-created="myCustomEventHandler1"
      @my-custom-event-subscribed="myCustomEventHandler2"
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
  },
  methods: {
    myCustomEventHandler1 (val) {
      console.log('my-custom-event-created handled with value', val)
    },
    myCustomEventHandler2 () {
      console.log('my-custom-event-subscribed handled without any value')
    }
  }
}
</script>

<style scoped>
  /**/
</style>
