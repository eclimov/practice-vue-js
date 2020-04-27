<template>
  <div>
    <table>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
      </tr>
      <tr>
        <td>
          <label for="quantity">Smartphone</label>
        </td>
        <td>
          <span id="price">{{ price }}</span>$
        </td>
        <td>
          <input
            id="quantity"
            v-model="quantity"
            type="number"
          >
        </td>
      </tr>
      <tr>
        <td
          colspan="3"
          style="text-align: right"
        >
          <b>Total: &nbsp;</b><span id="total">{{ total }}</span>$
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'SmartphonePriceQuantityExample',
  data () {
    return {
      price: 230,
      quantity: 0
    }
  },
  computed: {
    total () {
      return this.price * this.quantity
    }
  }
}
</script>

<style scoped>
  table {
    border-collapse: collapse;
  }

  input {
    width: 100px;
  }

  table, th, td {
    border: 1px solid black;
  }
</style>
