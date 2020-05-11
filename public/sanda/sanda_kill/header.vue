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
      <button
        id="defaultOpen"
        class="tabnav"
        onclick="openPage('Homepage', this, '#523f8f')"
      >
        <b>HOMEPAGE</b>
      </button>
      <button
        class="tabnav"
        onclick="openPage('About', this, '#c34397')"
      >
        <b>ABOUT</b>
      </button>
      <button
        class="tabnav"
        onclick="openPage('Services', this, '#523f8f')"
      >
        <b>SERVICES</b>
      </button>
      <button
        class="tabnav"
        onclick="openPage('Blog', this, '#c34397')"
      >
        <b>BLOG</b>
      </button>
      <button
        class="tabnav"
        onclick="openPage('Community', this, '#523f8f')"
      >
        <b>COMMUNITY</b>
      </button>
      <button
        class="tabnav"
        onclick="openPage('Podcast', this, '#c34397')"
      >
        <b>PODCAST</b>
      </button>

      <div
        id="Homepage"
        class="tabcontent"
      >
        <p><i><q>Home's not a place, it's a feeling.</q></i></p>
      </div>
      <div
        id="About"
        class="tabcontent"
      />
      <div
        id="Services"
        class="tabcontent"
      />
      <div
        id="Blog"
        class="tabcontent"
      />
      <div
        id="Community"
        class="tabcontent"
      />
      <div
        id="Podcast"
        class="tabcontent"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
/* Function for navigation tabs */
function openPage (pageName, elmnt, color) {
  let i, tabcontent, tabnav
  tabcontent = document.getElementsByClassName('tabcontent')
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none'
  }
  tabnav = document.getElementsByClassName('tablink')
  for (i = 0; i < tabnav.length; i++) {
    tabnav[i].style.backgroundColor = ''
  }
  document.getElementById(pageName).style.display = 'block'
  elmnt.style.backgroundColor = color
  /* Switch to other connected pages */
  switch (pageName) {
    case 'About':
      window.location.href = './sanda_about_project.html'
      break
    case 'Services':
      window.location.href = './sanda_services.html'
      break
    case 'Blog':
      window.location.href = './sanda_blog.html'
      break
    case 'Community':
      window.location.href = './sanda_community.html'
      break
    case 'Podcast':
      window.location.href = './sanda_podcast.html'
      break
  }
}
</script>

<style scoped>
  /* Header - inclusively logo */
  .header {
    display: flex;
    height: 10%;
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
    margin: 0;
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

  /* Remove of underline from links - sections of social networks */
  a:link {
    font-style: normal;
    text-decoration: none;
  }

  a:hover {
    font-style: normal;
    background-color: #af7ca0;
  }
</style>
