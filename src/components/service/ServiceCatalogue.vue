<template>
  <div class="service-catalogue">
    <div>Services, provided by IT-Sanda:</div>
    <div>
      <ul>
        <li><a href="#qualityassurance">Quality Assurance & Testing of web products</a></li>
        <li><a href="#marketing">Content Marketing & Content Management</a></li>
        <li><a href="#projectmanagement">Translations</a></li>
        <li><a href="#technews">Project Management</a></li>
        <li><a href="#technews">Other</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceCatalogue'
}
</script>

<style scoped>
  .service-catalogue {
    display: grid;
    height: auto;
    width: 50%;
    justify-content: normal;
    grid-template-columns: auto auto;
    font-family: Laila, serif;
    font-variant: normal;
    font-size: 20px;
    color: #000000;
    background-color: #c34397;
  }
</style>
