<template>
  <div>
    <h2>{{ title }}</h2>
    <div
      v-for="contact in contacts"
      :key="contact"
    >
      {{ contact }}
    </div>
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
  }
}
</script>

<style>
  /**/
</style>
