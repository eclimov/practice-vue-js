<template>
  <div class="card-welcome">
    <h1>Welcome!</h1>
    <div class="row-welcome">
      <div class="column-welcome column-welcome-left">
        <p style="text-align: right; margin: 0">
          We believe in high standards of personal behavior.
          We believe in high standards of personal behavior.
          We believe in high standards of personal behavior.
          We believe in high standards of personal behavior.
          We believe in high standards of personal behavior.
          We believe in high standards of personal behavior.
          We believe in high standards of personal behavior.
        </p>
      </div>
      <div
        class="column-welcome column-welcome-right"
      >
        <img
          class="bordered-img-welcome"
          src="@/assets/welcome.png"
          alt="welcome"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Introduction'
}
</script>

<style scoped>
  .card-welcome {
    display: block;
    height: auto;
    width: auto;
    padding: 20px;
    horiz-align: auto;
    vertical-align: auto;
    justify-content: center;
    line-height: normal;
    font-family: Laila, serif;
    font-size: 20px;
    font-style: oblique;
    font-variant: normal;
    font-weight: bold;
    text-align: center;
    color: #000000;
    background-color: #523f8f;
  }

  .row-welcome {
    display: flex;
    display: -ms-flexbox; /* IE 10 */
    width: 100%;
    padding: 0 20px;
    line-height: normal;
    color: #000000;
  }

  .column-welcome {
    flex: 50%;
    -ms-flex: 50%; /* IE 10 */
    height: auto;
    width: 100%;
    line-height: normal;
    text-align: left;
    color: #000000;
  }

  .column-welcome-left {
    margin-right: 20px;
  }

  .column-welcome-right {
    margin-left: 20px;
  }

  /* Border for welcome image*/
  .bordered-img-welcome {
    vertical-align: middle;
    height: auto;
    width: 85%;
    padding: 5px;
    border: 5px solid #021a40;
    background-color: #af7ca0;
  }
</style>
