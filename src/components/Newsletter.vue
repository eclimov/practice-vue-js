<template>
  <div class="card-email">
    <h1><b>Subscribe to Newsletter</b></h1>

    <form action="/action_page.php">
      <div class="container-email">
        <p>
          Find exactly what you need right now to reach your career goals and dreams by reading our blog posts
          and following the updates.
        </p>
      </div>

      <div class="container-email">
        <label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
          >
        </label>
        <label>
          <input
            type="text"
            placeholder="Email address"
            name="mail"
            required
          >
        </label>
        <label>
          <input
            type="checkbox"
            checked="checked"
            name="subscribe"
          > Monthly Newsletter
        </label>
      </div>
      <div class="container-email">
        <input
          type="submit"
          value="Subscribe"
        >
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Newsletter'
}
</script>

<style scoped>
  .card-email {
    display: block;
    height: auto;
    width: auto;
    horiz-align: center;
    vertical-align: center;
    padding: 20px;
    margin-top: 20px;
    font-family: Laila, serif;
    font-size: 20px;
    font-style: normal;
    font-variant: normal;
    text-align: center;
    color: #000000;
    background-color: #523f8f;
  }

  form {
    font-family: Laila, serif;
    font-style: normal;
  }

  .container-email {
    display: block;
    height: auto;
    width: auto;
    horiz-align: center;
    vertical-align: center;
    padding: 20px;
    background-color: #523f8f;
  }

  input[type=text], input[type=submit] {
    display: inline-block;
    width: 100%;
    padding: 12px;
    margin: 8px 0;
    border: 1px solid #523f8f;
    box-sizing: border-box;
    font-style: normal;
  }

  input[type=checkbox] {
    margin-top: 16px;
    font-style: normal;
  }

  input[type=submit] {
    border: none;
    font-family: Laila, serif;
    font-size: 20px;
    font-style: normal;
    text-align: center;
    color: #FFFFFF;
    background-color: #000000;
  }

  input[type=submit]:hover {
    opacity: 0.8;
    font-family: Laila, serif;
    font-size: 20px;
    font-style: normal;
    text-align: center;
    background-color: #555;
  }
</style>
