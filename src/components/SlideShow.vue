<template>
  <div>
    <div class="card-slideshow">
      <div class="slide-show fade">
        <div class="numbertext">
          1 / 3
        </div>
        <img
          src="@/assets/barcelona.png"
          style="width:100%"
          alt="barcelona"
        >
        <div class="text">
          Barcelona
        </div>
      </div>
      <div class="slide-show fade">
        <div class="numbertext">
          2 / 3
        </div>
        <img
          src="@/assets/locals/ciocana.png"
          style="width:100%"
          alt="chisinau"
        >
        <div class="text">
          Chisinau
        </div>
      </div>
      <div class="slide-show fade">
        <div class="numbertext">
          3 / 3
        </div>
        <img
          src="@/assets/locals/odessa.jpg"
          style="width:100%"
          alt="odessa"
        >
        <div class="text">
          Odessa
        </div>
      </div>
      <a
        class="prev"
        @click="plusSlides(-1)"
      >&#10094;</a>
      <a
        class="next"
        @click="plusSlides(1)"
      >&#10095;</a>
    </div>
    <div style="text-align:center; background-color: #f0d7e9">
      <span
        class="dot"
        @click="currentSlide(1)"
      />
      <span
        class="dot"
        @click="currentSlide(2)"
      />
      <span
        class="dot"
        @click="currentSlide(3)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SlideShow',
  data () {
    return {
      slideIndex: 1
    }
  },
  mounted () {
    this.showSlides(this.slideIndex)

    setInterval(() => {
      this.plusSlides(this.slideIndex + 1)
    }, 5000)
  },
  methods: {
    plusSlides (n) {
      this.showSlides(this.slideIndex += n)
    },

    currentSlide (n) {
      this.showSlides(this.slideIndex = n)
    },

    showSlides (n) {
      let i
      let slides = document.getElementsByClassName('slide-show')
      let dots = document.getElementsByClassName('dot')
      if (n > slides.length) {
        this.slideIndex = 1
      }
      if (n < 1) {
        this.slideIndex = slides.length
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '')
      }
      slides[this.slideIndex - 1].style.display = 'block'
      dots[this.slideIndex - 1].className += ' active'
    }
  }
}
</script>

<style scoped>
  .slide-show {
    display: none;
    height: auto;
    width: 100%;
  }
  /*Slide-show - card*/
  .card-slideshow {
    position: relative;
    height: auto;
    width: 100%;
    border: 20px #071268;
    font-family: Laila, serif;
    font-size: 20px;
    font-style: normal;
    font-variant: normal;
    background-color: #f0d7e9;
  }

  /* Next & previous buttons */
  .prev, .next {
    width: 100%;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    cursor: pointer;
    position: absolute;
    top: 50%;
    user-select: none;
    padding: 20px;
    font-family: Laila, serif;
    font-weight: bold;
    font-size: 18px;
    color: #FFFFFF;
  }

  /* Position of the "next button" to the right */
  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }

  /* On hover, add a black background color with a little bit see-through */
  .prev:hover, .next:hover {
    width: 100%;
    background-color: #000000;
  }

  /* Caption text */
  .text {
    position: absolute;
    padding: 8px 12px;
    bottom: 8px;
    width: 100%;
    text-align: center;
    font-family: Laila, serif;
    font-size: 20px;
    font-variant: normal;
    color: #000000;
  }

  /* Number text (1/3 etc) */
  .numbertext {
    position: absolute;
    padding: 8px 12px;
    font-family: Laila, serif;
    font-size: 15px;
    font-variant: normal;
    color: #000000;
  }

  /* The dots/bullets/indicators */
  .dot {
    display: inline-block;
    border-radius: 50%;
    transition: background-color 0.6s ease;
    cursor: pointer;
    margin: 0 2px;
    height: 15px;
    width: 15px;
    background-color: #c34397;
  }
  /* Colors for dots */
  .active, .dot:hover {
    background-color: #071268;
  }

  /* Fading animation */
  .fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
  }

  @-webkit-keyframes fade {
    from {
      opacity: .4
    }
    to {
      opacity: 1
    }
  }

  @keyframes fade {
    from {
      opacity: .4
    }
    to {
      opacity: 1
    }
  }
</style>
