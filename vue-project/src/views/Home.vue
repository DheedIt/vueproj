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
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    name: 'HomeItem',
    setup() {
        const text = ref<string>('');
        const date = ref<string>('');

        const router = useRouter()

        function isDateString(s: string): boolean {
            if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return false
            const [y, m, d] = s.split('-').map(Number)
            const dt = new Date(y, m - 1, d)
            return dt.getFullYear() === y
                && dt.getMonth() === m - 1
                && dt.getDate() === d
        };

        async function sendData() {
            if (!isDateString(date.value)) {
                alert('Введите корректную дату в формате ГГГГ-MM-DD')
                return false
            }
            await router.push({
                name: 'Next',
                query: { text: text.value, date: date.value }
            });
            return true
        };

        return {
            text,
            date,
            sendData
        };
    }
}
</script>
