<template>
  <div class="card-aboutme">
    <h1><b>About Me</b></h1>
    <div class="aboutmeimg">
      <img
        class="bordered-img-about-me"
        src="@/assets/aboutme.png"
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
  h1 {
    font-family: Laila, serif;
    font-size: 34px;
    font-style: normal;
    font-variant: normal;
    font-weight: normal;
    text-align: center;
  }
  .card-aboutme {
    display: block;
    height: auto;
    width: auto;
    padding: 20px;
    font-family: Laila, serif;
    font-size: 18px;
    font-style: normal;
    font-variant: normal;
    text-align: center;
    color: #000000;
    background-color: #c34397;
  }

  /* Section for image of author */
  .bordered-img-about-me {
    width: 100%;
    padding: 5px;
    border: 5px solid #af7ca0;
    background-color: #071268;
  }
</style>
