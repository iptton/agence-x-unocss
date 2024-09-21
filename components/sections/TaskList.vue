<template>
    <div class="task-list">
        <div v-for="task in tasks" class="task-item">
            <h2>{{ task.name }}</h2>
            <p>转换状态: {{ task.completed ? '完成' : '进行中' }}</p>
            <div flex flex-row>
                <video width="100" height="100" :src="`/api/download/${task.originFile}`" controls></video>
                <video v-if="task.completed" :src="task.downloadUrl" controls></video>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ tasks: Task[] }>();
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