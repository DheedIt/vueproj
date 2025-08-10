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
  </header>

  <main>
   <!-- <p>{{ text }}</p>
   <p>Today's date is: {{ date }}</p> -->

   <form>
      <input type="text"
        v-model="text" 
        placeholder="text" />
    <p>
      <input
        type="date"
        v-model="date"
        placeholder="date" />
    </p>
    <p>
      <button @click="sendData()" type="button">
        Go to next page
      </button>
    </p>
   </form>
   
    <p>
      <router-link to="/about">
        Go to About
      </router-link>
    </p>
    <p>
      <router-link to="/">
        Go to Home
      </router-link>
    </p>
    <a href="/about">
      Go to About
    </a>
   
  </main>
</template>

<style scoped></style>
