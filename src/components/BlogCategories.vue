<template>
  <div class="card-blog">
    <h1>
      <b><a
        href="./sanda_blog.html"
        target="_blank"
      >
        Blog
      </a></b>
    </h1>
    <p /><div class="row-service">
      <div class="column-blog">
        <div class="card">
          <img
            class="bordered-img-blog"
            src="@/assets/qa.jpg"
            alt="qa"
            style="width:100%"
          >
          <div class="container-blog">
            <h2 style="text-align: center">
              <b>Quality Assurance</b>
            </h2>
            <p>
              <button class="button">
                Choose category
              </button>
            </p>
          </div>
        </div>
      </div>
      <div class="column-blog">
        <div class="card">
          <img
            class="bordered-img-blog"
            src="@/assets/qa.jpg"
            alt="project-management"
            style="width:100%"
          >
          <div class="container-blog">
            <h2 style="text-align: center">
              <b>Project Management</b>
            </h2>
            <p>
              <button class="button">
                Choose category
              </button>
            </p>
          </div>
        </div>
      </div>
      <div class="column-blog">
        <div class="card">
          <img
            class="bordered-img-blog"
            src="@/assets/qa.jpg"
            alt="content-marketing"
            style="width:100%"
          >
          <div class="container-blog">
            <h2 style="text-align: center">
              <b>Content Marketing</b>
            </h2>
            <p>
              <button class="button">
                Choose category
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row-service">
      <div class="column-blog">
        <div class="card">
          <img
            class="bordered-img-blog"
            src="@/assets/qa.jpg"
            alt="tech-news"
            style="width:100%"
          >
          <div class="container-blog">
            <h2 style="text-align: center">
              <b>Tech News</b>
            </h2>
            <p>
              <button class="button">
                Choose category
              </button>
            </p>
          </div>
        </div>
      </div>
      <div class="column-blog">
        <div class="card">
          <img
            class="bordered-img-blog"
            src="@/assets/qa.jpg"
            alt="events"
            style="width:100%"
          >
          <div class="container-blog">
            <h2 style="text-align: center">
              <b>Events</b>
            </h2>
            <p>
              <button class="button">
                Choose category
              </button>
            </p>
          </div>
        </div>
      </div>
      <div class="column-blog">
        <div class="card">
          <img
            class="bordered-img-blog"
            src="@/assets/qa.jpg"
            alt="empowerment"
            style="width:100%"
          >
          <div class="container-blog">
            <h2 style="text-align: center">
              <b>Empowerment & Motivation</b>
            </h2>
            <p>
              <button class="button">
                Choose category
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
  name: 'BlogCategories'
}
</script>

<style scoped>
  *, *:before, *:after {
    box-sizing: inherit;
  }

  /* Whole section for blog categories */
  .card-blog {
    display: block;
    height: auto;
    width: auto;
    padding: 50px;
    margin-bottom: 20px;
    font-family: Laila, serif;
    font-size: 20px;
    font-style: normal;
    font-variant: normal;
    text-align: center;
    color: #FFFFFF;
    background-color: #071268;
  }

  /* Column alignement */
  .column-blog {
    float: left;
    margin-bottom: 16px;
    width: 30%;
    padding: 20px;
    font-family: Laila, serif;
    font-size: 20px;
    font-variant: normal;
    color: #000000;
  }

  /* Name of card and button for category */
  .container-blog {
    padding: auto;
    height: auto;
    width: 100%;
    line-height: normal;
    font-family: Laila, serif;
    font-size: 20px;
    font-style: normal;
    font-variant: normal;
    color: #000000;
    background-color: #c34397;
  }

  .container-blog::after, .row-service::after {
    display: table;
    content: "";
    clear: both;
    font-family: Laila, serif;
    font-size: 20px;
    font-style: normal;
    font-variant: normal;
    color: #000000;
    background-color: #c34397;
  }

  /* Change of color */
  .container-blog:hover {
    height: auto;
    width: 100%;
    font-family: Laila, serif;
    font-size: 20px;
    font-variant: normal;
    color: #000000;
    background-color: #523f8f;
  }

  @media screen and (max-width: 650px) {
    .column-blog {
      display: block;
      width: 100%;
    }
  }

  /* Button [Choose category] */
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

  /* Change of color */
  .button:hover {
    width: 100%;
    background-color: #555;
  }

  /* Border for image of each category*/
  .bordered-img-blog {
    width: 100%;
    padding: 5px;
    border: 5px solid #c34397;
    background-color: #523f8f;
  }
</style>
