<template>
  <div class="card-contact-form">
    <div class="contact-form">
      <h1><b>Contact Form</b></h1>
      <form action="/action_page.php">
        <fieldset>
          <legend>Check the part / parts to which is related your question:</legend>
          <p>
            <label for="reason1"><input
              value="freelance"
              type="checkbox"
              name="readon1"
            >Freelance
              services</label>
          </p>
          <p>
            <label for="reason2"><input
              value="blog"
              type="checkbox"
              name="reason2"
            > Blog</label>
          </p>
          <p>
            <label for="reason3"><input
              value="community"
              type="checkbox"
              name="reason3"
            > Community</label>
          </p>
          <p>
            <label for="reason4"><input
              value="collaboration"
              type="checkbox"
              name="reason4"
              checked
            >
              Proposal of collaboration</label>
          </p>
          <p>
            <label for="reason5"><input
              value="other"
              type="checkbox"
              name="reason5"
            > Other</label>
          </p>
        </fieldset>
        <fieldset>
          <legend>Complete the form:</legend>
          <label for="fname">First name:</label><br>
          <input
            id="fname"
            type="text"
            name="fname"
            required
          ><br>
          <label for="lname">Last name:</label><br>
          <input
            id="lname"
            type="text"
            name="lname"
            required
          ><br><br>
          <label for="subject">Subject:</label><br>
          <input
            id="subject"
            type="text"
            name="subject"
            required
          ><br><br>
          <p>
            <label>
              <textarea
                name="message"
                style="width:350px; height:300px;"
              >Introduce comment</textarea>
            </label>
          </p>
          <label for="country">Choose your country:</label>
          <select
            id="country"
            name="country"
          >
            <option
              v-for="country in countries"
              :key="country.value"
              :value="country.value"
            >
              {{ country.content }}
            </option>
            <!--            <option value="australia">-->
            <!--              Australia-->
            <!--            </option>-->
            <!--            <option value="austria">-->
            <!--              Austria-->
            <!--            </option>-->
            <!--            <option value="azerbaijan">-->
            <!--              Azerbaijan-->
            <!--            </option>-->
            <!--            <option value="belarus">-->
            <!--              Belarus-->
            <!--            </option>-->
            <!--            <option value="belgia">-->
            <!--              Belgia-->
            <!--            </option>-->
            <!--            <option value="bulgaria">-->
            <!--              Bulgaria-->
            <!--            </option>-->
            <!--            <option value="canada">-->
            <!--              Canada-->
            <!--            </option>-->
            <!--            <option value="chile">-->
            <!--              Chile-->
            <!--            </option>-->
            <!--            <option value="china">-->
            <!--              China-->
            <!--            </option>-->
            <!--            <option value="croatia">-->
            <!--              Croatia-->
            <!--            </option>-->
            <!--            <option value="czechia">-->
            <!--              Czechia-->
            <!--            </option>-->
            <!--            <option value="egypt">-->
            <!--              Egypt-->
            <!--            </option>-->
            <!--            <option value="estonia">-->
            <!--              Estonia-->
            <!--            </option>-->
            <!--            <option value="finland">-->
            <!--              Finland-->
            <!--            </option>-->
            <!--            <option value="france">-->
            <!--              France-->
            <!--            </option>-->
            <!--            <option value="germany">-->
            <!--              Germany-->
            <!--            </option>-->
            <!--            <option value="greece">-->
            <!--              Greece-->
            <!--            </option>-->
            <!--            <option value="hungary">-->
            <!--              Hungary-->
            <!--            </option>-->
            <!--            <option value="india">-->
            <!--              India-->
            <!--            </option>-->
            <!--            <option value="ireland">-->
            <!--              Ireland-->
            <!--            </option>-->
            <!--            <option value="russia">-->
            <!--              Russia-->
            <!--            </option>-->
            <!--            <option value="saudiarabia">-->
            <!--              Saudi Arabia-->
            <!--            </option>-->
            <!--            <option value="other">-->
            <!--              Other-->
            <!--            </option>-->
          </select>
        </fieldset>
        <input
          type="submit"
          value="Submit"
        >
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      countries: [
        { value: 'moldova', content: 'Moldova' },
        { value: 'argentina', content: 'Argentina' }
      ]
    }
  }

}
</script>

<style scoped>
  .card-contact-form {
    display: block;
    height: auto;
    width: auto;
    padding: 20px;
    margin-top: 20px;
    font-family: Laila, serif;
    font-size: 20px;
    font-style: normal;
    font-variant: normal;
    text-align: center;
    color: #000000;
    background-color: #af7ca0;
  }

  .contact-form {
    display: block;
    height: auto;
    width: auto;
    border-radius: 5px;
    padding: 20px;
    font-family: Laila, serif;
    font-size: 20px;
    font-style: normal;
    font-variant: normal;
    text-align: left;
    background-color: #af7ca0;
  }

  input[type=text], select, textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #af7ca0;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
    font-family: Laila, serif;
    font-size: 20px;
    font-style: normal;
    font-variant: normal;
    text-align: left;
  }

  input[type=text], input[type=submit] {
    display: inline-block;
    width: 100%;
    padding: 12px 20px;
    margin-top: 10px;
    border: 1px solid #523f8f;
    border-radius: 4px;
    font-family: Laila, serif;
    font-size: 20px;
    font-style: normal;
    font-variant: normal;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;
  }

  input[type=submit]:hover {
    opacity: 0.8;
    font-family: Laila, serif;
    font-size: 20px;
    font-style: normal;
    text-align: center;
    background-color: #555;
  }
</style>
