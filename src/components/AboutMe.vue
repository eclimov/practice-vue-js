<template>
  <div class="card-aboutme">
    <h1><b>About Me</b></h1>
    <div class="aboutmeimg">
      <img
        class="bordered-img-about-me"
        src="./assets/aboutme.png"
        alt="about-me"
        style="height:60%; width:60%"
      >
    </div>
    <p style="text-align: left">
      <b>Let me introduce myself. :)</b>
    </p>
    <p style="text-align: left">
      The interests are:
    </p>
    <ul style="text-align: left">
      <li>IT & Tech World</li>
      <li>Blogging</li>
      <li>Marketing</li>
      <li>Project Management</li>
      <li>Freelance</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AboutMe'
}
</script>

<style scoped>
  .card-aboutme {
    display: block;
    height: auto;
    width: auto;
    padding: 20px;
    margin: 20px;
    font-family: Laila, serif;
    font-size: 18px;
    font-style: normal;
    font-variant: normal;
    text-align: center;
    color: black;
    background-color: #c34397;
  }
</style>
