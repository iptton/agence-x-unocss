<template>
    <form @submit.prevent="createTask" class="task-form">
        <div>
            <label for="title">标题</label>
            <input id="title" v-model="title" type="text" required />
        </div>
        <div absolute left-10 top-20 flex flex-wrap @click="triggerSelectFile">
            <div shadow-gray shadow border-1 p-2 flex flex-col items-center justify-center text-center>
                <div w-20 h-20 text-6xl>📁</div>
                <div>Upload</div>
            </div>
        </div>
        <div display-none>
            <label for="file">源视频</label>
            <input id="file" @change="handleFileChange" type="file" required />
        </div>
        <button type="submit">创建任务</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';

const title = ref('');
const file = ref(null);

const handleFileChange = (event) => {
    file.value = event.target.files[0];
};

function triggerSelectFile() {
    const fileInput = document.getElementById('file');
    fileInput.click();
}

const createTask = async () => {
    const formData = new FormData();
    formData.append('title', title.value);
    formData.append('file', file.value);

    const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData
    }).json();
    console.info(res)
};
</script>