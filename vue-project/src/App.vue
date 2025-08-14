<script lang="ts">
 export default{

};

</script>

<template>
  <header>
    <h1>Vue 3 test project with TypeScript</h1>
  </header>
  <main>
    <router-link to="/">Home</router-link> |
    <router-link to="/next">Next</router-link>
    <router-view :key="$route.fullPath" />
  </main>
</template>

<style scoped></style>
