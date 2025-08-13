<script lang="ts">
export default {
  data() {
    return {
      userInput: [String, Date],
      text: '' as string,
      date: new Date as Date,
    }
  },
  methods: {
    insertDate(value: Date) {
      this.date = value;
    },
    insertText(value: string) {
      this.text = value;
    },
    sendData() {
      this.$router.push({
        name: 'About',
        query: {
          text: this.text,
          date: this.date.toISOString()
        }
      });
    }
  }
}
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
