<template>
    <main class="flex-1 mt-30">
        <div mx-auto>Tasks</div>
        <div v-for="task in tasks" :key="task.fileId">
            <div>{{ task.name }}</div>
            <div>{{ task.description }}</div>
        </div>
        <hr class="my-10" />
        <div>
            <form @submit.prevent="uploadFile" class="mt-20 p-4 border rounded-lg shadow-form"">
                <input type="file" name="file" id="file"/>
                <button type="submit">Translate!</button>
                <div v-if="errMsg" class="text-red-500">{{ errMsg }}</div>
            </form>
        </div>
    </main>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { listTasks, type Task } from '~/utils/tasks';
const errMsg = ref('');

function onFileChange(event: Event, fileId: string) {
    const input = document.getElementById('file') as HTMLInputElement;
    if (input.files && input.files.length > 0) {
        const file = input.files[0];
        const formData = new FormData();
        formData.append('file', file);

        fetch('/api/upload', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (!data.success) {
                    console.error(data.message);
                    throw new Error(data.message);
                }
                errMsg.value = '上传成功..创建任务中';
                return data.fileId;
            })
            .then(fileId => {
                // create tasks
                return fetch('/api/tasks', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        fileId
                    })
                });
            })
            .then(response => response.json())
            .then(data => {
                if (!data.success) {
                    console.error(data.message);
                    throw new Error(data.message);
                }
                errMsg.value = '任务创建成功';
                errMsg.value = '上传成功..刷新中';
                listTasks().then((res) => {
                    tasks.length = 0;
                    tasks.push(...res);
                    errMsg.value = '';
                });
            })
            .catch(error => {
                console.error('Error:', error);
                errMsg.value = error.message;
            });
    } else {
        console.log('No file selected');
    }
}

const tasks = reactive < Task[] > ([]);

onMounted(() => {

    listTasks().then((res) => {
        console.log(res);
        tasks.concat(...res);
    });
});
</script>

<style scoped>
.shadow-form {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>