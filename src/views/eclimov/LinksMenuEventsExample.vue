<template>
  <div>
    <div id="top-menu">
      <a
        v-for="link in links"
        :key="link.text"
        href=""
        @mouseover="handleLinkMouseover(link)"
        @mouseout="handleLinkMouseout"
      >
        {{ link.text }}
      </a>
    </div>

    <transition name="fade">
      <div
        v-show="isDivTextShown"
        id="my-colored-div"
      >
        {{ divText }}
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'SmartphonePriceQuantityExample',
  data () {
    return {
      isDivTextShown: false,
      divText: '',
      links: [
        {
          text: 'Link1',
          description: 'About tab'
        },
        {
          text: 'Link2',
          description: 'Community tab'
        },
        {
          text: 'Link3',
          description: 'Contacts tab'
        },
        {
          text: 'Link4',
          description: 'Subscibe tab'
        }
      ]
    }
  },
  methods: {
    handleLinkMouseover (link) {
      this.isDivTextShown = true
      this.divText = link.description
    },
    handleLinkMouseout () {
      this.isDivTextShown = false
    }
  }
}
</script>

<style scoped>
  #top-menu {
    display: flex;
    justify-content: space-between;
    max-width: 300px;
  }

  #my-colored-div {
    background-color: #ffbeb0;
    max-width: 300px;
  }
</style>
