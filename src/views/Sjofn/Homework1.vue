<template>
  <div>
    <div id="section_1">
      <h1>Task</h1>
      <i>
        <ol>
          <li>Implement a HTML page. Choose one of the following topics
            <ul>
              <li>a.TOP 5 programming languages I would like to learn</li>
              <li>b.TOP 5 countries I would like to visit</li>
            </ul>
          </li>
          <li>Requirements:
            <ul>
              <li> ‘Homework 1’ is title of the page</li>
              <li> A page contains different ‘div’ sections. Each one starts with corresponding heading and ends with ‘hr’</li>
              <li> Section 1. Copy this homework’s task and represent it as italic text. Preserve structure (lists) and line breaks</li>
              <li> Section 2. Enumerate your items in a list. Name of each item should be a link to an article in the internet. A link should open in a new tab</li>
              <li> Section 3. Pick one of items and provide some information for it, in 2-3 sentences in a paragraph. Highlight 3 important words/phrases with special color, ‘underline’ and ‘bold’ styles, accordingly. Put the paragraph in a new ‘div’ with maximum width 300px (set this style via CSS)</li>
              <li> Section 4. Add button [Name](should output your first name in console).<br>
                Add 2 input fields with placeholders ‘a’ and ‘b’ accordingly.<br>
                Add button [Hypotenuse](should calculate hypotenuse from values, provided in the inputs and output result in an  ‘alert’ window).<br>
              </li>
              <li> Section 5. Pick a palette, make picture of it, put it in the same directory as the HTML file and display it in this section of the page. Add ‘Palette’ title to the image</li>
            </ul>
          </li>
          <li>
            Style your page (including background color and text color) with colors of palette you’ve picked
          </li>
        </ol>
      </i>
    </div>
    <hr>
    <div id="section_2">
      <h1>Most mysterious programming languages</h1>
      <ol>
        <li>
          <a
            href="https://en.wikipedia.org/wiki/Scala_(programming_language)"
            target="_blank"
          >Scala</a>
        </li>
        <li>
          <a
            href="https://en.wikipedia.org/wiki/Java_(programming_language)"
            target="_blank"
          >Java</a>
        </li>
        <li>
          <a
            href="https://en.wikipedia.org/wiki/TypeScript"
            target="_blank"
          >Typescript</a>
        </li>
        <li>
          <a
            href="https://thenewstack.io/dark-a-new-programming-language-for-deployless-deployments/"
            target="_blank"
          >Dark</a>
        </li>
        <li>
          <a
            href="https://en.wikipedia.org/wiki/Kotlin_(programming_language)"
            target="_blank"
          >Kotlin</a>
        </li>
      </ol>
    </div>
    <hr>
    <div id="section_3">
      <div id="textitself">
        <h1>A few words about Dark</h1>
        <br>There are too many incrementalists in tech these days, according to Paul Biggar, who along with Ellen Chisa, is <span class="highText">unveiling</span> the <mark>Dark</mark>, a programming language aimed at making deploying software simpler.
        <br>“The <b>complexity</b> of building backends today is just out of <span class="highText">control</span>. It’s infrastructure, it’s deployment, it’s APIs… <mark>Dark</mark> is about removing <em>all</em> this complexity,” Biggar said.
        <br>The technology involves a <span class="highText">programming</span> language, structured editor and infrastructure for building backend web services.
        <br>“We keep adding things, but we <ins>never</ins> take things <ins>away</ins>. AWS has 200 services and <ins>never</ins> takes any <sub>away</sub>,” he said, calling garbage collection the last really good innovation in the industry.
        <br>
      </div>
    </div>
    <hr>
    <div id="section_4">
      <h1>Simply Magic</h1>
      <button
        id="myId"
        onclick="console.log('Tanya')"
      >
        Name
      </button>
      <hr>
      a:<br>
      <input
        v-model="length"
        placeholder="length"
      >
      <br>
      b:<br>
      <input
        v-model="height"
        placeholder="height"
      >
      <br>
      <br>
      <button @click="result(length,height)">
        Hypotenuse
      </button>
      <br>
    </div>
    <div id="section_5">
      <h1>Why is this sooo beautiful?</h1>
      <img
        src="Palette.jpg"
        alt="Palette"
        title="What did you expect to see here? Take away your cursor!"
      >
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'Homework1',
  data () {
    return {
      height: '',
      length: ''
    }
  },
  methods: {
    result (a, b) {
      alert('The result is ' + Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)))
    }
  }
}

</script>

<style scoped>
  #section_1 {
    color: black;
    background-color: #dcffcc;
    size: A3;
  }
  #section_2 {
    color: black;
    background-color: #9fdfcd;
    size: A3;
  }
  #section_3 {
    color: black;
    background-color: #baabda;
    size: A3;
  }
  .highText {
    color: yellow;
  }
  #textitself {
    max-width: 300px;
  }
  #section_4 {
    color: black;
    background-color: #d79abc;
    size: A3;
  }
  #section_5 {
    color: black;
    background-color: white;
    size: A3;
  }
</style>
