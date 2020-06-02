<template>
  <div class="card-service">
    <h1><b>Are you interested in...?</b></h1>
    <br>
    <div class="row-service">
      <div class="column-service">
        <div class="card">
          <img
            class="bordered-img-service"
            src="@/assets/veronica.jpg"
            alt="qa"
            style="width: 100%"
          >
          <div class="container-service">
            <h2 style="text-align: center">
              <b>QA & Testing</b>
            </h2>
            <ul>
              <li><h4>Functional Testing</h4></li>
              <li><h4>Regression Testing</h4></li>
              <li><h4>Test Case Plan & Design</h4></li>
              <li><h4>Testing for Web & Mobile</h4></li>
            </ul>
            <p>
              <button class="button">
                E-mail
              </button>
            </p>
          </div>
        </div>
      </div>
      <div class="column-service">
        <div class="card">
          <img
            class="bordered-img-service"
            src="@/assets/veronica.jpg"
            alt="translations"
            style="width:100%"
          >
          <div class="container-service">
            <h2 style="text-align: center">
              <b>Content Marketing</b>
            </h2>
            <ul>
              <li><h4>Blog Writing</h4></li>
              <li><h4>Content Writing</h4></li>
              <li><h4>Technical & Business Writing</h4></li>
              <li><h4>Copywriting</h4></li>
            </ul>
            <p>
              <button class="button">
                E-mail
              </button>
            </p>
          </div>
        </div>
      </div>
      <div class="column-service">
        <div class="card">
          <img
            class="bordered-img-service"
            src="@/assets/veronica.jpg"
            alt="translations"
            style="width:100%"
          >
          <div class="container-service">
            <h2 style="text-align: center">
              <b>Translations</b>
            </h2>
            <ul>
              <li><h4>Romanian</h4></li>
              <li><h4>English</h4></li>
              <li><h4>French</h4></li>
              <li><h4>Russian</h4></li>
            </ul>
            <p>
              <button class="button">
                E-mail
              </button>
            </p>
          </div>
        </div>
      </div>
      <div class="column-service">
        <div class="card">
          <img
            class="bordered-img-service"
            src="@/assets/veronica.jpg"
            alt="content-marketing"
            style="width: 100%"
          >
          <div class="container-service">
            <h2 style="text-align: center">
              <b>Project Management</b>
            </h2>
            <ul>
              <li><h4>Business Analysis</h4></li>
              <li><h4>Internet Research</h4></li>
              <li><h4>Project Planning</h4></li>
              <li><h4>Report Writing</h4></li>
            </ul>
            <p>
              <button class="button">
                E-mail
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Services'
}
</script>

<style scoped>
  .card-service {
    height: auto;
    width: auto;
    padding-top: 10px;
    padding-bottom: 20px;
    margin-top: 20px;
    font-family: Laila, serif;
    font-size: 20px;
    font-style: normal;
    font-variant: normal;
    font-weight: normal;
    text-align: center;
    background-color: #523f8f;
  }

  /* Column of each card - including image and text */
  .column-service {
    float: left;
    width: 20%;
    padding: 30px;
    font-family: Laila, serif;
    font-size: 20px;
    font-style: normal;
    font-variant: normal;
    font-weight: normal;
    color: #000000;
    background-color: #523f8fc;
  }

  @media screen and (max-width: 650px) {
    .column-service {
      width: 100%;
      display: block;
    }
  }

  /* Container with text */
  .container-service {
    height: auto;
    width: 100%;
    padding: 0 10px;
    font-family: Laila, serif;
    font-size: 20px;
    font-style: normal;
    font-variant: normal;
    font-weight: normal;
    color: #000000;
    background-color: #af7ca0;
  }

  .container-service::after, .row-service::after {
    display: table;
    content: "";
    clear: both;
    font-family: Laila, serif;
    font-size: 20px;
    font-style: normal;
    font-variant: normal;
    font-weight: normal;
    color: #000000;
    background-color: #af7ca0;
  }
  /* Color change while hover for container with text */
  .container-service:hover {
    width: 100%;
    font-family: Laila, serif;
    font-size: 20px;
    font-style: normal;
    font-variant: normal;
    font-weight: bold;
    color: #FFFFFF;
    background-color: #071268;
  }
  /* Card alignment */
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    height: auto;
    padding: auto;
    font-family: Laila, serif;
    font-size: 20px;
    font-style: normal;
    font-variant: normal;
    color: #000000;
    background-color: #071268;
  }

  /* Border for images of section "Services" */
  .bordered-img-service {
    width: 100%;
    padding: 5px;
    border: 5px solid #af7ca0;
    background-color: #071268;
  }

  /* Button [E-mail] */
  .button {
    display: inline-block;
    horiz-align: center;
    border: none;
    outline: 0;
    padding: 8px;
    width: 100%;
    text-align: center;
    color: #FFFFFF;
    background-color: #000000;
    cursor: pointer;
  }

  /*Change of color for button [E-mail] */
  .button:hover {
    width: 100%;
    text-align: center;
    background-color: #555;
  }
</style>
