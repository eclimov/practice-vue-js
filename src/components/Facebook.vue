<template>
  <div class="facebook">
    <h1><b>
      <a
        v-bind:
        href="https://www.facebook.com/sandaitsanda/">Facebook Page :</a>
    </b>
    </h1>
    <img
      src="social_media/facebook.png"
      alt="facebook"
      style="width:100%"
    >
    <p>
      <b><a
        style="font-style: italic"
        v-bind:
        href="https://www.facebook.com/sandaitsanda/"
        target="_blank"
      >
        Facebook Page
      </a></b>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Facebook'
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
    color: #FFFFFF;
  }
  /* Remove of underline from links - sections of social networks */
  a:link {
    font-style: normal;
    text-decoration: none;
  }

  a:hover {
    font-style: normal;
    background-color: #af7ca0;
  }
  .facebook {
    display: block;
    height: auto;
    width: auto;
    padding: 20px;
    margin-top: 20px;
    vertical-align: center;
    horiz-align: center;
    font-family: Laila, serif;
    font-size: 20px;
    font-style: normal;
    font-variant: small-caps;
    text-align: center;
    color: #FFFFFF;
    background-color: #071268;
  }
</style>
