<template>
  <div class="container-search">
    <h1><b>Search</b></h1>
    <form
      class="example"
      action="/action_page.php"
    >
      <label>
        <input
          type="text"
          placeholder="Search.."
          name="search"
        >
      </label>
      <button type="submit">
        <i class="fa fa-search" />
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style scoped>
  h1 {
    font-family: Laila, serif;
    font-size: 34px;
    font-style: normal;
    font-variant: normal;
    font-weight: normal;
    text-align: center;
  }
  .container-search {
    display: block;
    height: auto;
    width: auto;
    padding: 20px;
    margin-top: 20px;
    font-family: Laila, serif;
    font-size: 18px;
    font-style: normal;
    font-variant: normal;
    text-align: center;
    color: #000000;
    background-color: #523f8f;
  }

  /*Section for input*/
  form.example input[type=text] {
    vertical-align: center;
    horiz-align: center;
    border: 1px solid grey;
    float: left;
    padding: 10px;
    width: 90%;
    font-family: Laila, serif;
    font-size: 20px;
    font-style: normal;
    font-variant: normal;
    text-align: left;
    color: #000000;
    background-color: #FFFFFF;
  }

  /*Button for search*/
  form.example button {
    float: left;
    width: 20%;
    padding: 10px;
    border: 1px #af7ca0;
    border-left: none;
    font-family: Laila, serif;
    font-size: 20px;
    font-style: normal;
    font-variant: normal;
    text-align: left;
    color: #000000;
    background: #FFFFFF;
    cursor: pointer;
  }

  /* Style for the submit button, while pressing it */
  form.example button:hover {
    background-color: #c34397;
  }

  /* Clear floats */
  form.example::after {
    content: "";
    clear: both;
    display: table;
  }
</style>
