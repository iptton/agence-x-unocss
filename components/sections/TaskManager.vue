<template>
    <div class="task-manager">
        <h1>任务管理</h1>
        <TaskForm @task-created="fetchTasks" />
        <TaskList :tasks="tasks" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import TaskForm from './TaskForm.vue';
import TaskList from './TaskList.vue';

const tasks = ref([]);

const fetchTasks = async () => {
    const response = await fetch('http://vt2.pan2017.cn/api/tasks');
    tasks.value = response.json();

};

onMounted(fetchTasks);
</script>

<style scoped>
.task-manager {
    padding: 1rem;
}
</style>