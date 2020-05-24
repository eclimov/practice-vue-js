<template>
  <div class="footer">
    <h2>IT-Sanda</h2>
    <h4>Contact information:</h4>
    <address style="text-align: left;">
      Created by <a href="mailto:itsanda@gmail.com">IT-Sanda</a>.<br>
      Visit our office at:<br><br>
    </address>
  </div>
</template>
<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
  .footer {
    display: block;
    height: auto;
    width: 100%;
    padding: 20px;
    margin-top: 20px;
    font-family: Laila, serif;
    font-style: normal;
    font-variant: normal;
    text-align: left;
    color: #000000;
    background: #af7ca0;
  }

  h2 {
    margin: 0;
    font-family: Laila, serif;
    font-size: 30px;
    font-variant: normal;
    font-weight: normal;
    text-align: left;
  }
  h4 {
    margin: 0;
    line-height: initial;
    font-family: Laila, serif;
    font-size: 20px;
    font-variant: normal;
    font-weight: normal;
    text-align: left;
  }

  h4:hover {
    margin: 0;
    line-height: initial;
    font-family: Laila, serif;
    font-size: 20px;
    font-weight: bold;
    text-align: left;
  }
</style>
