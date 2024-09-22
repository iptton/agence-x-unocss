<template>
    <main class="flex-1 p-20">
        <!-- 
        <div my-10 font-bold text-lg>Tasks</div>
        <SectionsTaskList :tasks="tasks" />
        <div class="text-lg font-bold py-10"> Create new task</div> -->
        <SectionsGenerate />
    </main>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { listTasks, type Task } from '~/utils/tasks';
const errMsg = ref('');

let enabledCreate = ref(false);

function triggerSelectFile() {
    const fileInput = document.getElementById('file');
    fileInput!.click();
}

const tasks = reactive<Task[]>([]);

onMounted(() => {

    listTasks().then((res) => {
        console.log(res);
        tasks.push(...res.tasks);

        // enabledCreate.value = tasks.find(task => !task.completed) === undefined;
    });
});
</script>

<style scoped>
.shadow-form {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>