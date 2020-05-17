<template>
  <div class="header">
    <div>
      <img
        id="logo"
        src="header/hi.jpg"
        alt="logo-it-sanda"
      >
      <span>Test</span>
    </div>

    <div
      id="header-links"
      class="navigation-bar"
    >
      <router-link :to="{name: 'home'}">
        <button
          class="tabnav"
        >
          <b>HOMEPAGE</b>
        </button>
      </router-link>
      <router-link :to="{name: 'about'}">
        <button
          class="tabnav"
        >
          <b>ABOUT</b>
        </button>
      </router-link>
      <router-link :to="{name: 'service'}">
        <button
          class="tabnav"
        >
          <b>SERVICES</b>
        </button>
      </router-link>
      <router-link :to="{name: 'blog'}">
        <button
          class="tabnav"
        >
          <b>BLOG</b>
        </button>
      </router-link>
      <router-link :to="{name: 'community'}">
        <button
          class="tabnav"
          @click="openPage('Community', this, '#523f8f')"
        >
          <b>COMMUNITY</b>
        </button>
      </router-link>
      <router-link :to="{name: 'podcast'}">
        <button
          class="tabnav"
          @click="openPage('Podcast', this, '#c34397')"
        >
          <b>PODCAST</b>
        </button>
      </router-link>
      <div
        id="Homepage"
        class="tabcontent"
      >
        <p><i><q>Home's not a place, it's a feeling.</q></i></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  /* Header - inclusively logo */
  .header {
    display: flex;
    height: 100%;
    width: 100%;
    horiz-align: center;
    vertical-align: auto;
    justify-content: space-between;
    line-height: normal;
    padding: 0;
    overflow: hidden;
    font-style: normal;
    font-variant: normal;
    font-weight: normal;
    background-color: #af7ca0;
  }

  #logo {
    display: inline;
    height: auto;
    width: 21%;
    horiz-align: auto;
    vertical-align: center;
    text-align: center;
    background-color: #af7ca0;
  }
  /* Navigation bar for menu tabs */
  {
    box-sizing: border-box
  }

  /* Part of header which includes only navigation menu tabs */
  .navigation-bar {
    display: inline;
    height: 100%;
    width: 50%;
    horiz-align: center;
    vertical-align: right;
    line-height: initial;
    font-family: Laila, serif;
    font-size: 20px;
    font-style: normal;
    font-variant: titling-caps;
    font-weight: bold;
    text-align: right;
    color: #000000;
  }

  /* Each navigation tab */
  .tabnav {
    display: block;
    float: left;
    height: auto;
    width: 16.66%;
    horiz-align: center;
    vertical-align: center;
    line-height: normal;
    padding: 10px;
    border-color: #071268;
    font-family: Laila, serif;
    font-size: 20px;
    font-style: normal;
    font-variant: titling-caps;
    font-weight: normal;
    text-align: center;
    color: #000000;
    background-color: #af7ca0;
    cursor: pointer;
  }

  /* Style for navigation tab while changing colors */
  .tabnav:hover {
    display: block;
    float: left;
    height: auto;
    width: 16.66%;
    horiz-align: center;
    vertical-align: center;
    line-height: normal;
    padding: 10px;
    border-color: #071268;
    margin: 0;
    font-family: Laila, serif;
    font-size: 18px;
    font-style: normal;
    font-variant: titling-caps;
    font-weight: normal;
    text-align: center;
    color: #000000;
    cursor: pointer;
  }

  /* Style the tab content (and add height:100% for full page content) */
  .tabcontent {
    display: block;
    height: 100%;
    width: auto;
    horiz-align: auto;
    vertical-align: auto;
    padding: 15px;
    line-height: normal;
    font-family: Laila, serif;
    font-style: normal;
    font-variant: titling-caps;
    font-size: 18px;
    color: #000000;
  }

  /* Colors for tabs */
  #Homepage {
    background-color: #523f8f;
  }

  #About {
    background-color: #c34397;
  }

  #Services {
    background-color: #523f8f;
  }

  #Blog {
    background-color: #c34397;
  }

  #Community {
    background-color: #523f8f;
  }

  #Podcast {
    background-color: #c34397;
  }
</style>
