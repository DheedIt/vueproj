<template>
    <div>
        <h2>
        <p>Text: {{ $route.query.text }}</p>
        <p>Date: {{ $route.query.date }}</p>
        </h2>
        <table>
            <caption>Data from Home</caption>
            <thead>
                <tr>
                    <th>Text</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ $route.query.text }}</td>
                    <td>{{ $route.query.date }}</td>
                </tr>   
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { caption } from '@primeuix/themes/aura/card';
let userInfo: [number, string, string];
export default {
    name: 'Next'
}
</script>
