<template>
  <div>
    <!--Show link to Google if isGoogle. Show link to Yandex otherwise-->

    <!--Enumerate Agile Club members here-->
  </div>
</template>

<script>
export default {
  name: 'Phantom',
  data () {
    return {
      isGoogle: true,
      agileClubMembers: [
        'Sanda',
        'Tanya',
        'Evghenii',
        'Eduard'
      ]
    }
  }
}
</script>

<style scoped>
  body {
    background: url('/public/Sjofn/assets/gothic_layout.jpg')
  }
  div {
    font-family: "Blackadder ITC",fantasy;
    font-size: 50px;
    color: #732222;
  }
</style>
