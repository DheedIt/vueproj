<template>
    <header>
        <h2>
            <p>Text: {{ $route.query.text }}</p>
            <p>Date: {{ $route.query.date }}</p>
        </h2>
    </header>
    <body>
    <div class="addUsers">
        <button v-if="isUploadDataAvailable" @click="addUsers(); disableDataUpload()">Add Users</button>
        <p v-if="isLoading"> Loading </p>
    </div>
    <div class="filterTable">
        <form method="get">
            <p>
                <label for="filter"> Filter by </label>
                    <select name="users" id="filter"  v-model="selectedFilter">
                        <option value="">--Choose an option--</option>
                        <option value="byName">Name</option>
                        <option value="byId">Id</option>
                        <option value="byRole">Role</option>
                    </select>
            </p>
        </form>
    </div>
    <div class="inputFilter">
        <label for="userInput"> Search: </label>
        <input type="text" id="userInput" v-model="searchQuery" placeholder="Type to filter...">
    </div>
    <div class="userTable">
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
                <tr v-for="user in sortedUsers" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.age }}</td>
                    <td>{{ user.role }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    </body>
</template>

<script lang="ts">
import { computed, ref } from 'vue';

interface User {
    id: number
    name: string
    age: number
    role: string
}
export default {
    name: "NextItem",
    setup() {

        const isUploadDataAvailable = ref(true)
        const isLoading = ref(false)
        const selectedFilter = ref<string>('')
        const searchQuery = ref<string>('')

        const sortedUsers = computed(() => {
            let list = users.value.slice();
            if(searchQuery.value) list = list.filter(u => u.name.toLowerCase().includes(searchQuery.value.toLowerCase()));
            switch(selectedFilter.value){
                case 'byName':
                    return list.sort((a, b) => a.name.localeCompare(b.name));
                case 'byId':
                    return list.sort((a, b) => a.id - b.id);
                case 'byRole':
                    return list.sort((a, b) => a.role.localeCompare(b.role));
                default:
                    return list;
            }
        })
        
        const filtredUsers = computed(() => {
            const query = searchQuery.value.toLowerCase();
            if(!query) return users.value.slice();
            return sortedUsers.value.filter(u => u.name.toLocaleLowerCase().includes(query))

        })
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

        

        const addUsers = async () => {
            isLoading.value = true
            console.log('Adding users...');
            await new Promise(resolve => setTimeout(resolve, 10000)); // Simulate async operation
            users.value.push(...templateUser)
            isLoading.value = false
            console.log('Users added successfully');
        }

        const disableDataUpload = () => {isUploadDataAvailable.value = false}
     
        return {
            users,
            columns,
            isUploadDataAvailable,
            addUsers,
            disableDataUpload,
            isLoading,
            selectedFilter,
            sortedUsers,
            searchQuery,
            filtredUsers
        }
    }
}
</script>
