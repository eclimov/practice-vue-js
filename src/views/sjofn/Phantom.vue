<template>
  <div>
    <h1 v-if="isGoogle">
      <a href="https://www.google.com/">link to Google</a>
    </h1>
    <h1 v-else>
      <a href="https://www.yandex.ru/">link to Yandex</a>
    </h1>

    <h1
      v-for="agileClubMember in agileClubMembers"
      :key="agileClubMember"
    >
      {{ agileClubMember }}
    </h1>
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
  h1 {
    font-family: Arial;
    font-size: 50px;
    color: black;
  }
</style>
