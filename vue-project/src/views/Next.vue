<template>
    <div>
        <h2>
            <p>Text: {{ $route.query.text }}</p>
            <p>Date: {{ $route.query.date }}</p>
        </h2>
        <button v-if="isUploadDataAvailable" @click="addUsers(); disableDataUpload()">Add Users</button>
        <p v-if="isLoading"> Loading </p>
        <table>
            <caption>Data from Home</caption>
            <thead>
                <tr>
                    <th v-for="col in columns" :key="col.field">
                        {{ col.name }}
                    </th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.age }}</td>
                    <td>{{ user.role }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';

interface User {
    id: number
    name: string
    age: number
    role: string
}
export default {
  name: "Next",
  setup() {

    const users = ref<User[]>([
      { id: 1, name: "John Doe", age: 30, role: "Admin" },
      { id: 2, name: "Jane Smith", age: 25, role: "User" },
      { id: 3, name: "Alice Johnson", age: 28, role: "Moderator" },
      { id: 4, name: "Bob Brown", age: 22, role: "Guest" },
      { id: 5, name: "Charlie White", age: 35, role: "Super Admin" },
      { id: 6, name: "Diana Green", age: 27, role: "User" },
      { id: 7, name: "Ethan Blue", age: 31, role: "Moderator" },
      { id: 8, name: "Fiona Black", age: 29, role: "Admin" },
      { id: 9, name: "George Yellow", age: 24, role: "Guest" },
      { id: 10, name: "Hannah Purple", age: 26, role: "User" }
    ])

    const columns = [
      { name: "id", field: "id" },
      { name: "name", field: "name" },
      { name: "age", field: "age" },
      { name: "role", field: "role" }
    ]

    const templateUser: User[] = [
      { id: 11, name: "Ayrton Senna", age: 34, role: "Driver" },
      { id: 12, name: "Alain Prost", age: 35, role: "Driver" },
      { id: 13, name: "Nigel Mansell", age: 36, role: "Driver" },
      { id: 14, name: "Nelson Piquet", age: 37, role: "Driver" },
      { id: 15, name: "Michael Schumacher", age: 38, role: "Driver" },
      { id: 16, name: "Lewis Hamilton", age: 39, role: "Driver" }
    ]

    let isUploadDataAvailable = ref(true)
    
    let isLoading = ref(false) 

    const addUsers = async() => {
         isLoading.value = true
         console.log('Adding users...');
         await new Promise(resolve => setTimeout(resolve, 10000)); // Simulate async operation
      users.value.push(...templateUser)
       isLoading.value = false
       console.log('Users added successfully');
    }
    

    const disableDataUpload = () => {
      isUploadDataAvailable.value = false
    }

    return {
      users,
      columns,
      isUploadDataAvailable,
      addUsers,
      disableDataUpload,
      isLoading
    }
  }
}
</script>
