<template>
  <div class="instagram">
    <h1>
      <b>
        <a
          href="https://www.instagram.com/it_sanda/"
        >Instagram Grid :</a>
      </b>
    </h1>
    <img
      src="social_media/instagram.png"
      alt="instagram"
      style="width:100%"
    >
    <p>
      <b><a
        style="font-style: italic"
        href="https://www.instagram.com/it_sanda/"
        target="_blank"
      >
        Check Instagram Page
      </a></b>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Instagram'
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
    color: #000000;
  }
  a {
    color: #000000;
  }
  a:link {
    font-style: normal;
    text-decoration: none;
    color: #000000;
  }

  a:hover {
    font-style: normal;
    color: #000000;
    background-color: #af7ca0;
  }
  .instagram {
    display: block;
    height: auto;
    width: auto;
    padding: 20px;
    vertical-align: center;
    horiz-align: center;
    font-family: Laila, serif;
    font-size: 20px;
    font-style: normal;
    font-variant: small-caps;
    text-align: center;
    color: #000000;
    background-color: #c34397;
  }

</style>
