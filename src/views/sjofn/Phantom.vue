<template>
  <div>
    <hr>
    <!--Show link to Google if isGoogle. Show link to Yandex otherwise-->
    <a
      v-if="isGoogle"
      href="https://www.google.com/"
    >
      Link to Google
    </a>
    <a
      v-else
      href="http://yandex.com/"
    >
      Link to Yandex
    </a>

    <!--Enumerate Agile Club members here-->
    <ul>
      <li
        v-for="agileClubMember in agileClubMembers"
        :key="agileClubMember"
      >
        {{ agileClubMember }}
      </li>
    </ul>
    <hr>
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
