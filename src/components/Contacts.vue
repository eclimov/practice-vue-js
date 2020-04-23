<template>
  <div>
    <h2>{{ title }}</h2>
    <div
      v-for="contact in contacts"
      :key="contact"
    >
      {{ contact }}
    </div>
    <button @click="$emit('my-custom-event-subscribed')">
      Subscribe
    </button>
  </div>
</template>

<script>
export default {
  name: 'Contacts',
  props: {
    title: {
      type: String,
      required: true
    },
    contacts: {
      type: Array,
      required: true
    }
  },
  created () {
    let someValue = 'qwerty'
    this.$emit('my-custom-event-created', someValue)
  }
}
</script>

<style>
  /**/
</style>
