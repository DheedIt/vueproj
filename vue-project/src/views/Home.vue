<template>
    <div>
        <form @submit.prevent="sendData">
            <input v-model="text" type="text" placeholder="text" />
            <input v-model="date" type="text" placeholder="date" />
            <button type="submit">Go to next page</button>
        </form>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Home',
    data() {
        return {
            text: '' as string,
            date: '' as string
        };
    },
    methods: {
        sendData() {
            if (!this.isDateString(this.date)) {
                alert('Введите корректную дату в формате ГГГГ-MM-DD')
                return false
            }
            this.$router.push({
                name: 'Next',
                query: { text: this.text, date: this.date }
            });
        },
        isDateString(s: string): boolean {
            if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return false
            const [y, m, d] = s.split('-').map(Number)
            const dt = new Date(y, m - 1, d)
            return dt.getFullYear() === y
                && dt.getMonth() === m - 1
                && dt.getDate() === d
        }
    }
}
</script>
