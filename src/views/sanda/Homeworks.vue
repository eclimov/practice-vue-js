<template>
  <div class="about">
    <h1>This is an About page</h1>
    <ul>
      <li>
        <router-link :to="{ name: 'sanda-homework1' }">
          Homework1
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'sanda-homework3' }">
          Homework3
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'sanda-homework4' }">
          Homework4
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'sanda-homework4' }">
          Homework4
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'sanda-practice1' }">
          Practice1
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'sanda-practice4' }">
          Practice4
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'sanda-practice4.4' }">
          Practice4.4
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: `Homeworks`
}
</script>
