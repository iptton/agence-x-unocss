<template>
    <div class="task-list">
        <div v-for="task in tasks" :key="task.id" class="task-item">
            <h2>{{ task.title }}</h2>
            <p>转换状态: {{ task.status }}</p>
            <video v-if="task.convertedVideo" :src="task.convertedVideo" controls></video>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    tasks: Array
});
</script>

<style scoped>
.task-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.task-item {
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
}
</style>