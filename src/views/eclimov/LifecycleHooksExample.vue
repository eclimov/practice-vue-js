<template>
  <div>
    <b>Open the console and check lifecycle hooks sequence</b><br>
    <button @click="someValue++">
      Increment {{ someValue }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'LifecycleHooksExample',
  data () {
    return { someValue: 0 }
  },
  beforeCreate () {
    console.log('beforeCreate')
  },
  created () {
    console.log('created')
  },
  beforeMount () {
    console.log('beforeMount')
  },
  mounted () {
    console.log('mounted')
  },
  beforeDestroy () {
    console.log('beforeDestroy')
  },
  destroyed () {
    console.log('destroyed')
  },
  beforeUpdate () {
    console.log('beforeUpdate')
  },
  updated () {
    console.log('updated')
  }
}
</script>

<style scoped>
  /*Put CSS styles here*/
</style>
