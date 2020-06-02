<template>
  <div>
    <ServiceCatalogue />
    <Freebies />
  </div>
</template>

<script>
import ServiceCatalogue from '../components/service/ServiceCatalogue'
import Freebies from '../components/service/Freebies'
export default {
  name: 'Service',
  components: { Freebies, ServiceCatalogue }
}
</script>

<style scoped>

</style>
