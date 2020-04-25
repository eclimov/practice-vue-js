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

    <div
      id="my-colored-div"
      :style="{display: divDisplayValue}"
    >
      {{ divText }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'SmartphonePriceQuantityExample',
  data () {
    return {
      divDisplayValue: 'none',
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
      this.divDisplayValue = 'block'
      this.divText = link.description
    },
    handleLinkMouseout () {
      this.divDisplayValue = 'none'
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
