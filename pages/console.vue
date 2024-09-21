<template>
    <main class="flex-1 m-20">

        <div my-10 font-bold text-lg>Tasks</div>
        <SectionsTaskList :tasks="tasks" />
        <div class="text-lg font-bold py-10"> Create new task</div>

        <div flex-col>
            <form @submit.prevent="createTask($event)" class="flex flex-col gap-3 mt-20 p-4 border rounded-lg shadow-form">
                <input id="file" name="file" type="file"
                    class="file-input file-input-bordered file-input-success w-full max-w-xs" />
                <label class="input input-bordered flex items-center gap-2">
                    Name
                    <input type="text" required name="name" placeholder="input name"
                        class="grow" />
                </label>
                <div class="text-red-500">{{ errMsg }}</div>
                <button :enabled="enabledCreate" type="submit" class="btn btn-primary">Create Task</button>
            </form>
        </div>
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

function createTask(event: Event) {
    const input = document.getElementById('file') as HTMLInputElement;
   
    if (input.files && input.files.length > 0) {
        const file = input.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', (event.target as any).name.value ??  (new Date()).toISOString());

        fetch('/api/task', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.info(data)
                if (!data.success) {
                    console.error(data.message);
                    throw new Error(data.message);
                }
                errMsg.value = '任务创建成功';
                // listTasks().then((res) => {
                //     tasks.length = 0;
                //     tasks.push(...res.tasks);
                //     errMsg.value = '';
                // });
                tasks.push(data.task);
                return data.task;
            })
            .then((task) => {
                checkTaskStatus(task);
            })
            .catch(error => {
                console.error('Error:', error);
                errMsg.value = error.message;
            });
    } else {
        console.log('No file selected');
    }
}

function checkTaskStatus(task: Task) {
    console.info('Checking task status', task);
    fetch(`/api/tasks/status/${task.sessionId}`)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                task.completed = true;
                task.downloadUrl = data.url;
            } else {
                console.error(data);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

const tasks = reactive<Task[]>([]);

onMounted(() => {

    listTasks().then((res) => {
        console.log(res);
        tasks.push(...res.tasks);

        enabledCreate.value = tasks.find(task => !task.completed) === undefined;
    });
});
</script>

<style scoped>
.shadow-form {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>