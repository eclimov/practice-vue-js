<template>
  <div>
    <div id="section1">
      <h1>Monaco</h1>
      <ol>
        <li>
          Implement a HTML page. Choose one of the following topics:
          <ol type="a">
            <li>TOP 5 programming languages I would like to learn</li>
            <li>TOP 5 countries I would like to visit</li>
          </ol>
        </li>
        <li>
          Requirements:
          <ul>
            <li>‘Homework 1’ is title of the page</li>
            <li>A page contains different ‘div’ sections. Each one starts with corresponding heading and ends with ‘hr’</li>
            <li>Section 1. Copy this homework’s task and represent it as italic text. Preserve structure (lists) and line breaks</li>
            <li>Section 2. Enumerate your items in a list. Name of each item should be a link to an article in the internet. A link should open in a new tab</li>
            <li>Section 3. Pick one of items and provide some information for it, in 2-3 sentences in a paragraph. Highlight 3 important words/phrases with special color, ‘underline’ and ‘bold’ styles, accordingly. Put the paragraph in a new ‘div’ with maximum width 300px (set this style via CSS)</li>
            <li>
              Section 4. Add button [Name](should output your first name in console).<br>
              Add 2 input fields with placeholders ‘a’ and ‘b’ accordingly.<br>
              Add button [Hypotenuse](should calculate hypotenuse from values, provided in the inputs and output result in an  ‘alert’ window).
            </li>
            <li>
              Section 5. Pick a palette, make picture of it, put it in the same directory as the HTML file and display it in this section of the page. Add ‘Palette’ title to the image
            </li>
          </ul>
        </li>
        Style your page (including background color and text color) with colors of palette you’ve picked
      </ol>
      <hr>
    </div>
    <div id="section2">
      <h1>Lista</h1>
      <ul>
        <li>
          <a
            href="https://en.wikipedia.org/wiki/Hungary"
            target="_blank"
          >Hungary</a>
        </li>

        <li>
          <a
            href="https://en.wikipedia.org/wiki/Austria"
            target="_blank"
          >Austria</a>
        </li>
        <li>
          <a
            href="https://en.wikipedia.org/wiki/Monaco"
            target="_blank"
          >Monaco</a>
        </li>
        <li>
          <a
            href="https://en.wikipedia.org/wiki/Argentina"
            target="_blank"
          >Argentina</a>
        </li>
        <li>
          <a
            href="https://en.wikipedia.org/wiki/Chili"
            target="_blank"
          >Chili</a>
        </li>
      </ul>
      <hr>
    </div>

    <div id="section3">
      <h1>Hello World!</h1>
      <div id="section31">
        <b><u>Hungary</u></b> (Hungarian: Magyarország [ˈmɒɟɒrorsaːɡ] (About this soundlisten)) is a landlocked country in Central Europe.[2]
        Spanning <b>93,030 square kilometres</b> (35,920 sq mi) in the Carpathian Basin, it borders Slovakia to the north,
        Ukraine to the northeast, <b>Romania</b> to the east and southeast, Serbia to the south, Croatia and Slovenia to the southwest,
        and Austria to the west.[12] With about 10 million inhabitants, <u>Hungary</u> is a medium-sized member state of the <u>European Union</u>.[13]
        <span class="text-red">The official language is Hungarian, which is the most widely spoken Uralic language in the world, and among the few non-Indo-European languages to be widely spoken in Europe.[14]</span>> Hungary's capital and largest city is Budapest; other major urban areas include Debrecen, Szeged, Miskolc, Pécs and Győr.
      </div>
      <hr>
    </div>

    <div id="section4">
      <h1>Buttons</h1>
      <button
        type="button"
        @click="printName()"
      >
        Name
      </button>

      <br>
      <br>
      <input
        id="a"
        v-model="hypotenuseA"
        type="number"
        placehlder="a"
      ><br>
      <input
        id="b"
        v-model="hypotenuseB"
        type="number"
        placehlder="b"
      ><br>
      <button
        type="button"
        @click="getHypotenuse()"
      >
        Hypotenuse
      </button>
      <hr>
    </div>

    <div id="section5">
      <h1>Palette</h1>
      <img
        title="colorpalette"
        src="@/assets/palette.png"
        alt="You have Internet Explorer, sorry"
      >
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Homework1',
  data () {
    return {
      hypotenuseA: 3,
      hypotenuseB: 4
    }
  },
  methods: {
    getHypotenuse () {
      alert(Math.sqrt(this.hypotenuseA * this.hypotenuseA + this.hypotenuseB * this.hypotenuseB))
    },
    printName () {
      console.log('Sanda!')
    }
  }
}
</script>

<style scoped>
  #section1 {
    background-color: #F2E85E;
  }

  #section2 {
    background-color: #D9A74A;
  }

  #section3 {
    background-color: #F24444;
  }

  #section4 {
    background-color: #732222;
  }

  #section5 {
    background-color: #F26363;
  }

  #section31 {
    max-width: 300px;
  }

  .text-red {
    color: red;
  }
</style>
