<template>
  <div>
    <h2>Basic HTML Table</h2>
    <table style="width:100%">
      <tr>
        <th>#</th>
        <th>Flowers</th>
        <th>Images</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Castor oil plant “Palm of Christ”</td>
        <td>
          <img
            src="@/assets/palmofchrist.jpg"
            alt="Castor"
          >
        </td>
        <td>Castor seed is the source of castor oil, which has a wide variety of uses. The seeds contain between 40% and 60% oil that is rich in triglycerides, mainly ricinolein. The seed also contains ricin, a water-soluble toxin, which is also present in lower concentrations throughout the plant.</td>
      </tr>
      <tr>
        <td>2</td>
        <td>The poison queen</td>
        <td>
          <img
            src="@/assets/poisonivy.jpg"
            alt="Drosera"
          >
        </td>
        <td>Charles Darwin performed much of the early research into Drosera, engaging in a long series of experiments with Drosera rotundifolia which were the first to confirm carnivory in plants.[3]  In an 1860 letter, Darwin wrote, “…at the present moment, I care more about Drosera than the origin of all the species in the world.</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Sweetly scented killer</td>
        <td>
          <img
            src="@/assets/sweetlykiller.jpg"
            alt="Poison Queen"
          >
        </td>
        <td>The dark green leaves of Aconitum species lack stipules. They are palmate or deeply palmately lobed with five to seven segments. Each segment again is trilobed with coarse sharp teeth. The leaves have a spiral (alternate) arrangement. The lower leaves have long petioles.</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Dracula’s flower “Voodoo lily”</td>
        <td>
          <img
            src="@/assets/voodoolilly.jpg"
            alt="Sweetly Killer"
          >
        </td>
        <td>The species' anti-diabetic qualities yielded the name Sakayau and Kashe Zaki meaning "sweet killer" or "destroying sweetness" in the Hausa language used in Northern Nigeria.</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Round leaved Sundew “Drosera rotundifolia”</td>
        <td>
          <img
            src="@/assets/drosera.jpg"
            alt="Voodoo Lilly"
          >
        </td>
        <td>Charles Darwin performed much of the early research into Drosera, engaging in a long series of experiments with Drosera rotundifolia which were the first to confirm carnivory in plants.[3]  In an 1860 letter, Darwin wrote, “…at the present moment, I care more about Drosera than the origin of all the species in the world.”</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Homework3'
}
</script>

<style scoped>
  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;
  }

  th, td {
    text-align: left;
    padding: 16px;
  }

  tr:nth-child(odd) {
    background-color: #D92E1E;
  }

  tr:nth-child(even) {
    background-color: #3B668C;
  }

  tr:hover {
    background-color: #F2C53D;
  }
</style>
