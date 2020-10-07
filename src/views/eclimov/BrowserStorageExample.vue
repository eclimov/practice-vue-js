<template>
  <div>
    <input
      v-model="newUser"
      placeholder="Username"
      type="text"
    >
    <button @click="addUser(newUser)">
      Add User
    </button>

    <hr>

    <table>
      <tr>
        <th>Name</th>
        <th>Action</th>
      </tr>
      <tr
        v-for="username in users"
        :key="username"
      >
        <td>{{ username }}</td>
        <td>
          <button @click="removeUser(username)">
            Remove
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'BrowserStorageExample',
  data () {
    return {
      newUser: '',
      users: []
    }
  },
  created () {
    this.initializeData()
  },
  methods: {
    getLocalStorageData () {
      const data = localStorage.getItem('data') || '{ "users": [] }'
      return JSON.parse(data)
    },
    synchronizeLocalStorageData () {
      const data = JSON.stringify({ users: this.users })
      localStorage.setItem('data', data)
    },
    initializeData () {
      this.users = this.getLocalStorageData().users
    },
    addUser (username) {
      if (!this.users.includes(username)) {
        this.users.push(username)
        this.synchronizeLocalStorageData()
      }
    },
    removeUser (usernameToDelete) {
      let newUsersArray = []
      for (let username of this.users) {
        if (username !== usernameToDelete) {
          newUsersArray.push(username)
        }
      }

      this.users = newUsersArray
      this.synchronizeLocalStorageData()
    }
  }
}
</script>

<style scoped>
table {
  border-collapse: collapse;
  border-spacing: 0;
}

table, th, td {
  border: 1px solid black;
}
</style>
