<script lang="ts">
export default {
  data() {
    return {
      userInput: [String, Date],
      text: new String(),
      date: new Date(),
    }
  },
  methods: {
    insertDate(value: Date) {
      this.date = value;
    },
    insertText(value: String) {
      this.text = value;
    },
    sendData() {
      // Assuming you want to navigate to another page with the data
      this.$router.push({
        name: 'NextPage', // Replace with your actual route name
        query: {
          text: this.text,
          date: this.date.toISOString() // Convert date to string if needed
        }
      });
      // You can also use this.$emit('dataSent', { text: this.text, date: this.date }) 
      // if you want to emit an event instead of navigating
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
  </main>
</template>

<style scoped></style>
